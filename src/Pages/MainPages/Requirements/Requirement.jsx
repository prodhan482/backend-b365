import { useState, useEffect } from "react"

import RequirementTable from "./RequirementTable"
import ViewRequirement from "./RequirementCRUD/ViewRequirement"
import EditRequirement from "./RequirementCRUD/EditRequirement"
import DeleteRequirement from "./RequirementCRUD/DeleteRequirement"
import AddRequirement from "./RequirementCRUD/AddRequirement"
import PageLayout from "../../../Components/common/PageLayout"
import Modal from "../../../Components/common/Modal"

import { getItems } from "./requirementService"

function Requirement() {

  const [requirements, setRequirements] = useState([])
  const [toggleState, setToggleState] = useState(false)

  const [selectedRequirement, setSelectedRequirement] = useState(null)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    async function fetchData () {

      try {

        const response = await getItems()
        setRequirements(response)

      } catch (error) {

        setErrorMessage("Error requirements. Please try again.")

      }

    }

    fetchData()

  }, [toggleState])

  function handleSuccess() {
    setToggleState((prevState) => !prevState)
  }

  return (

    <PageLayout
      title = "All Requirements"
      itemCount = {requirements.length}
      onAddClick={() => setIsAddModalOpen(true)}
    >

      <RequirementTable
        requirements={requirements}
        setIsViewModalOpen = {setIsViewModalOpen}
        setIsEditModalOpen = {setIsEditModalOpen}
        setIsDeleteModalOpen = {setIsDeleteModalOpen}
        setSelectedRequirement = {setSelectedRequirement}
      />

      {isViewModalOpen && (
        <Modal>
          <ViewRequirement
            requirement = {selectedRequirement}
            onClose={() => setIsViewModalOpen(false)}
            errorMessage = {errorMessage}
          />
        </Modal>
      )}

      {isAddModalOpen && (
        <Modal>
          <AddRequirement
            onClose={() => setIsAddModalOpen(false)}
            onSuccess ={handleSuccess}
          />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal>
          <EditRequirement
            requirement = {selectedRequirement}
            onClose = {() => setIsEditModalOpen(false)}
            onEditSuccess = {handleSuccess}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal>
          <DeleteRequirement
            requirement = {selectedRequirement}
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteSuccess = {handleSuccess}
          />
        </Modal>
      )}

    </PageLayout>

  )
}

export default Requirement
