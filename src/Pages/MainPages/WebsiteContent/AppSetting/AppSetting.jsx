import { useEffect, useState } from "react";
import { getItems } from "./appSettingService";
import AppSettingView from "./AppSettingView";
import AddAppSetting from "./AddAppSetting"
import EditAppSetting from "./EditAppSetting";
import DeleteAppSetting from "./DeleteAppSetting";
import ViewAppSetting from "./ViewAppSetting";
function AppSetting() {
    const [data, setData] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getItems();
            setData(response);
           
          } catch (error) {
          }
        };
    
        fetchData();
      }, []);
      const handleView = (item) => {
        setSelectedItem(item);
        setIsViewModalOpen(true);
      };
    
      const handleDelete = (deleteItem) => {
        setSelectedItem(deleteItem);
        setIsDeleteModalOpen(true);
      };
    
      const handleEdit = (items) => {
        setSelectedItem(items);
        setIsEditModalOpen(true);
      };
    
      const handleSuccess = async () => {
        try {
          const updatedItems = await getItems();
          setData(updatedItems);
          setIsAddModalOpen(false);
        } catch (error) {
        }
      };
    return ( 
        <div className="relative h-full w-full">
        <div className="px-10 w-full flex justify-between my-12 ">
          <h1 className="text-xl font-bold text-[#313649]">All App Settings ({data.length})</h1>
          <button onClick={() => setIsAddModalOpen(true)} className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded ">Add Setting</button>
        </div>
        <div className=" flex justify-center items-center px-10">
  
          <AppSettingView
            data={data}
            onView={handleView}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
  
        </div>
        {isAddModalOpen && (
          <AddAppSetting
            onClose={() => setIsAddModalOpen(false)}
            onSuccess={handleSuccess}
          />
        )}
        
        {isEditModalOpen && (
          <EditAppSetting
            items={selectedItem}
            onClose={() => setIsEditModalOpen(false)}
            onSuccess={handleSuccess}
  
          />
        )}
        {isDeleteModalOpen && (
          <DeleteAppSetting
            item={selectedItem}
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteSuccess={handleSuccess}
          />
        )}
        {isViewModalOpen && (
        <ViewAppSetting
          data={selectedItem}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}

      </div>
     );
}

export default AppSetting;