import ViewDetailsField from "../../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../../Components/common/ViewDetailsLayout";
function ViewPromotionFAQ({ promotionFAQ, onClose }) {
  return (
    <ViewDetailsLayout label={"Customer Details"} onClose={onClose}>
       <ViewDetailsField fieldName={"Name"} data={promotionFAQ.name} />
      <ViewDetailsField fieldName={"Description"} data={promotionFAQ.description} />
    </ViewDetailsLayout>
  );
}

export default ViewPromotionFAQ;

