import ViewDetailsField from "../../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../../Components/common/ViewDetailsLayout";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";
import { IMAGE_URL } from "../../../../../Utils/Api";
function ViewBrand({ data, onClose, errorMessage  }) {
  return (
    <ViewDetailsLayout label={"App Settings Details"} onClose={onClose}>
      <img src={`${IMAGE_URL}${data.image}`}  className="w-full h-40 mb-2" />
      <ViewDetailsField fieldName={"Name"} data={data.name} />
      <ErrorMessage message={errorMessage} />
    </ViewDetailsLayout>
  );
}

export default ViewBrand;
