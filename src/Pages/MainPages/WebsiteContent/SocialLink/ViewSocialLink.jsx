import ViewDetailsField from "../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../Components/common/ViewDetailsLayout";
function ViewSocialLink({ data, onClose }) {
  return (
    <ViewDetailsLayout label={"Social Link Details"} onClose={onClose}>
      <ViewDetailsField fieldName={"Name"} data={data.name} />
      <ViewDetailsField fieldName={"Link"} data={data.link} />
      <ViewDetailsField fieldName={"Visibility"} data={`${data.visibility}`} />
    </ViewDetailsLayout>
  );
}

export default ViewSocialLink;
