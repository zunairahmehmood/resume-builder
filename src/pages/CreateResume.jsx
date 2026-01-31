import { useState, useContext } from "react";
import PersonalInfo from "../components/resume/PersonalInfo.jsx";
import Summary from "../components/resume/Summary.jsx";
import Education from "../components/resume/Education.jsx";
import Skills from "../components/resume/Skills.jsx";
import TemplateSelect from "../components/resume/TemplateSelect.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import "../CreateResume.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { AuthContext } from "../context/AuthContext";

const CreateResume = () => {
  const { user } = useContext(AuthContext);
  const [step, setStep] = useState(1);

  const [resumeData, setResumeData] = useState({
    title: "",
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
    summary: "",
    education: [],
    skills: [],
    template: "template1",
  });

  // 🔥 FINAL SAVE FUNCTION
  const saveResume = async () => {
    if (!user) {
      alert("User not logged in");
      return;
    }

    await addDoc(collection(db, "resumes"), {
      ...resumeData,
      userId: user.uid,      // 🔥 THIS FIXES DASHBOARD
      createdAt: new Date(),
    });

    alert("Resume saved successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="create-resume">
        <div className="resume-container">

          {step === 1 && (
            <PersonalInfo
              resumeData={resumeData}
              setResumeData={setResumeData}
              next={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <Summary
              resumeData={resumeData}
              setResumeData={setResumeData}
              next={() => setStep(3)}
              back={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <Education
              resumeData={resumeData}
              setResumeData={setResumeData}
              next={() => setStep(4)}
              back={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <Skills
              resumeData={resumeData}
              setResumeData={setResumeData}
              next={() => setStep(5)}
              back={() => setStep(3)}
            />
          )}

          {step === 5 && (
            <TemplateSelect
              resumeData={resumeData}
              back={() => setStep(4)}
              saveResume={saveResume}   // 🔥 PASS HERE
            />
          )}

        </div>
      </div>
    </>
  );
};

export default CreateResume;
