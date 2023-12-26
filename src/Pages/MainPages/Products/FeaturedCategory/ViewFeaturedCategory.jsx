import ViewDetailsField from "../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../Components/common/ViewDetailsLayout";
import { IMAGE_URL } from "../../../../Utils/Api";
function ViewFeaturedCategory({ data, onClose }) {
  return (
    <ViewDetailsLayout label={"App Settings Details"} onClose={onClose}>
      <ViewDetailsField fieldName={"Name"} data={data.name} />
      <ViewDetailsField fieldName={"Precedence"} data={data.precedence} />
      <ViewDetailsField fieldName={"SQL Id"} data={data.sqlId} />
      <ViewDetailsField fieldName={"Product Count"} data={data.productCount} />
      <ViewDetailsField fieldName={"Level"} data={data.level} />
      <ViewDetailsField fieldName={"Active"} data={`${data.isActive}`} />
    </ViewDetailsLayout>
  );
}

export default ViewFeaturedCategory;
