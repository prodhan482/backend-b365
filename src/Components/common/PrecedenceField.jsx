function PrecedenceField({ value, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="precedence" className="block text-gray-700 text-sm font-bold mb-2">
        Precedence
      </label>
      <input
        type="number"
        id="precedence"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y rounded-md"
        value={value}
        placeholder="precedence"
        required
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default PrecedenceField;