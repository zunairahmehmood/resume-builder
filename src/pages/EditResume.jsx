import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import PersonalInfo from "../components/resume/PersonalInfo";

const EditResume = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      const ref = doc(db, "resumes", id);
      const snap = await getDoc(ref);
      if (snap.exists()) setResumeData(snap.data());
    };
    fetchResume();
  }, [id]);

  const updateResume = async () => {
    const ref = doc(db, "resumes", id);
    await updateDoc(ref, resumeData);
    navigate("/dashboard");
  };

  if (!resumeData) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <PersonalInfo
          resumeData={resumeData}
          setResumeData={setResumeData}
          next={updateResume}
        />
      </div>
    </>
  );
};

export default EditResume;