import { useEffect, useState } from "react";
import { getItems } from "./deliveryAreaService";
import DeliveryAreaView from "./DeliveryAreaView";
import AddADeliveryArea from "./DeliveryAreaCrud/AddDeliveryArea";
import DeleteDeliveryArea from "./DeliveryAreaCrud/DeleteDeliveryArea";
import EditDeliveryArea from "./DeliveryAreaCrud/EditDeliveryArea";
import Modal from "../../../../Components/common/Modal";

function DeliveryArea() {
  const [data, setData] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItems();
        setData(response);
      } catch (error) {}
    };

    fetchData();
  }, [toggleState]);
  
  const handleSuccess = () => {
    setToggleState((prevState) => !prevState);
  };

  return (
    <div className="relative h-full w-full">
      <div className="px-10 w-full flex justify-between my-12 ">
        <h1 className="text-xl font-bold text-[#313649]">
          All DeliveryArea ({data.length})
        </h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded "
        >
          Add Delivery Area
        </button>
      </div>
      <div className=" flex justify-center items-center px-10">
        <div className="relative flex flex-col justify-center items-center w-full">
          <DeliveryAreaView
            data={data}
            onView={() => setIsViewModalOpen(true)}
            onEdit={() => setIsEditModalOpen(true)}
            onDelete={() => setIsDeleteModalOpen(true)}
            onSelectDivisionArea={setSelectedItem}
          />
        </div>
      </div>
      {isAddModalOpen && (
        <Modal>
        <AddADeliveryArea
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={handleSuccess}
        />
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal>
        <DeleteDeliveryArea
          item={selectedItem}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleSuccess}
        />
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal>
        <EditDeliveryArea
          data={selectedItem}
          onClose={() => setIsEditModalOpen(false)}
          onSuccess={handleSuccess}
        />
        </Modal>
      )}
      
    </div>
  );
}

export default DeliveryArea;
