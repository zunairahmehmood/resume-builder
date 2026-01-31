import { Link } from "react-router-dom";

const ResumeCard = ({ resume }) => {
  return (
    <div className="resume-card">
      <h3 className="resume-name">
        {resume?.personalInfo?.fullName || "Unnamed Resume"}
      </h3>

      <p className="resume-email">
        {resume?.personalInfo?.email || "No email"}
      </p>

      <p className="resume-skills">
        {Array.isArray(resume?.skills)
          ? resume.skills.join(", ")
          : "No skills"}
      </p>

      <Link
        to={`/preview/${resume.id}`}
        className="resume-view-btn"
      >
        View Resume
      </Link>
    </div>
  );
};

export default ResumeCard;
