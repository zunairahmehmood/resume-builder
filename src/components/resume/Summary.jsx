const Summary = ({ resumeData, setResumeData, next, back }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Profile Summary</h2>

      <textarea
        className="w-full border p-3 rounded"
        rows="5"
        placeholder="Write a short professional summary..."
        value={resumeData.summary}
        onChange={(e) =>
          setResumeData({ ...resumeData, summary: e.target.value })
        }
      />

      <div className="flex justify-between mt-4">
        <button onClick={back} className="px-4 py-2 border rounded">
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

export default Summary;