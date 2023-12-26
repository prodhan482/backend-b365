import { useEffect, useState } from "react";

import { getItems } from "./customerService"

import CustomerTable from "./CustomerTable";
import ViewCustomer from "./CustomerCRUD/ViewCustomer";
import TextEditorPageLayout from "../../../../Components/common/TextEditorPageLayout"
import Modal from "../../../../Components/common/Modal"

function Customers() {

  const [customers, setCustomers] = useState([])
  const [toggleState, setToggleState] = useState(false)

  const [selectedCustomer, setSelectedCustomer] = useState(null)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)

  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await getItems()
        setCustomers(response)

      } catch (error) {

        setErrorMessage("Error customers. Please try again.")

      }

    }

    fetchData()

  }, [toggleState])

  function handleSuccess() {
    setToggleState((prevState) => !prevState)
  }
  return (
    <TextEditorPageLayout
      title="All Customers"
      itemCount={customers.length}
  
    >

      <CustomerTable
        customers={customers}
        setIsViewModalOpen={setIsViewModalOpen}
        setSelectedCustomer={setSelectedCustomer}
      />

      {isViewModalOpen && (
        <Modal>
          <ViewCustomer
            customer={selectedCustomer}
            onClose={() => setIsViewModalOpen(false)}
            errorMessage={errorMessage}
          />
        </Modal>
      )}

    </TextEditorPageLayout>

  )
}


export default Customers;