function TableHeadingRow({ children }) {
  return <thead className="bg-gray-50">
    <tr>
    {children}
    </tr>
  </thead>;
}

export default TableHeadingRow;