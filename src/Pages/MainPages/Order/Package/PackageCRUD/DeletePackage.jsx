import { useState } from "react"

import DeleteConfirm from "../../../../../Components/common/DeleteConfirm"

import { deleteItem } from "../packageService"

function DeletePackage({ packages, onClose, onDeleteSuccess }) {

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
      title={"Delete Package"}
      handleDelete={handleDelete}
      id={packages._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  )
}

export default DeletePackage
