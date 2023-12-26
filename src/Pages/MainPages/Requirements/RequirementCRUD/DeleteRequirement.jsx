import { useState } from "react"

import DeleteConfirm from "../../../../Components/common/DeleteConfirm"

import { deleteItem } from "../requirementService"

function DeleteRequirement({ requirement, onClose, onDeleteSuccess }) {

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
      title={"Delete Requirement"}
      handleDelete={handleDelete}
      id={requirement._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  )
}

export default DeleteRequirement
