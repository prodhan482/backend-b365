const ToggleSwitch = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <label className="mr-4">{label}</label>
      <div className="relative inline-block w-10 align-middle select-none">
        <input
          type="checkbox"
          id={id}  
          className="toggle-checkbox absolute opacity-0 w-0 h-0"
          checked={checked}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className={`toggle-label block w-10 h-6 rounded-full bg-gray-300 cursor-pointer`}
        >
          <div
            className={`h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in ${
              checked ? "translate-x-full bg-green-600" : "translate-x-0"
            }`}
          />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
