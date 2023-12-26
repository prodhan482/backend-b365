import { useState } from "react"

import TextField from "../../../../Components/common/TextField"
import PrecedenceField from "../../../../Components/common/PrecedenceField"
import DescriptionField from "../../../../Components/common/DescriptionField"
import EditFormLayout from "../../../../Components/common/EditFormLayout"

import ErrorMessage from "../../../../Components/common/ErrorMessage"

import { editItem } from "../requirementService"

function EditRequirement({ requirement, onClose, onEditSuccess }) {

  const [requirementName, setRequirementName] = useState(requirement.name)
  const [precedence, setPrecedence] = useState(requirement.precedence)
  const [description, setDescription] = useState(requirement.description)

  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    onClose()

    try {

      await editItem(requirement._id, {
        name: requirementName,
        precedence: parseInt(precedence),
        description: description,
      })

      onEditSuccess()

    } catch (error) {

      setErrorMessage("Failed edit")

    }
  }

  return (

    <EditFormLayout
      title="Edit Requirement"
      onSubmit={handleSubmit}
      onClose={onClose}
    >

      <TextField
        id="RequirementName"
        label="Requirement Name"
        value={requirementName}
        onChange={(value) => setRequirementName(value)}
        placeholder="Requirement Name"
        required
      />
      <PrecedenceField
        value={precedence}
        onChange={(value) => setPrecedence(value)}
      />
      <DescriptionField
        value={description}
        onChange={(value) => setDescription(value)}
      />

      <ErrorMessage message={errorMessage} />

    </EditFormLayout>

  )
}

export default EditRequirement
