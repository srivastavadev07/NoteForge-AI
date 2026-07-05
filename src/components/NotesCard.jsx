import { FaCopy } from "react-icons/fa";

import jsPDF from "jspdf";

function NotesCard({ notes }) {

  const handleCopy = () => {
    navigator.clipboard.writeText(notes);
    alert("Copied Successfully!");
  };

  const wordCount = notes
    ? notes.split(/\s+/).length
    : 0;

const downloadPDF = () => {
  const doc = new jsPDF();

  const pageHeight = doc.internal.pageSize.height;
  const margin = 15;
  const lineHeight = 7;

  const lines = doc.splitTextToSize(notes, 180);

  let y = margin;

  lines.forEach((line) => {
    if (y > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }

    doc.text(line, margin, y);
    y += lineHeight;
  });

  doc.save("NoteForgeAI.pdf");
};


  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl w-full max-w-3xl mt-8 shadow-lg">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-bold">
          Generated Notes
        </h2>

        <button
          onClick={handleCopy}
          className="bg-[#915EFF] px-4 py-2 rounded-lg text-white flex items-center gap-2"
        >
          <FaCopy />
          Copy Notes
        </button>
      </div>
      <p className="text-gray-300 whitespace-pre-wrap">
        {notes || "Your generated notes will appear here..."}
      </p>

      <p className="text-gray-400 mt-4">
        Words: {wordCount}
      </p>
      
<button
  onClick={downloadPDF}
  className="mt-5 ml-70 bg-green-600 px-4 py-2 rounded-lg text-white"
>
  Download PDF
</button>
    </div>
    
  );
}

export default NotesCard;