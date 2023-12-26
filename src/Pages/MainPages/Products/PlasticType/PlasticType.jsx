import { useEffect, useState } from "react";
import { getItems } from "./plasticTypeService";
import PlasticTypeView from "./PlasticTypeView";
import AddPlasticType from "./AddPlasticType";
import EditPlasticType from "./EditPlasticType";
import DeletePlasticType from "./DeletePlasticType";

function PlasticType() {
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
      } catch (error) {}
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
    } catch (error) {}
  };
  return (
    <div className="relative h-full w-full">
      <div className="px-10 w-full flex justify-between my-12 ">
        <h1 className="text-xl font-bold text-[#313649]">
          All Plastic Type ({data.length})
        </h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded "
        >
          Add Plastic Type
        </button>
      </div>
      <div className=" flex justify-center items-center px-10">
        <PlasticTypeView
          data={data}
          onView={handleView}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
      {isAddModalOpen && (
        <AddPlasticType
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={handleSuccess}
        />
      )}
      {isEditModalOpen && (
        <EditPlasticType
          data={selectedItem}
          onClose={() => setIsEditModalOpen(false)}
          onEditSuccess={handleSuccess}
        />
      )}
      {isDeleteModalOpen && (
        <DeletePlasticType
          item={selectedItem}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleSuccess}
        />
      )}
      {/* 

 
         {isViewModalOpen && (
        <ViewBrand
          data={selectedItem}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}  */}
    </div>
  );
}

export default PlasticType;
