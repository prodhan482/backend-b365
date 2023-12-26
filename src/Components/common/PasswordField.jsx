function PasswordField({ setPassword , label}) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        {label}
      </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="******************"
      />
    </div>
  );
}

export default PasswordField;