function ProductDropDown({ label, options, value, onChange, required }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <select
          value={value !== undefined ? value : ""}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          required={required}
          className="appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProductDropDown;
