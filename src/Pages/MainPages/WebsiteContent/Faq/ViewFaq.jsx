import ViewDetailsField from "../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../Components/common/ViewDetailsLayout";
function ViewFaq({ faq, onClose }) {
  return (
    <ViewDetailsLayout label={"FAQ Details"} onClose={onClose}>
      <ViewDetailsField fieldName={"Name"} data={faq.name} />
      <ViewDetailsField fieldName={"Description"} data={faq.description} />
    </ViewDetailsLayout>
  );
}

export default ViewFaq;
