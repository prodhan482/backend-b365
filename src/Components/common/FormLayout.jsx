function FormLayout({ children, onSubmit, message }) {
  return (
    <form onSubmit={onSubmit} className="mr-[250px] flex flex-col justify-center h-4/6 w-2/6 bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
      {children}
      <h1 className="text-red-500 mt-5">{message}</h1>
    </form>
  );
}

export default FormLayout;
