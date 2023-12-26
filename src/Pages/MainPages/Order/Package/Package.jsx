import { useState, useEffect } from "react"

import PackageTable from "./PackageTable"
import ViewPackage from "./PackageCRUD/ViewPackage"
import EditPackage from "./PackageCRUD/EditPackage"
import DeletePackage from "./PackageCRUD/DeletePackage"
import AddPackage from "./PackageCRUD/AddPackage"
import PageLayout from "../../../../Components/common/PageLayout"
import Modal from "../../../../Components/common/Modal"

import { getItems } from "./packageService"

function Package() {

  const [packages, setPackages] = useState([])
  const [toggleState, setToggleState] = useState(false)

  const [selectedPackage, setSelectedPackage] = useState(null)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    async function fetchData () {

      try {

        const response = await getItems()
        setPackages(response)

      } catch (error) {

        setErrorMessage("Error packages. Please try again.")

      }

    }

    fetchData()

  }, [toggleState])

  function handleSuccess() {
    setToggleState((prevState) => !prevState)
  }

  return (

    <PageLayout
      title = "All Packages"
      itemCount = {packages.length}
      onAddClick={() => setIsAddModalOpen(true)}
    >

      <PackageTable
        packages={packages}
        setIsViewModalOpen = {setIsViewModalOpen}
        setIsEditModalOpen = {setIsEditModalOpen}
        setIsDeleteModalOpen = {setIsDeleteModalOpen}
        setSelectedPackage = {setSelectedPackage}
      />

      {isViewModalOpen && (
        <Modal>
          <ViewPackage
            packages = {selectedPackage}
            onClose={() => setIsViewModalOpen(false)}
            errorMessage = {errorMessage}
          />
        </Modal>
      )}

      {isAddModalOpen && (
        <Modal>
          <AddPackage
            onClose={() => setIsAddModalOpen(false)}
            onSuccess ={handleSuccess}
          />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal>
          <EditPackage
            packages = {selectedPackage}
            onClose = {() => setIsEditModalOpen(false)}
            onEditSuccess = {handleSuccess}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal>
          <DeletePackage
            packages = {selectedPackage}
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteSuccess = {handleSuccess}
          />
        </Modal>
      )}

    </PageLayout>

  )
}

export default Package
