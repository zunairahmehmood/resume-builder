const Input = ({ label, ...props }) => {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
      />
    </div>
  );
};

export default Input;