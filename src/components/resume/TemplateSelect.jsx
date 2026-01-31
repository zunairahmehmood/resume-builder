import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const TemplateSelect = ({ resumeData, setResumeData, back }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const saveResume = async () => {
    if (!user) return;

    await addDoc(collection(db, "resumes"), {
      ...resumeData,
      userId: user.uid,          // 🔥 THIS IS THE KEY
      createdAt: new Date(),
    });

    navigate("/dashboard");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Select Template</h2>

      <select
        className="border p-2 w-full"
        value={resumeData.template}
        onChange={(e) =>
          setResumeData({ ...resumeData, template: e.target.value })
        }
      >
        <option value="template1">Professional Template</option>
      </select>

      <div className="flex justify-between mt-6">
        <button onClick={back} className="border px-4 py-2 rounded">
          Back
        </button>

        <button
          onClick={saveResume}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Resume
        </button>
      </div>
    </div>
  );
};

export default TemplateSelect;
