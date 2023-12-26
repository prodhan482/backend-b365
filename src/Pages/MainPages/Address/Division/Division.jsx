import { useEffect, useState } from "react";
import { getItems } from "./divisionService";
import DivisionView from "./DivisionView";
import AddDivision from "./DivisionCrud/AddDivision";
import DeleteDivision from "./DivisionCrud/DeleteDivision";
import EditDivision from "./DivisionCrud/EditDivision";
import Modal from "../../../../Components/common/Modal";

function Division() {
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
        setErrorMessage("Error Division. Please try again.");
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
          All Division ({data.length})
        </h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded "
        >
          Add Division
        </button>
      </div>
      <div className=" flex justify-center items-center px-10">
        <div className="relative flex flex-col justify-center items-center w-full">
          <DivisionView
            data={data}
            onView={() => setIsViewModalOpen(true)}
            onEdit={() => setIsEditModalOpen(true)}
            onDelete={() => setIsDeleteModalOpen(true)}
            onSelectDivision={setSelectedItem}
          />
        </div>
      </div>
      {isAddModalOpen && (
        <Modal>
          <AddDivision
            onClose={() => setIsAddModalOpen(false)}
            onSuccess={handleSuccess}
          />
        </Modal>
      )}
      {isDeleteModalOpen && (
          <Modal>
        <DeleteDivision
          item={selectedItem}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleSuccess}
        />
         </Modal>
      )}
      {isEditModalOpen && (
        <EditDivision
          data={selectedItem}
          onClose={() => setIsEditModalOpen(false)}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
}

export default Division;
