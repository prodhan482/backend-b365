import { useEffect, useState } from "react";
import { getItems } from "./areaService";
import AreaView from "./AreaView";
import AddArea from "./AreaCrud/AddArea";
import EditArea from "./AreaCrud/EditArea";
import DeleteArea from "./AreaCrud/DeleteArea";
import Modal from "../../../../Components/common/Modal";

function Area() {
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
        setErrorMessage("Error Area. Please try again.");
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
          All Area ({data.length})
        </h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded "
        >
          Add Area
        </button>
      </div>
      <div className=" flex justify-center items-center px-10">
        <AreaView
          data={data}
          onView={() => setIsViewModalOpen(true)}
          onEdit={() => setIsEditModalOpen(true)}
          onDelete={() => setIsDeleteModalOpen(true)}
          onSelectArea={setSelectedItem}
        />
      </div>
      {isAddModalOpen && (
        <Modal>
        <AddArea
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={handleSuccess}
        />
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal>
        <EditArea
          items={selectedItem}
          onClose={() => setIsEditModalOpen(false)}
          onEditSuccess={handleSuccess}
        />
        </Modal>
      )}
        {isDeleteModalOpen && (
        <Modal>
        <DeleteArea
          item={selectedItem}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleSuccess}
        />
        </Modal>
      )}
    </div>
  );
}

export default Area;
