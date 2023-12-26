import { deleteItem } from "./faqService";
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
function DeleteConfirmModal({ data, onClose, onDeleteSuccess }) {
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
      title={"Delete FAQ"}
      handleDelete={handleDelete}
      id={data._id}
      onClose={onClose}
    />
  );
}

export default DeleteConfirmModal;
