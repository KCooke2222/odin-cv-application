import { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";
import Forms from "./components/Forms.jsx";
import Preview from "./components/Preview.jsx";
import "./styles/App.css";

const defaultData = {
  general: { name: "", email: "", phone: "" },
  education: { school: "", degree: "", date: "" },
  experience: [],
};

function App() {
  const [cvData, setCvData] = useState(() => {
    const saved = localStorage.getItem("cvData");
    return saved ? JSON.parse(saved) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData));
  }, [cvData]);

  function downloadPDF() {
    const element = document.getElementById("cv-preview");
    html2pdf().set({
      margin: 0,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "px",
        format: [element.offsetWidth, element.offsetHeight],
        orientation: "portrait",
      },
    }).from(element).save();
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <Forms cvData={cvData} setCvData={setCvData} />
      </aside>
      <main className="preview-pane">
        <Preview cvData={cvData} />
        <button className="btn-download" onClick={downloadPDF}>
          Download PDF
        </button>
      </main>
    </div>
  );
}

export default App;
