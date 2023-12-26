import { useEffect, useState } from "react";
import { getItems } from "./orderListService"
import OrderListView from "./OrderListView";
import ViewOrder from "./ViewOrder";

function OrderList(){
    const [data, setData] = useState([]);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getItems();
            setData(response);
          } catch (error) {}
        };
    
        fetchData();
      }, []);

      const handleView = (item) => {
        setSelectedItem(item);
        setIsViewModalOpen(true);
      };

      return (
        <div className="relative h-full w-full">
          <div className="px-10 w-full flex justify-between my-12 ">
            <h1 className="text-xl font-bold text-[#313649]">
              All Order List ({data.length})
            </h1>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded "
            >
              Add Order
            </button>
          </div>
          <div className=" flex justify-center items-center px-10">
            <div className="relative flex flex-col justify-center items-center w-full">
              <OrderListView
                data={data}
                onView={handleView}
                // onDelete={handleDelete}
                // onEdit={handleEdit}
              />
            </div>
          </div>
          {isViewModalOpen && (
        <ViewOrder
          data={selectedItem}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}
        </div>
      );
    }
    
export default OrderList;