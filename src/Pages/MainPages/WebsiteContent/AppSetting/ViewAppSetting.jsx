import ViewDetailsField from "../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../Components/common/ViewDetailsLayout";
import { IMAGE_URL } from "../../../../Utils/Api";
function ViewAppSetting({ data, onClose }) {
  return (
    <ViewDetailsLayout label={"App Settings Details"} onClose={onClose}>
      <img src={`${IMAGE_URL}${data.image}`}  className="w-full h-40 mb-2" />
      <ViewDetailsField fieldName={"Link"} data={data.link} />
    </ViewDetailsLayout>
  );
}

export default ViewAppSetting;
