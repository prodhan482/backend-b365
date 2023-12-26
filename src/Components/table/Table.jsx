function Table({ children }) {
    return (
      <table className="table-auto w-full border-2 border-grey-300 mx-4">
        {children}
      </table>
    );
  }
  
  export default Table;