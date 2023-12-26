import { useEffect, useState } from "react";
import EmployeeView from "./EmployeeView";
import { getItems } from "./employeeService";

export default function Employees() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItems();
        setItems(response);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center w-full px-10">
      <div className="w-full flex justify-between my-12">
        <h1 className="text-xl font-bold text-[#313649]">
          Employee List ({[items].length})
        </h1>
      </div>
      <EmployeeView items={items} />
    </div>
  );
}
