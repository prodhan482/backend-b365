function TableButton({ onClick, children }) {
    return <span className="flex items-center justify-center cursor-pointer" onClick={onClick}>{children}</span>;
  }
  
  export default TableButton;