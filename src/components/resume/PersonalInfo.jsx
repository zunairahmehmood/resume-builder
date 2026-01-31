import Input from "../ui/Input";

const PersonalInfo = ({ resumeData, setResumeData, next }) => {
  const { personalInfo } = resumeData;

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>

      <Input label="Full Name" name="fullName" onChange={handleChange} />
      <Input label="Email" name="email" onChange={handleChange} />
      <Input label="Phone" name="phone" onChange={handleChange} />
      <Input label="Address" name="address" onChange={handleChange} />

      <button
        onClick={next}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default PersonalInfo;