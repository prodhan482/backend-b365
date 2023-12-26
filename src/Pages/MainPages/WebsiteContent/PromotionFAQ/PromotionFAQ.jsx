import { useEffect, useState } from "react";
import { getItems } from "./promotionFAQService";
import PromotionFAQTable from "./PromotionFAQTable";
import ViewPromotionFAQ from "./PromotionFAQCRUD/ViewPromotionFAQ";
import AddPromotionFAQ from "./PromotionFAQCRUD/AddPromotionFAQ";
import EditPromotionFAQ from "./PromotionFAQCRUD/EditPromotionFAQ";
import DeletePromotionFAQ from "./PromotionFAQCRUD/DeletePromotionFAQ";
import PageLayout from "../../../../Components/common/PageLayout";
import Modal from "../../../../Components/common/Modal";

function PromotionFAQ(){
  const [promotionFAQ, setPromotionFAQ] = useState([])
  const [toggleState, setToggleState] = useState(false)

  const [selectedPromotionFAQ, setSelectedPromotionFAQ] = useState(null)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    async function fetchData () {

      try {

        const response = await getItems()
        setPromotionFAQ(response)

      } catch (error) {

        setErrorMessage("Error PromotionFAQ. Please try again.")

      }

    }

    fetchData()

  }, [toggleState])

  function handleSuccess() {
    setToggleState((prevState) => !prevState)
  }

  return (

    <PageLayout
      title = "All PromotionFAQ"
      itemCount = {promotionFAQ.length}
      onAddClick={() => setIsAddModalOpen(true)}
    >

      <PromotionFAQTable
        promotionFAQ={promotionFAQ}
        setIsViewModalOpen = {setIsViewModalOpen}
        setIsEditModalOpen = {setIsEditModalOpen}
        setIsDeleteModalOpen = {setIsDeleteModalOpen}
        setSelectedPromotionFAQ = {setSelectedPromotionFAQ}
      />

      {isViewModalOpen && (
        <Modal>
          <ViewPromotionFAQ
            promotionFAQ = {selectedPromotionFAQ}
            onClose={() => setIsViewModalOpen(false)}
            errorMessage = {errorMessage}
          />
        </Modal>
      )}

      {isAddModalOpen && (
        <Modal>
          <AddPromotionFAQ
            onClose={() => setIsAddModalOpen(false)}
            onSuccess ={handleSuccess}
          />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal>
          <EditPromotionFAQ
            promotionFAQ = {selectedPromotionFAQ}
            onClose = {() => setIsEditModalOpen(false)}
            onEditSuccess = {handleSuccess}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal>
          <DeletePromotionFAQ
            promotionFAQ = {selectedPromotionFAQ}
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteSuccess = {handleSuccess}
          />
        </Modal>
      )}

    </PageLayout>

  )
}
    
export default PromotionFAQ;