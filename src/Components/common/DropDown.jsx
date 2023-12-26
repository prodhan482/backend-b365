function Dropdown ({ label, options, value, onChange, required }){
    return (
      <div>
        <label>{label}</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Dropdown;