import ViewDetailsField from "../../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../../Components/common/ViewDetailsLayout";
function ViewTermsAndConditions({ data, onClose }) {
  return (
    <ViewDetailsLayout label={"Customer Details"} onClose={onClose}>
       <ViewDetailsField fieldName={"Name"} data={data.name} />
      <ViewDetailsField fieldName={"Description"} data={data.description} />
    </ViewDetailsLayout>
  );
}

export default ViewTermsAndConditions;

