import { useState } from "react";
import { editItem } from "../promotionFAQService";
import TextField from "../../../../../Components/common/TextField";
import EditFormLayout from "../../../../../Components/common/EditFormLayout";
import DescriptionField from "../../../../../Components/common/DescriptionField";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function EditPromotionFAQ({ promotionFAQ, onClose, onEditSuccess }) {
  const [name, setName] = useState(promotionFAQ.name);
  const [description, setDescription] = useState(promotionFAQ.description);

  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    onClose()

    try {

      await editItem(promotionFAQ._id, {
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
      title="Edit PromotionFAQ"
      onSubmit={handleSubmit}
      onClose={onClose}
    >

      <TextField
        id="name"
        label="PromotionFAQ Name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="PromotionFAQ Name"
        required
      />

      <DescriptionField
        value={description}
        onChange={(value) => setDescription(value)}
      />

      <ErrorMessage message={errorMessage} />

    </EditFormLayout>

  )
}

export default EditPromotionFAQ;
