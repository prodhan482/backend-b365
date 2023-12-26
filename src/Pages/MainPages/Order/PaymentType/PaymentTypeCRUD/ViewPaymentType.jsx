import ViewDetailsField from "../../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../../Components/common/ViewDetailsLayout";
function ViewPaymentType({ paymentType, onClose }) {
  return (
    <ViewDetailsLayout label={"Payment Type Details"} onClose={onClose}>
       <ViewDetailsField fieldName={"Name"} data={paymentType.name} />
    </ViewDetailsLayout>
  );
}

export default ViewPaymentType;

