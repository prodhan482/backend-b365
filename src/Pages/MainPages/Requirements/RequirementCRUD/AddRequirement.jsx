import { useState } from "react"

import TextField from "../../../../Components/common/TextField"
import PrecedenceField from "../../../../Components/common/PrecedenceField"
import DescriptionField from "../../../../Components/common/DescriptionField"
import AddFormLayout from "../../../../Components/common/AddFormLayout"
import ErrorMessage from "../../../../Components/common/ErrorMessage"

import { addItem } from "../requirementService"

function AddRequirement({ onClose, onSuccess }) {

  const [requirementName, setRequirementName] = useState("")
  const [precedence, setPrecedence] = useState("")
  const [description, setDescription] = useState("")

  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      onClose()

      await addItem({
        name: requirementName,
        precedence: parseInt(precedence),
        description: description,
      })

      onSuccess()

    } catch (error) {

      setErrorMessage("Add Failed")

    }
  }

  return (

    <AddFormLayout
      title="Add Requirement"
      onSubmit={handleSubmit}
      onClose={onClose}
    >

      <TextField
        label="Requirement Name"
        value={requirementName}
        onChange={setRequirementName}
        placeholder="Requirement Name"
        required
      />

      <PrecedenceField value={precedence} onChange={setPrecedence} />
      <DescriptionField value={description} onChange={setDescription} />

      <ErrorMessage message={errorMessage} />

    </AddFormLayout>

  )
}

export default AddRequirement
