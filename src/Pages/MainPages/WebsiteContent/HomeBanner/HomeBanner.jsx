import { useState, useEffect } from "react"

import HomeBannerTable from "./HomeBannerTable"
import ViewHomeBanner from "./HomeBannerCRUD/ViewHomeBanner"
import EditHomeBanner from "./HomeBannerCRUD/EditHomeBanner"
import DeleteHomeBanner from "./HomeBannerCRUD/DeleteHomeBanner"
import AddHomeBanner from "./HomeBannerCRUD/AddHomeBanner"
import PageLayout from "../../../../Components/common/PageLayout"
import Modal from "../../../../Components/common/Modal"

import { getItem } from "./homeBannerService"

function HomeBanner() {

  const [homeBanner, setHomeBanner] = useState([])
  const [toggleState, setToggleState] = useState(false)

  const [selectedHomeBanner, setSelectedHomeBanner] = useState(null)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    async function fetchData () {

      try {

        const response = await getItem()
        setHomeBanner(response)

      } catch (error) {

        setErrorMessage("Error Home Banner. Please try again.")

      }

    }

    fetchData()

  }, [toggleState])

  function handleSuccess() {
    setToggleState((prevState) => !prevState)
  }

  return (

    <PageLayout
      title = "All Home Banner"
      itemCount = {homeBanner.length}
      onAddClick={() => setIsAddModalOpen(true)}
    >

      <HomeBannerTable
        homeBanner={homeBanner}
        setIsViewModalOpen = {setIsViewModalOpen}
        setIsEditModalOpen = {setIsEditModalOpen}
        setIsDeleteModalOpen = {setIsDeleteModalOpen}
        setSelectedHomeBanner = {setSelectedHomeBanner}
      />

      {isViewModalOpen && (
        <Modal>
          <ViewHomeBanner
            homeBanner = {selectedHomeBanner}
            onClose={() => setIsViewModalOpen(false)}
            errorMessage = {errorMessage}
          />
        </Modal>
      )}

      {isAddModalOpen && (
        <Modal>
          <AddHomeBanner
            onClose={() => setIsAddModalOpen(false)}
            onSuccess ={handleSuccess}
          />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal>
          <EditHomeBanner
            homeBanner = {selectedHomeBanner}
            onClose = {() => setIsEditModalOpen(false)}
            onEditSuccess = {handleSuccess}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal>
          <DeleteHomeBanner
            homeBanner = {selectedHomeBanner}
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteSuccess = {handleSuccess}
          />
        </Modal>
      )}

    </PageLayout>

  )
}

export default HomeBanner
