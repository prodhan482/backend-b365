import { useEffect, useState } from "react";
import { getItems } from "./PaymentTypeService";
import PaymentTypeTable from "./PaymentTypeTable";
import ViewPaymentType from "./PaymentTypeCRUD/ViewPaymentType";
import AddPaymentType from "./PaymentTypeCRUD/AddPaymentType";
import EditPaymentType from "./PaymentTypeCRUD/EditPaymentType";
import DeletePaymentType from "./PaymentTypeCRUD/DeletePaymentType";
import PageLayout from "../../../../Components/common/PageLayout";
import Modal from "../../../../Components/common/Modal";

function PaymentType(){
  const [paymentType, setPaymentType] = useState([])
  const [toggleState, setToggleState] = useState(false)

  const [selectedPaymentType, setSelectedPaymentType] = useState(null)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    async function fetchData () {

      try {

        const response = await getItems()
        setPaymentType(response)

      } catch (error) {

        setErrorMessage("Error Payment Type. Please try again.")

      }

    }

    fetchData()

  }, [toggleState])

  function handleSuccess() {
    setToggleState((prevState) => !prevState)
  }

  return (

    <PageLayout
      title = "All Payment Type"
      itemCount = {paymentType.length}
      onAddClick={() => setIsAddModalOpen(true)}
    >

      <PaymentTypeTable
        paymentType={paymentType}
        setIsViewModalOpen = {setIsViewModalOpen}
        setIsEditModalOpen = {setIsEditModalOpen}
        setIsDeleteModalOpen = {setIsDeleteModalOpen}
        setSelectedPaymentType = {setSelectedPaymentType}
      />

      {isViewModalOpen && (
        <Modal>
          <ViewPaymentType
            paymentType = {selectedPaymentType}
            onClose={() => setIsViewModalOpen(false)}
            errorMessage = {errorMessage}
          />
        </Modal>
      )}

      {isAddModalOpen && (
        <Modal>
          <AddPaymentType
            onClose={() => setIsAddModalOpen(false)}
            onSuccess ={handleSuccess}
          />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal>
          <EditPaymentType
            paymentType = {selectedPaymentType}
            onClose = {() => setIsEditModalOpen(false)}
            onEditSuccess = {handleSuccess}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal>
          <DeletePaymentType
            paymentType = {selectedPaymentType}
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteSuccess = {handleSuccess}
          />
        </Modal>
      )}

    </PageLayout>

  )
}
    
export default PaymentType;