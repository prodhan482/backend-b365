function SelectField({ value, onChange,label, id }) {
    return (
      <div className="mb-4">
        <label htmlFor="precedence" className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y rounded-md"
          value={value}
          id={id}
          required
          onChange={(e) => onChange(e.target.value)}
          option={value}
          
        />
      </div>
    );
  }
  
  export default SelectField;