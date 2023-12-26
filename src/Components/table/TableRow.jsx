function TableRow({ children, item }) {
    return (
      <tr key={item._id} className="border-t border-grey-300">
        {children}
      </tr>
    );
  }
  
  export default TableRow;