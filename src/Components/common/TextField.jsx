function TextField({ id, label, value, onChange, placeholder, required }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TextField;