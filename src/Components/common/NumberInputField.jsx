function PrecedenceField({ value, onChange,label, placeholder }) {
    return (
      <div className="mb-4">
        <label htmlFor="precedence" className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y rounded-md"
          value={value}
          placeholder={placeholder}
          required
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default PrecedenceField;