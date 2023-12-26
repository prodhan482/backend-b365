import { useState } from "react"

import TextField from "../../../../../Components/common/TextField"
import DescriptionField from "../../../../../Components/common/DescriptionField"
import AddFormLayout from "../../../../../Components/common/AddFormLayout"
import ErrorMessage from "../../../../../Components/common/ErrorMessage"

import { addItem } from "../promoCodeTypeService"

function AddPromoCodeType({ onClose, onSuccess }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      onClose()

      await addItem({
        name: name,
        description: description,
      })

      onSuccess()

    } catch (error) {

      setErrorMessage("Add Failed")

    }
  }

  return (

    <AddFormLayout
      title="Add PromoCode Type"
      onSubmit={handleSubmit}
      onClose={onClose}
    >

      <TextField
        label="Nmae"
        value={name}
        onChange={setName}
        placeholder="Name"
        required
      />
      <DescriptionField
        label="Description"
        value={description}
        onChange={setDescription}
        placeholder="Description"
        required
      />

      <ErrorMessage message={errorMessage} />

    </AddFormLayout>

  )
}

export default AddPromoCodeType
