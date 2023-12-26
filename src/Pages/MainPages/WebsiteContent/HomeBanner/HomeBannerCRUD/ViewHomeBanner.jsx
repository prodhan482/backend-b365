import ErrorMessage from "../../../../../Components/common/ErrorMessage"
import ViewDetailsField from "../../../../../Components/common/ViewDetailsField"
import ViewDetailsLayout from "../../../../../Components/common/ViewDetailsLayout"
import { IMAGE_URL } from "../../../../../Utils/Api";

function ViewPromoCode({ homeBanner, onClose, errorMessage }) {
  return (

    <ViewDetailsLayout label={"Home Banner Details"} onClose={onClose}>

      <img src={`${IMAGE_URL}${homeBanner.image}`}  className="w-full h-40 mb-2" />
      <ViewDetailsField fieldName={"Precedence"} data={homeBanner.precedence} />

      <ErrorMessage message={errorMessage} />

    </ViewDetailsLayout>   
  )
}

export default ViewPromoCode
