import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  if (Object.keys(env).some(name => /(?:SECRET|PASSWORD|PRIVATE|SERVICE_ROLE|OPENAI|DATABASE|BOT_TOKEN)/i.test(name))) {
    throw new Error('Private credentials must not use a VITE_ environment variable. Move them to server-side secrets.');
  }
  const supabaseUrl = env.VITE_SUPABASE_URL;
  return {
  // Only the existing public frontend configuration is eligible for browser exposure.
  envPrefix: ['VITE_SUPABASE_URL', 'VITE_SUPABASE_PUBLISHABLE_KEY'],
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      // Open the connection to the backend while the JS is still downloading.
      name: "preconnect-supabase",
      transformIndexHtml() {
        if (!supabaseUrl || !/^https:\/\//.test(supabaseUrl)) return [];
        return [{ tag: "link", attrs: { rel: "preconnect", href: supabaseUrl, crossorigin: "" }, injectTo: "head-prepend" as const }];
      },
    },
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (!id.includes('node_modules')) return undefined;
          if (/node_modules\/(react|react-dom|react-router|react-router-dom|@remix-run\/router|scheduler)\//.test(id)) return 'react';
          if (id.includes('@supabase')) return 'supabase';
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('@radix-ui')) return 'radix';
          if (id.includes('@tanstack')) return 'query';
          return undefined;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
});
