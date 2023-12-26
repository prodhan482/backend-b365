import { useState, useEffect } from "react"

import PromoCodeTable from "./PromoCodeTable"
import ViewPromoCode from "./PromoCodeCRUD/ViewPromoCode"
import EditPromoCode from "./PromoCodeCRUD/EditPromocode"
import DeletePromoCode from "./PromoCodeCRUD/DeletePromoCode"
import AddPromoCode from "./PromoCodeCRUD/AddPromoCode"
import PageLayout from "../../../../Components/common/PageLayout"
import Modal from "../../../../Components/common/Modal"

import { getItems } from "./promoCodeService"

function PromoCode() {

  const [promoCode, setPromoCode] = useState([])
  const [toggleState, setToggleState] = useState(false)

  const [selectedPromoCode, setSelectedPromoCode] = useState(null)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    async function fetchData () {

      try {

        const response = await getItems()
        setPromoCode(response)

      } catch (error) {

        setErrorMessage("Error PromoCode. Please try again.")

      }

    }

    fetchData()

  }, [toggleState])

  function handleSuccess() {
    setToggleState((prevState) => !prevState)
  }

  return (

    <PageLayout
      title = "All PromoCodes"
      itemCount = {promoCode.length}
      onAddClick={() => setIsAddModalOpen(true)}
    >

      <PromoCodeTable
        promoCode={promoCode}
        setIsViewModalOpen = {setIsViewModalOpen}
        setIsEditModalOpen = {setIsEditModalOpen}
        setIsDeleteModalOpen = {setIsDeleteModalOpen}
        setSelectedPromoCode = {setSelectedPromoCode}
      />

      {isViewModalOpen && (
        <Modal>
          <ViewPromoCode
            promoCode = {selectedPromoCode}
            onClose={() => setIsViewModalOpen(false)}
            errorMessage = {errorMessage}
          />
        </Modal>
      )}

      {isAddModalOpen && (
        <Modal>
          <AddPromoCode
            onClose={() => setIsAddModalOpen(false)}
            onSuccess ={handleSuccess}
          />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal>
          <EditPromoCode
            promoCode = {selectedPromoCode}
            onClose = {() => setIsEditModalOpen(false)}
            onEditSuccess = {handleSuccess}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal>
          <DeletePromoCode
            promoCode = {selectedPromoCode}
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteSuccess = {handleSuccess}
          />
        </Modal>
      )}

    </PageLayout>

  )
}

export default PromoCode
