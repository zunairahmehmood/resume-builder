import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState, useRef } from "react";
import ResumeTemplate1 from "../components/resume/ResumeTemplate1";
import { downloadResumePDF } from "../utils/pdfGenerator";
import Navbar from "../components/layout/Navbar";
import "../PreviewResume.css";

const PreviewResume = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const resumeRef = useRef();

  useEffect(() => {
    const fetchResume = async () => {
      const snap = await getDoc(doc(db, "resumes", id));
      

      if (snap.exists()) {
        setResume(snap.data());
      } else {
        console.log("No resume found");
      }
    };

    fetchResume();
  }, [id]);

  if (!resume) {
    return <p className="loading">Loading resume...</p>;
  }

  return (
    <>
      <Navbar />

      <div className="preview-page">
        <div className="preview-actions">
          <button
            onClick={() => downloadResumePDF(resumeRef)}
            className="download-btn"
          >
            ⬇ Download PDF
          </button>
        </div>

        <div className="resume-preview" ref={resumeRef}>
          <ResumeTemplate1 resume={resume} />
        </div>
      </div>
    </>
  );
};

export default PreviewResume;