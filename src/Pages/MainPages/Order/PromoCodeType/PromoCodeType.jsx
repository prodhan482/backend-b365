import { useState, useEffect } from "react"

import PromoCodeTypeTable from "./PromoCodeTypeTable"
import ViewPromoCodeType from "./PromoCodeTypeCRUD/ViewPromoCodeType"
import EditPromoCodeType from "./PromoCodeTypeCRUD/EditPromoCodeType"
import DeletePromoCodeType from "./PromoCodeTypeCRUD/DeletePromoCodeType"
import AddPromoCodeType from "./PromoCodeTypeCRUD/AddPromoCodeType"
import PageLayout from "../../../../Components/common/PageLayout"
import Modal from "../../../../Components/common/Modal"

import { getItems } from "./promoCodeTypeService"

function PromoCodeType() {

  const [promoCodeType, setPromoCodeType] = useState([])
  const [toggleState, setToggleState] = useState(false)

  const [selectedPromoCodeType, setSelectedPromoCodeType] = useState(null)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    async function fetchData () {

      try {

        const response = await getItems()
        setPromoCodeType(response)

      } catch (error) {

        setErrorMessage("Error PromoCode Type. Please try again.")

      }

    }

    fetchData()

  }, [toggleState])

  function handleSuccess() {
    setToggleState((prevState) => !prevState)
  }

  return (

    <PageLayout
      title = "All PromoCode Types"
      itemCount = {promoCodeType.length}
      onAddClick={() => setIsAddModalOpen(true)}
    >

      <PromoCodeTypeTable
        promoCodeType={promoCodeType}
        setIsViewModalOpen = {setIsViewModalOpen}
        setIsEditModalOpen = {setIsEditModalOpen}
        setIsDeleteModalOpen = {setIsDeleteModalOpen}
        setSelectedPromoCodeType = {setSelectedPromoCodeType}
      />

      {isViewModalOpen && (
        <Modal>
          <ViewPromoCodeType
            promoCodeType = {selectedPromoCodeType}
            onClose={() => setIsViewModalOpen(false)}
            errorMessage = {errorMessage}
          />
        </Modal>
      )}

      {isAddModalOpen && (
        <Modal>
          <AddPromoCodeType
            onClose={() => setIsAddModalOpen(false)}
            onSuccess ={handleSuccess}
          />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal>
          <EditPromoCodeType
            promoCodeType = {selectedPromoCodeType}
            onClose = {() => setIsEditModalOpen(false)}
            onEditSuccess = {handleSuccess}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal>
          <DeletePromoCodeType
            promoCodeType = {selectedPromoCodeType}
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteSuccess = {handleSuccess}
          />
        </Modal>
      )}

    </PageLayout>

  )
}

export default PromoCodeType
