import ViewDetailsField from "../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../Components/common/ViewDetailsLayout";
import { IMAGE_URL } from "../../../../Utils/Api";
function ViewOfferCard({ data, onClose }) {
  return (
    <ViewDetailsLayout label={"Offer Card Details"} onClose={onClose}>
      <img src={`${IMAGE_URL}${data.image}`}  className="w-full h-40 mb-2" />
      <ViewDetailsField fieldName={"Link"} data={data.link} />
    </ViewDetailsLayout>
  );
}

export default ViewOfferCard;
