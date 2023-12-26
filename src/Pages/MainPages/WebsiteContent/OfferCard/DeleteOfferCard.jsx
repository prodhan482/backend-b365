import { deleteItem } from "./offerCardService";
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
function DeleteOfferCard({ item, onClose, onDeleteSuccess }) {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      onDeleteSuccess();
      onClose();
    } catch (error) {}
  };
  return (
    <DeleteConfirm
      title={"Delete Card"}
      handleDelete={handleDelete}
      id={item._id}
      onClose={onClose}
    />
  );
}

export default DeleteOfferCard;
