export default function Forms({ cvData, setCvData }) {
  return (
    <div>
      <p className="sidebar-title">CV Builder</p>
      <GeneralForm cvData={cvData} setCvData={setCvData} />
      <EducationForm cvData={cvData} setCvData={setCvData} />
      <ExperienceForm cvData={cvData} setCvData={setCvData} />
    </div>
  );
}

function GeneralForm({ cvData, setCvData }) {
  function handleChange(e) {
    setCvData({
      ...cvData,
      general: { ...cvData.general, [e.target.name]: e.target.value },
    });
  }

  return (
    <section className="form-section">
      <h2>Personal Info</h2>
      <div className="fields">
        <label>
          Full Name
          <input name="name" type="text" value={cvData.general.name} onChange={handleChange} placeholder="Jane Smith" />
        </label>
        <label>
          Email
          <input name="email" type="email" value={cvData.general.email} onChange={handleChange} placeholder="jane@example.com" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" value={cvData.general.phone} onChange={handleChange} placeholder="+1 555 000 0000" />
        </label>
      </div>
    </section>
  );
}

function EducationForm({ cvData, setCvData }) {
  function handleChange(e) {
    setCvData({
      ...cvData,
      education: { ...cvData.education, [e.target.name]: e.target.value },
    });
  }

  return (
    <section className="form-section">
      <h2>Education</h2>
      <div className="fields">
        <label>
          School
          <input name="school" type="text" value={cvData.education.school} onChange={handleChange} placeholder="University of Example" />
        </label>
        <label>
          Degree / Field of Study
          <input name="degree" type="text" value={cvData.education.degree} onChange={handleChange} placeholder="B.Sc. Computer Science" />
        </label>
        <label>
          Date
          <input name="date" type="text" value={cvData.education.date} onChange={handleChange} placeholder="2020 – 2024" />
        </label>
      </div>
    </section>
  );
}

function ExperienceForm({ cvData, setCvData }) {
  function addExperience() {
    setCvData({
      ...cvData,
      experience: [
        ...cvData.experience,
        {
          id: crypto.randomUUID(),
          company: "",
          position: "",
          responsibilities: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  }

  function removeExperience(id) {
    setCvData({
      ...cvData,
      experience: cvData.experience.filter((exp) => exp.id !== id),
    });
  }

  function updateExperience(id, field, value) {
    setCvData({
      ...cvData,
      experience: cvData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp,
      ),
    });
  }

  return (
    <section className="form-section">
      <h2>Experience</h2>

      {cvData.experience.map((exp) => (
        <div key={exp.id} className="experience-entry">
          <div className="entry-top">
            <button
              type="button"
              className="btn-remove"
              onClick={() => removeExperience(exp.id)}
            >
              ✕ Remove
            </button>
          </div>
          <div className="fields">
            <label>
              Company
              <input type="text" value={exp.company} placeholder="Acme Corp" onChange={(e) => updateExperience(exp.id, "company", e.target.value)} />
            </label>
            <label>
              Position
              <input type="text" value={exp.position} placeholder="Software Engineer" onChange={(e) => updateExperience(exp.id, "position", e.target.value)} />
            </label>
            <label>
              Start Date
              <input type="text" value={exp.startDate} placeholder="Jan 2023" onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)} />
            </label>
            <label>
              End Date
              <input type="text" value={exp.endDate} placeholder="Present" onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)} />
            </label>
            <label>
              Responsibilities
              <textarea value={exp.responsibilities} placeholder="Describe your main responsibilities..." onChange={(e) => updateExperience(exp.id, "responsibilities", e.target.value)} />
            </label>
          </div>
        </div>
      ))}

      <button type="button" className="btn-add" onClick={addExperience}>
        + Add Experience
      </button>
    </section>
  );
}
