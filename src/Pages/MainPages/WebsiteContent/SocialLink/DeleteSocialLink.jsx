import { deleteItem } from "./socialLinkService";
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
function DeleteSocialLink({ data, onClose, onDeleteSuccess }) {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      onDeleteSuccess();
      onClose();
    } catch (error) {

    }
  };
  return (
    <DeleteConfirm
      title={"Delete Social"}
      handleDelete={handleDelete}
      id={data._id}
      onClose={onClose}
    />
  );
}

export default DeleteSocialLink;
