import ErrorMessage from "../../../../Components/common/ErrorMessage"
import ViewDetailsField from "../../../../Components/common/ViewDetailsField"
import ViewDetailsLayout from "../../../../Components/common/ViewDetailsLayout"

function ViewRequirement({ requirement, onClose, errorMessage }) {
  return (

    <ViewDetailsLayout label={"Requirement Details"} onClose={onClose}>

      <ViewDetailsField fieldName={"Name"} data={requirement.name} />
      <ViewDetailsField
        fieldName={"Description"}
        data={requirement.description}
      />
      <ViewDetailsField
        fieldName={"Precedence"}
        data={requirement.precedence}
      />

      <ErrorMessage message={errorMessage} />

    </ViewDetailsLayout>
    
  )
}

export default ViewRequirement
