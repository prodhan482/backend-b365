function EmailField({ setEmail }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="email"
        placeholder="Username"
      />
    </div>
  );
}

export default EmailField;
