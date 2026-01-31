const ResumeTemplate1 = ({ resume }) => {
  const { personalInfo, summary, education, skills } = resume;

  return (
    <div
      id="resume"
      className="max-w-3xl mx-auto bg-white p-8 shadow"
    >
      <h1 className="text-3xl font-bold">
        {personalInfo.fullName}
      </h1>
      <p className="text-gray-600">
        {personalInfo.email} | {personalInfo.phone}
      </p>

      <hr className="my-4" />

      <h2 className="font-bold text-lg">Summary</h2>
      <p className="mb-4">{summary}</p>

      <h2 className="font-bold text-lg">Education</h2>
      {education.map((edu, i) => (
        <p key={i}>
          {edu.degree} — {edu.institute} ({edu.year})
        </p>
      ))}

      <h2 className="font-bold text-lg mt-4">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <li
            key={i}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeTemplate1;