import { useState } from "react"

import DeleteConfirm from "../../../../../Components/common/DeleteConfirm"

import { deleteItem } from "../promoCodeService"

function DeletePromoCode({ promoCode, onClose, onDeleteSuccess }) {

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
      title={"Delete PromoCode"}
      handleDelete={handleDelete}
      id={promoCode._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  )
}

export default DeletePromoCode
