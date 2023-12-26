import { useState } from "react"

import DeleteConfirm from "../../../../../Components/common/DeleteConfirm"

import { deleteItem } from "../promoCodeTypeService"

function DeletePromoCodeType({ promoCodeType, onClose, onDeleteSuccess }) {

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
      title={"Delete PromoCode Type"}
      handleDelete={handleDelete}
      id={promoCodeType._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  )
}

export default DeletePromoCodeType
