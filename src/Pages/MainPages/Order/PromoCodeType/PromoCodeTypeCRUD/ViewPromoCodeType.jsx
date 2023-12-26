import ErrorMessage from "../../../../../Components/common/ErrorMessage"
import ViewDetailsField from "../../../../../Components/common/ViewDetailsField"
import ViewDetailsLayout from "../../../../../Components/common/ViewDetailsLayout"

function ViewPromoCodeType({ promoCodeType, onClose, errorMessage }) {
  return (

    <ViewDetailsLayout label={"Package Details"} onClose={onClose}>

      <ViewDetailsField fieldName={"Name"} data={promoCodeType.name} />
      <ViewDetailsField fieldName={"Description"} data={promoCodeType.description} />

      <ErrorMessage message={errorMessage} />

    </ViewDetailsLayout>   
  )
}

export default ViewPromoCodeType
