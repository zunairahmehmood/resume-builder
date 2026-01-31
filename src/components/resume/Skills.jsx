import { useState } from "react";

const Skills = ({ resumeData, setResumeData, next, back }) => {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill],
    });
    setSkill("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Skills</h2>

      <input
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="e.g. React, JavaScript"
      />

      <button
        onClick={addSkill}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        Add Skill
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

export default Skills;