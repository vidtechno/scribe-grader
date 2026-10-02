import { useCallback, useEffect, useRef, useState } from 'react';
import { EditorContent, useEditor, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Youtube from '@tiptap/extension-youtube';
import { Table, TableCell, TableHeader, TableRow } from '@tiptap/extension-table';
import {
  AlignCenter, AlignLeft, Bold, Code2, Heading2, Heading3, ImagePlus, Italic, Link as LinkIcon, List, ListOrdered,
  Loader2, Minus, Quote, Redo2, Strikethrough, Table as TableIcon, Trash2, Underline as UnderlineIcon, Undo2, Youtube as YoutubeIcon, Unlink,
} from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { uploadBlogImage } from '@/lib/blog';

const SIZES = [['sm', 'S'], ['md', 'M'], ['lg', 'L'], ['full', 'Full']] as const;

const BlogImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      size: {
        default: 'full',
        parseHTML: (el: HTMLElement) => el.getAttribute('data-size') || 'full',
        renderHTML: (attrs: Record<string, unknown>) => ({ 'data-size': attrs.size }),
      },
    };
  },
}).configure({ inline: false, allowBase64: false });

function Btn({ onClick, active, disabled, label, children }: { onClick: () => void; active?: boolean; disabled?: boolean; label: string; children: React.ReactNode }) {
  return (
    <button type="button" title={label} aria-label={label} disabled={disabled} onMouseDown={(e) => e.preventDefault()} onClick={onClick}
      className={`h-8 w-8 grid place-items-center rounded-md text-sm transition-colors disabled:opacity-40 ${active ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}>
      {children}
    </button>
  );
}
const Sep = () => <span className="mx-1 h-5 w-px bg-border" />;

export function RichTextEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const editorRef = useRef<Editor | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const uploadAndInsert = useCallback(async (files: File[], pos?: number) => {
    const ed = editorRef.current;
    if (!ed) return;
    setUploading(true);
    try {
      for (const file of files) {
        const url = await uploadBlogImage(file);
        const alt = file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
        const chain = ed.chain().focus();
        if (pos != null) chain.insertContentAt(pos, { type: 'image', attrs: { src: url, alt } }).run();
        else chain.setImage({ src: url, alt }).run();
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Image upload failed');
    } finally { setUploading(false); }
  }, []);

  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] }, link: { openOnClick: false, autolink: true, HTMLAttributes: { rel: 'noopener' } } }),
      BlogImage,
      Placeholder.configure({ placeholder: 'Start writing… Paste or drag images straight into the text.' }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Youtube.configure({ nocookie: true, width: 640, height: 360 }),
      Table.configure({ resizable: false }), TableRow, TableHeader, TableCell,
    ],
    content: value,
    onUpdate: ({ editor: ed }) => onChange(ed.getHTML()),
    editorProps: {
      attributes: { class: 'blog-prose min-h-[420px] px-5 py-4 focus:outline-none' },
      handlePaste: (_view, event) => {
        const files = Array.from(event.clipboardData?.files || []).filter(f => f.type.startsWith('image/'));
        if (!files.length) return false;
        void uploadAndInsert(files);
        return true;
      },
      handleDrop: (view, event) => {
        const files = Array.from((event as DragEvent).dataTransfer?.files || []).filter(f => f.type.startsWith('image/'));
        if (!files.length) return false;
        const pos = view.posAtCoords({ left: (event as DragEvent).clientX, top: (event as DragEvent).clientY })?.pos;
        void uploadAndInsert(files, pos);
        return true;
      },
    },
  });
  editorRef.current = editor;

  // Keep the editor in sync when a different post is loaded.
  useEffect(() => {
    if (editor && value !== editor.getHTML() && !editor.isFocused) editor.commands.setContent(value, { emitUpdate: false });
  }, [value, editor]);

  if (!editor) return null;

  const setLink = () => {
    const prev = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Link URL', prev || 'https://');
    if (url === null) return;
    if (url === '') { editor.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };
  const addYoutube = () => {
    const url = window.prompt('YouTube video URL');
    if (url) editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };
  const imageActive = editor.isActive('image');
  const imageAttrs = editor.getAttributes('image');

  return (
    <div className="rounded-xl border bg-card">
      <div className="sticky top-16 z-10 flex flex-wrap items-center gap-0.5 rounded-t-xl border-b bg-card/95 backdrop-blur p-1.5">
        <Btn label="Undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}><Undo2 className="h-4 w-4" /></Btn>
        <Btn label="Redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}><Redo2 className="h-4 w-4" /></Btn>
        <Sep />
        <Btn label="Heading 2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}><Heading2 className="h-4 w-4" /></Btn>
        <Btn label="Heading 3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}><Heading3 className="h-4 w-4" /></Btn>
        <Sep />
        <Btn label="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}><Bold className="h-4 w-4" /></Btn>
        <Btn label="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic className="h-4 w-4" /></Btn>
        <Btn label="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}><UnderlineIcon className="h-4 w-4" /></Btn>
        <Btn label="Strikethrough" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}><Strikethrough className="h-4 w-4" /></Btn>
        <Sep />
        <Btn label="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}><List className="h-4 w-4" /></Btn>
        <Btn label="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered className="h-4 w-4" /></Btn>
        <Btn label="Quote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote className="h-4 w-4" /></Btn>
        <Btn label="Code block" active={editor.isActive('codeBlock')} onClick={() => editor.chain().focus().toggleCodeBlock().run()}><Code2 className="h-4 w-4" /></Btn>
        <Btn label="Divider" onClick={() => editor.chain().focus().setHorizontalRule().run()}><Minus className="h-4 w-4" /></Btn>
        <Sep />
        <Btn label="Align left" active={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()}><AlignLeft className="h-4 w-4" /></Btn>
        <Btn label="Align center" active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}><AlignCenter className="h-4 w-4" /></Btn>
        <Sep />
        <Btn label="Add link" active={editor.isActive('link')} onClick={setLink}><LinkIcon className="h-4 w-4" /></Btn>
        {editor.isActive('link') && <Btn label="Remove link" onClick={() => editor.chain().focus().unsetLink().run()}><Unlink className="h-4 w-4" /></Btn>}
        <Btn label="Insert image at cursor" onClick={() => fileRef.current?.click()} disabled={uploading}>
          {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImagePlus className="h-4 w-4" />}
        </Btn>
        <Btn label="Insert table" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}><TableIcon className="h-4 w-4" /></Btn>
        <Btn label="Embed YouTube video" onClick={addYoutube}><YoutubeIcon className="h-4 w-4" /></Btn>
        <input ref={fileRef} type="file" accept="image/*" multiple hidden onChange={(e) => { const f = Array.from(e.target.files || []); e.target.value = ''; if (f.length) void uploadAndInsert(f); }} />
      </div>

      {imageActive && (
        <div className="flex flex-wrap items-center gap-2 border-b bg-secondary/40 px-3 py-2 text-xs">
          <span className="font-semibold">Image</span>
          <Input aria-label="Image description (alt text)" className="h-8 max-w-xs text-xs" placeholder="Describe the image (alt text, good for SEO)"
            value={imageAttrs.alt || ''} onChange={(e) => editor.chain().updateAttributes('image', { alt: e.target.value }).run()} />
          <div className="flex rounded-md border overflow-hidden">
            {SIZES.map(([k, label]) => (
              <button key={k} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => editor.chain().updateAttributes('image', { size: k }).run()}
                className={`px-2.5 py-1 ${((imageAttrs.size as string) || 'full') === k ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}>{label}</button>
            ))}
          </div>
          <Btn label="Delete image" onClick={() => editor.chain().focus().deleteSelection().run()}><Trash2 className="h-4 w-4 text-destructive" /></Btn>
          <span className="text-muted-foreground hidden md:inline">Drag the image to move it.</span>
        </div>
      )}
      {editor.isActive('table') && (
        <div className="flex flex-wrap items-center gap-2 border-b bg-secondary/40 px-3 py-2 text-xs">
          <span className="font-semibold">Table</span>
          {[['Add column', () => editor.chain().focus().addColumnAfter().run()], ['Add row', () => editor.chain().focus().addRowAfter().run()],
            ['Delete column', () => editor.chain().focus().deleteColumn().run()], ['Delete row', () => editor.chain().focus().deleteRow().run()],
            ['Delete table', () => editor.chain().focus().deleteTable().run()]].map(([label, fn]) => (
            <button key={label as string} type="button" onMouseDown={(e) => e.preventDefault()} onClick={fn as () => void} className="rounded-md border px-2 py-1 hover:bg-secondary">{label as string}</button>
          ))}
        </div>
      )}
      <EditorContent editor={editor} />
    </div>
  );
}
