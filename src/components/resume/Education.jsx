import { useState } from "react";

const Education = ({ resumeData, setResumeData, next, back }) => {
  const [edu, setEdu] = useState({
    institute: "",
    degree: "",
    year: "",
  });

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, edu],
    });
    setEdu({ institute: "", degree: "", year: "" });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Education</h2>

      <input
        placeholder="Institute"
        className="border p-2 w-full mb-2"
        value={edu.institute}
        onChange={(e) => setEdu({ ...edu, institute: e.target.value })}
      />

      <input
        placeholder="Degree"
        className="border p-2 w-full mb-2"
        value={edu.degree}
        onChange={(e) => setEdu({ ...edu, degree: e.target.value })}
      />

      <input
        placeholder="Year"
        className="border p-2 w-full mb-2"
        value={edu.year}
        onChange={(e) => setEdu({ ...edu, year: e.target.value })}
      />

      <button
        onClick={addEducation}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        + Add
      </button>

      <div className="flex justify-between mt-4">
        <button onClick={back} className="border px-4 py-2 rounded">
          Back
        </button>
        <button
          onClick={next}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Education;