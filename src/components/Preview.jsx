export default function Preview({ cvData }) {
  return (
    <>
      <div>
        <h1>{cvData.general.name}</h1>
        <p>{cvData.general.email}</p>
        <p>{cvData.general.phone}</p>
      </div>

      <div>
        <h2>Education</h2>
        <p>{cvData.education.school}</p>
        <p>{cvData.education.degree}</p>
        <p>{cvData.education.date}</p>
      </div>

      {cvData.experience.map((exp) => (
        <div key={exp.id}>
          <h3>{exp.company}</h3>
          <p>{exp.position}</p>
          <p>{exp.responsibilities}</p>
          <p>
            {exp.startDate} - {exp.endDate}
          </p>
        </div>
      ))}
    </>
  );
}
