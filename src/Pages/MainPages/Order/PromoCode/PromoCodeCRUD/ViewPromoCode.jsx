import ErrorMessage from "../../../../../Components/common/ErrorMessage"
import ViewDetailsField from "../../../../../Components/common/ViewDetailsField"
import ViewDetailsLayout from "../../../../../Components/common/ViewDetailsLayout"

function ViewPromoCode({ promoCode, onClose, errorMessage }) {
  return (

    <ViewDetailsLayout label={"Package Details"} onClose={onClose}>

      <ViewDetailsField fieldName={"Start Date"} data={promoCode.validStartDate} />
      <ViewDetailsField fieldName={"End Date"} data={promoCode.validEndDate} />
      <ViewDetailsField
        fieldName={"Frequency"}
        data={promoCode.frequency}
      />
      <ViewDetailsField
        fieldName={"Amount"}
        data={promoCode.amount}
      />
      <ViewDetailsField
        fieldName={"UpTo"}
        data={promoCode.upTo}
      />

      <ErrorMessage message={errorMessage} />

    </ViewDetailsLayout>   
  )
}

export default ViewPromoCode
