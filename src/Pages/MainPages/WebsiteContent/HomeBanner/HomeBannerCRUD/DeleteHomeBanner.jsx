import { useState } from "react"

import DeleteConfirm from "../../../../../Components/common/DeleteConfirm"

import { deleteItem } from "../homeBannerService"

function DeleteHomeBanner({ homeBanner, onClose, onDeleteSuccess }) {

  const [errorMessage, setErrorMessage] = useState("")

  const handleDelete = async (id) => {
    try {

      await deleteItem(id)
      onDeleteSuccess()
      onClose()

    } catch (error) {
      
      setErrorMessage("Delete Failed")

    }
  }
  return (
    <DeleteConfirm
      title={"Delete Home Banner"}
      handleDelete={handleDelete}
      id={homeBanner._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  )
}

export default DeleteHomeBanner
