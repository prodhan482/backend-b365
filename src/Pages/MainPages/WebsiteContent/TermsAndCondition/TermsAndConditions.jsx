import { useEffect, useState } from "react";
import { getItems } from "./termsAndConditionsService";
import TermsAndConditionsView from "./TermsAndConditionsView";
import ViewTermsAndConditions from "./TermsAndConditionsCRUD/ViewTermsAndConditions";
import AddTermsAndConditions from "./TermsAndConditionsCRUD/AddTermsAndConditions";
import EditTermsAndConditions from "./TermsAndConditionsCRUD/EditTermsAndConditions";
import DeleteTermsAndConditions from "./TermsAndConditionsCRUD/DeleteTermsAndConditions";
import PageLayout from "../../../../Components/common/PageLayout";
import Modal from "../../../../Components/common/Modal";
import TextEditorPageLayout from "../../../../Components/common/TextEditorPageLayout";

function TermsAndConditions(){
    const [data, setData] = useState([]);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [toggleState, setToggleState] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getItems();
            setData(response);
          } catch (error) {
            setErrorMessage("Error terms and conditions. Please try again.");
          }
        };
        fetchData();
      }, [toggleState]);
    
      const handleSuccess = () => {
        setToggleState((prevState) => !prevState);
      };

      return (
      <TextEditorPageLayout
      title="Terms And Conditions"
      itemCount={data.length}
    
    >
        {data.length === 0 ? (
        <AddTermsAndConditions 
        data={data} 
        onSuccess={handleSuccess}
        onClose={() => setIsAddModalOpen(false)} 
        />
      ) : (
        <TermsAndConditionsView 
        data={data} 
        onSelectTermsAndConditions={setSelectedItem} 
        onDelete={() => setIsDeleteModalOpen(true)}
        onEdit={() => setIsEditModalOpen(true)}
        />
      )}
      {/* <TermsAndConditionsView
        data={data}
        onView={() => setIsViewModalOpen(true)}
        onEdit={() => setIsEditModalOpen(true)}
        onDelete={() => setIsDeleteModalOpen(true)}
        onSelectTermsAndConditions={setSelectedItem}
      />
      {isViewModalOpen && (
        <Modal>
          <ViewTermsAndConditions
            data={selectedItem}
            onClose={() => setIsViewModalOpen(false)}
            errorMessage={errorMessage}
          />
        </Modal>
      )}
      {isAddModalOpen && (
        <Modal>
          <AddTermsAndConditions
            onClose={() => setIsAddModalOpen(false)}
            onSuccess={handleSuccess}
          />
        </Modal>
      )} */}

      {isEditModalOpen && (
        <Modal>
          <EditTermsAndConditions
            data={selectedItem}
            onClose={() => setIsEditModalOpen(false)}
            onEditSuccess={handleSuccess}
          />
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal>
          <DeleteTermsAndConditions
            item={selectedItem}
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteSuccess={handleSuccess}
          />
        </Modal>
      )}
    </TextEditorPageLayout>
      );
    }
    
export default TermsAndConditions;