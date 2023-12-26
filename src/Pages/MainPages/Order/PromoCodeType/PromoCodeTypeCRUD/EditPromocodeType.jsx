import { useState } from "react"

import TextField from "../../../../../Components/common/TextField"
import DescriptionField from "../../../../../Components/common/DescriptionField"
import EditFormLayout from "../../../../../Components/common/EditFormLayout"

import ErrorMessage from "../../../../../Components/common/ErrorMessage"

import { editItem } from "../promoCodeTypeService"

function EditPromoCodeType({ promoCodeType, onClose, onEditSuccess }) {

  const [name, setName] = useState(promoCodeType.name)
  const [description, setDescription] = useState(promoCodeType.description)

  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    onClose()

    try {

      await editItem(promoCodeType._id, {
        name: name,
        description: description,
      })

      onEditSuccess()

    } catch (error) {

      setErrorMessage("Failed edit")

    }
  }

  return (

    <EditFormLayout
      title="Edit PromoCode Type"
      onSubmit={handleSubmit}
      onClose={onClose}
    >

      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Name"
        required
      />
      <DescriptionField
        id="description"
        label="Description"
        value={description}
        onChange={(value) => setDescription(value)}
        placeholder="Description"
        required
      />

      <ErrorMessage message={errorMessage} />

    </EditFormLayout>

  )
}

export default EditPromoCodeType
