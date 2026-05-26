import { useState } from "react";
import Forms from "./components/Forms.jsx";
import Preview from "./components/Preview.jsx";
import "./styles/App.css";

function App() {
  const [cvData, setCvData] = useState({
    general: {
      name: "",
      email: "",
      phone: "",
    },
    education: {
      school: "",
      degree: "",
      date: "",
    },
    experience: [],
  });

  return (
    <>
      <Forms cvData={cvData} setCvData={setCvData} />
      <Preview cvData={cvData} />
    </>
  );
}

export default App;
