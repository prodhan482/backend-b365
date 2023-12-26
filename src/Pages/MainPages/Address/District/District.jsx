import { useEffect, useState } from "react";
import { getItems } from "./districtService";
import DistrictView from "./DistrictView";
import AddDistrict from "./DistrictCrud/AddDistrict";
import DeleteDistrict from "./DistrictCrud/DeleteDistrict";
import EditDistrict from "./DistrictCrud/EditDistrict";
import Modal from "../../../../Components/common/Modal";

function District() {
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
            setErrorMessage("Error District. Please try again.");
          }
        };
    
        fetchData();
      },  [toggleState]);

      const handleSuccess = () => {
        setToggleState((prevState) => !prevState);
      };

    return ( 
        <div className="relative h-full w-full">
        <div className="px-10 w-full flex justify-between my-12 ">
          <h1 className="text-xl font-bold text-[#313649]">All District ({data.length})</h1>
          <button onClick={() => setIsAddModalOpen(true)} className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded ">Add District</button>
        </div>
        <div className=" flex justify-center items-center px-10">
        <div className="relative flex flex-col justify-center items-center w-full">
          <DistrictView
            data={data}
            onView={() => setIsViewModalOpen(true)}
            onEdit={() => setIsEditModalOpen(true)}
            onDelete={() => setIsDeleteModalOpen(true)}
            onSelectDistrict={setSelectedItem}
          />
          </div>
        </div>
        {isAddModalOpen && (
          <Modal>
          <AddDistrict
            onClose={() => setIsAddModalOpen(false)}
            onSuccess={handleSuccess}
          />
           </Modal>
        )}
         {isDeleteModalOpen && (
          <Modal>
          <DeleteDistrict
           item={selectedItem}
           onClose={() => setIsDeleteModalOpen(false)}
           onDeleteSuccess={handleSuccess}
          />
          </Modal>
        )}
         {isEditModalOpen && (
          <Modal>
          <EditDistrict
            data={selectedItem}
            onClose={() => setIsEditModalOpen(false)}
            onSuccess={handleSuccess}
          />
          </Modal>
        )}
      </div>
     );
}

export default District;