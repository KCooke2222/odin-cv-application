export default function Forms({ cvData, setCvData }) {
  return (
    <div>
      <GeneralForm cvData={cvData} setCvData={setCvData} />
      <EducationForm cvData={cvData} setCvData={setCvData} />
      <ExperienceForm cvData={cvData} setCvData={setCvData} />
    </div>
  );
}

function GeneralForm({ cvData, setCvData }) {
  function handleGeneralChange(e) {
    setCvData({
      ...cvData,
      general: {
        ...cvData.general,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <div>
      <input
        name="name"
        type="text"
        value={cvData.general.name}
        onChange={handleGeneralChange}
        placeholder="Name"
      />

      <input
        name="email"
        type="email"
        value={cvData.general.email}
        onChange={handleGeneralChange}
        placeholder="Email"
      />

      <input
        name="phone"
        type="tel"
        value={cvData.general.phone}
        onChange={handleGeneralChange}
        placeholder="Phone"
      />
    </div>
  );
}

function EducationForm({ cvData, setCvData }) {
  function handleEducationChange(e) {
    setCvData({
      ...cvData,
      education: {
        ...cvData.education,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <div>
      <input
        name="school"
        type="text"
        value={cvData.education.school}
        onChange={handleEducationChange}
        placeholder="School"
      />

      <input
        name="degree"
        type="text"
        value={cvData.education.degree}
        onChange={handleEducationChange}
        placeholder="Degree"
      />

      <input
        name="date"
        type="text"
        value={cvData.education.date}
        onChange={handleEducationChange}
        placeholder="Date"
      />
    </div>
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

  function updateExperience(id, field, value) {
    setCvData({
      ...cvData,
      experience: cvData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp,
      ),
    });
  }

  return (
    <section>
      <h2>Experience</h2>

      {cvData.experience.map((exp) => (
        <div key={exp.id}>
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) =>
              updateExperience(exp.id, "company", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Position"
            value={exp.position}
            onChange={(e) =>
              updateExperience(exp.id, "position", e.target.value)
            }
          />

          <textarea
            placeholder="Responsibilities"
            value={exp.responsibilities}
            onChange={(e) =>
              updateExperience(exp.id, "responsibilities", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Start Date"
            value={exp.startDate}
            onChange={(e) =>
              updateExperience(exp.id, "startDate", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="End Date"
            value={exp.endDate}
            onChange={(e) =>
              updateExperience(exp.id, "endDate", e.target.value)
            }
          />
        </div>
      ))}

      <button type="button" onClick={addExperience}>
        Add Experience
      </button>
    </section>
  );
}
