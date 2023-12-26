import { useEffect, useState } from "react";
import { getItems } from "./brandService";
import BrandView from "./BrandView";
import AddBrand from "./BrandCRUD/AddBrand";
import EditBrand from "./BrandCRUD/EditBrand";
import DeleteBrand from "./BrandCRUD/DeleteBrand";
import ViewBrand from "./BrandCRUD/ViewBrand";
import Modal from "../../../../Components/common/Modal";

function Brand() {
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
        setErrorMessage("Error brand. Please try again.");
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
          All Brands ({data.length})
        </h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded "
        >
          Add Brand
        </button>
      </div>
      <div className=" flex justify-center items-center px-10">
        <div className="relative flex flex-col justify-center items-center w-full">
          <BrandView
            data={data}
            onView={() => setIsViewModalOpen(true)}
            onEdit={() => setIsEditModalOpen(true)}
            onDelete={() => setIsDeleteModalOpen(true)}
            onSelectBrand={setSelectedItem}
          />
        </div>
      </div>
      {isAddModalOpen && (
        <Modal>
        <AddBrand
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={handleSuccess}
        />
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal>
        <EditBrand
          items={selectedItem}
          onClose={() => setIsEditModalOpen(false)}
          onSuccess={handleSuccess}
        />
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal>
        <DeleteBrand
          item={selectedItem}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleSuccess}
        />
        </Modal>
      )}
      {isViewModalOpen && (
        <Modal>
        <ViewBrand
          data={selectedItem}
          onClose={() => setIsViewModalOpen(false)}
        />
        </Modal>
      )}
    </div>
  );
}

export default Brand;
