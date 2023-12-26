import { useEffect, useState } from "react";
import { getItems } from "./deliveryZoneService";
import DeliveryZoneView from "./DeliveryZoneView";
import AddDeliveryZone from "./DeliveryZoneCrud/AddDeliveryZone";
import EditDeliveryZone from "./DeliveryZoneCrud/EditDeliveryZone";
import DeleteDeliveryZone from "./DeliveryZoneCrud/DeleteDeliveryZone";
import Modal from "../../../../Components/common/Modal";

function DeliveryZone() {
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
      } catch (error) {
        setErrorMessage("Error Delivery Zone. Please try again.");
      }
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
          All Delivery Zone ({data.length})
        </h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded "
        >
          Add Delivery Zone
        </button>
      </div>
      <div className=" flex justify-center items-center px-10">
        <div className="relative flex flex-col justify-center items-center w-full">
          <DeliveryZoneView
            data={data}
            onView={() => setIsViewModalOpen(true)}
            onEdit={() => setIsEditModalOpen(true)}
            onDelete={() => setIsDeleteModalOpen(true)}
            onSelectDeliveryZone={setSelectedItem}
          />
        </div>
      </div>
      {isAddModalOpen && (
        <Modal>
        <AddDeliveryZone
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={handleSuccess}
        />
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal>
        <EditDeliveryZone
          data={selectedItem}
          onClose={() => setIsEditModalOpen(false)}
          onSuccess={handleSuccess}
        />
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal>
        <DeleteDeliveryZone
          item={selectedItem}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleSuccess}
        />
        </Modal>
      )}
    </div>
  );
}

export default DeliveryZone;
