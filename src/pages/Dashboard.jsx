import Navbar from "../components/layout/Navbar";
import ResumeCard from "../components/resume/ResumeCard";
import useResumes from "../hooks/useResumes";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../dashboard.css";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // 🔥 VERY IMPORTANT
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading || !user) {
    return null; // avoid blank crash
  }

  const resumes = useResumes(user.uid);

  const filteredResumes = resumes.filter(
    (resume) =>
      resume.personalInfo?.fullName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      resume.skills?.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Navbar />

      <div className="dashboard-header">
        <h2 className="dashboard-title">My Resumes</h2>

        <Link to="/create-resume" className="create-btn">
          + Create Resume
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search by name or skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="dashboard-search"
      />

      {filteredResumes.length === 0 ? (
        <div className="empty-state">
          <p>No resumes found</p>
          <p>Create your first resume 🚀</p>
        </div>
      ) : (
        <div className="resume-grid">
          {filteredResumes.map((resume) => (
            <ResumeCard
              key={resume.id}
              resume={resume}
              userId={user.uid}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
