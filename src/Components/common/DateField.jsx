import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateField({ selected, onChange,label,  placeholderText }) {
    return (
      <div className="mb-4">
        <label htmlFor="precedence" className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
        <DatePicker
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y rounded-md"
          selected={selected}
          placeholderText={ placeholderText}
          required
          onChange={onChange}
        />
      </div>
    );
  }
  
  export default DateField;