import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface ErrorCorrectionItem {
  original: string;
  corrected: string;
  explanation: string;
}

interface Feedback {
  overallBand: number;
  taskAchievement: { score: number; feedback: string };
  coherenceCohesion: { score: number; feedback: string };
  lexicalResource: { score: number; feedback: string };
  grammaticalRange: { score: number; feedback: string };
  suggestions: string[];
  strengths: string[];
  errorCorrections?: ErrorCorrectionItem[];
}

interface EssayData {
  task_type: string;
  topic: string;
  essay_text: string;
  word_count: number;
  score: number | null;
  feedback: Feedback | null;
  created_at: string;
}

export function generateResultPdf(essay: EssayData) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  const addPageIfNeeded = (requiredSpace: number) => {
    if (y + requiredSpace > doc.internal.pageSize.getHeight() - 20) {
      doc.addPage();
      y = 20;
    }
  };

  const drawSectionTitle = (title: string) => {
    addPageIfNeeded(20);
    doc.setFillColor(99, 102, 241);
    doc.roundedRect(margin, y, contentWidth, 10, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin + 4, y + 7);
    doc.setTextColor(0, 0, 0);
    y += 16;
  };

  // Header
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 45, 'F');
  
  doc.setTextColor(99, 102, 241);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('WritingExam.uz', margin, 18);
  
  doc.setTextColor(148, 163, 184);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('AI-Powered IELTS Writing Evaluation', margin, 26);
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Essay Evaluation Report', margin, 38);
  
  // Overall score badge on right
  if (essay.score !== null) {
    doc.setFillColor(99, 102, 241);
    doc.roundedRect(pageWidth - margin - 30, 10, 30, 28, 4, 4, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(String(essay.score), pageWidth - margin - 15, 27, { align: 'center' });
    doc.setFontSize(7);
    doc.text('BAND', pageWidth - margin - 15, 34, { align: 'center' });
  }

  y = 55;

  // Meta info
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const dateStr = new Date(essay.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  doc.text(`${essay.task_type}  |  ${dateStr}  |  ${essay.word_count} words`, margin, y);
  y += 10;

  const feedback = essay.feedback;

  if (feedback) {
    // Criteria Scores Table
    drawSectionTitle('Score Breakdown');
    
    const criteria = [
      ['Task Achievement', String(feedback.taskAchievement.score)],
      ['Coherence & Cohesion', String(feedback.coherenceCohesion.score)],
      ['Lexical Resource', String(feedback.lexicalResource.score)],
      ['Grammatical Range & Accuracy', String(feedback.grammaticalRange.score)],
      ['Overall Band Score', String(feedback.overallBand)],
    ];

    (doc as any).autoTable({
      startY: y,
      head: [['Criterion', 'Score']],
      body: criteria,
      margin: { left: margin, right: margin },
      styles: { fontSize: 10, cellPadding: 4 },
      headStyles: { fillColor: [99, 102, 241], textColor: 255 },
      alternateRowStyles: { fillColor: [248, 250, 252] },
      columnStyles: { 1: { halign: 'center', fontStyle: 'bold' } },
    });
    y = (doc as any).lastAutoTable.finalY + 10;

    // Detailed Feedback
    drawSectionTitle('Detailed Feedback');

    const feedbackSections = [
      { title: 'Task Achievement', text: feedback.taskAchievement.feedback },
      { title: 'Coherence & Cohesion', text: feedback.coherenceCohesion.feedback },
      { title: 'Lexical Resource', text: feedback.lexicalResource.feedback },
      { title: 'Grammatical Range & Accuracy', text: feedback.grammaticalRange.feedback },
    ];

    feedbackSections.forEach((section) => {
      addPageIfNeeded(30);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(99, 102, 241);
      doc.text(section.title, margin, y);
      y += 5;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      doc.setFontSize(9);
      const lines = doc.splitTextToSize(section.text, contentWidth);
      addPageIfNeeded(lines.length * 4 + 5);
      doc.text(lines, margin, y);
      y += lines.length * 4 + 6;
    });

    // Strengths
    if (feedback.strengths?.length) {
      drawSectionTitle('Strengths');
      feedback.strengths.forEach((s, i) => {
        addPageIfNeeded(12);
        doc.setFontSize(9);
        doc.setTextColor(22, 163, 74);
        doc.text(`✓`, margin, y);
        doc.setTextColor(51, 65, 85);
        const lines = doc.splitTextToSize(s, contentWidth - 8);
        doc.text(lines, margin + 8, y);
        y += lines.length * 4 + 3;
      });
      y += 4;
    }

    // Suggestions
    if (feedback.suggestions?.length) {
      drawSectionTitle('Areas for Improvement');
      feedback.suggestions.forEach((s, i) => {
        addPageIfNeeded(12);
        doc.setFontSize(9);
        doc.setTextColor(234, 179, 8);
        doc.text(`${i + 1}.`, margin, y);
        doc.setTextColor(51, 65, 85);
        const lines = doc.splitTextToSize(s, contentWidth - 8);
        doc.text(lines, margin + 8, y);
        y += lines.length * 4 + 3;
      });
      y += 4;
    }

    // Error Corrections
    if (feedback.errorCorrections?.length) {
      drawSectionTitle('Error Corrections');
      
      const errData = feedback.errorCorrections.map(e => [e.original, e.corrected, e.explanation]);
      (doc as any).autoTable({
        startY: y,
        head: [['Original (Error)', 'Corrected', 'Explanation']],
        body: errData,
        margin: { left: margin, right: margin },
        styles: { fontSize: 8, cellPadding: 3 },
        headStyles: { fillColor: [220, 38, 38], textColor: 255 },
        columnStyles: {
          0: { textColor: [220, 38, 38] },
          1: { textColor: [22, 163, 74] },
        },
        alternateRowStyles: { fillColor: [248, 250, 252] },
      });
      y = (doc as any).lastAutoTable.finalY + 10;
    }
  }

  // Topic
  drawSectionTitle('Topic');
  doc.setFontSize(9);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(100, 116, 139);
  const topicLines = doc.splitTextToSize(essay.topic, contentWidth);
  addPageIfNeeded(topicLines.length * 4 + 5);
  doc.text(topicLines, margin, y);
  y += topicLines.length * 4 + 8;

  // Original Essay
  drawSectionTitle('Your Essay');
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  const essayLines = doc.splitTextToSize(essay.essay_text, contentWidth);
  
  essayLines.forEach((line: string) => {
    addPageIfNeeded(6);
    doc.text(line, margin, y);
    y += 4;
  });

  // Footer on each page
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    const pageH = doc.internal.pageSize.getHeight();
    doc.setFillColor(248, 250, 252);
    doc.rect(0, pageH - 15, pageWidth, 15, 'F');
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);
    doc.text('Generated by WritingExam.uz — AI-Powered IELTS Writing Practice', margin, pageH - 6);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageH - 6, { align: 'right' });
  }

  doc.save(`WritingExam_Report_${essay.task_type.replace(' ', '')}_Band${essay.score || 'NA'}.pdf`);
}
