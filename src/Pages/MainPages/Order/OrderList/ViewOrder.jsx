import ViewDetailsField from "../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../Components/common/ViewDetailsLayout";
function ViewOrder({ data, onClose }) {
  return (
    <ViewDetailsLayout label={"Order Details"} onClose={onClose}>
      <ViewDetailsField fieldName={"Customer"} data={data.customer} />
      <ViewDetailsField fieldName={"Total"} data={data.grandTotal} />
      <ViewDetailsField fieldName={"Status"} data={data.orderStatus} />
      <ViewDetailsField fieldName={"Note"} data={data.notes} />
    </ViewDetailsLayout>
  );
}

export default ViewOrder;
