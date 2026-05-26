export default function Preview({ cvData }) {
  const { general, education, experience } = cvData;

  return (
    <div id="cv-preview">
      <header className="cv-header">
        <h1 className="cv-name">
          {general.name || <span className="cv-placeholder">Your Name</span>}
        </h1>
        <div className="cv-contact">
          {general.email && <span>{general.email}</span>}
          {general.phone && <span>{general.phone}</span>}
        </div>
      </header>

      <section className="cv-section">
        <h2 className="cv-section-title">Education</h2>
        <div className="cv-entry">
          <div className="cv-entry-header">
            <h3>{education.school || <span className="cv-placeholder">School Name</span>}</h3>
            {education.date && <span className="date">{education.date}</span>}
          </div>
          {education.degree && <p className="subtitle">{education.degree}</p>}
        </div>
      </section>

      {experience.length > 0 && (
        <section className="cv-section">
          <h2 className="cv-section-title">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="cv-entry">
              <div className="cv-entry-header">
                <h3>{exp.company}</h3>
                {(exp.startDate || exp.endDate) && (
                  <span className="date">
                    {exp.startDate}{exp.endDate ? ` – ${exp.endDate}` : ""}
                  </span>
                )}
              </div>
              {exp.position && <p className="subtitle">{exp.position}</p>}
              {exp.responsibilities && <p>{exp.responsibilities}</p>}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
