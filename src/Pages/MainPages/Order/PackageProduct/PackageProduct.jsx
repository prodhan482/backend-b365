import { useState, useEffect } from "react"

import PackageProductTable from "./PackageProductTable"
// import ViewPackageProduct from "./PackageProductCRUD/ViewPackageProduct"
// import EditPackage from "./PackageCRUD/EditPackage"
// import DeletePackage from "./PackageCRUD/DeletePackage"
import AddPackageProduct from "./PackageProductCRUD/AddPackageProduct"
import PageLayout from "../../../../Components/common/PageLayout"
import Modal from "../../../../Components/common/Modal"

import { getItems } from "./packageProductService"

function PackageProduct() {

  const [packageProduct, setPackageProduct] = useState([])
  const [toggleState, setToggleState] = useState(false)

  const [selectedPackageProduct, setSelectedPackageProduct] = useState(null)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false)
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false)
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    async function fetchData () {

      try {

        const response = await getItems()
        setPackageProduct(response)

      } catch (error) {

        setErrorMessage("Error package Product . Please try again.")

      }

    }

    fetchData()

  }, [toggleState])

  function handleSuccess() {
    setToggleState((prevState) => !prevState)
  }

  return (

    <PageLayout
      title = "All Package Product"
      itemCount = {packageProduct.length}
      onAddClick={() => setIsAddModalOpen(true)}
    >

      <PackageProductTable
        packageProduct={packageProduct}
        // setIsViewModalOpen = {setIsViewModalOpen}
        // setIsEditModalOpen = {setIsEditModalOpen}
        // setIsDeleteModalOpen = {setIsDeleteModalOpen}
        setSelectedPackageProduct = {setSelectedPackageProduct}
      />

      {/* {isViewModalOpen && (
        <Modal>
          <ViewPackage
            packages = {selectedPackage}
            onClose={() => setIsViewModalOpen(false)}
            errorMessage = {errorMessage}
          />
        </Modal>
      )} */}

      {isAddModalOpen && (
        <Modal>
          <AddPackageProduct
            onClose={() => setIsAddModalOpen(false)}
            onSuccess ={handleSuccess}
          />
        </Modal>
      )}

      {/* {isEditModalOpen && (
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
      )} */}

    </PageLayout>

  )
}

export default PackageProduct
