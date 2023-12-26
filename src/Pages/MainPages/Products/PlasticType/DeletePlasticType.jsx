import { deleteItem } from "./plasticTypeService";
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
function DeletePlasticType({ item, onClose, onDeleteSuccess }) {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      onDeleteSuccess();
      onClose();
    } catch (error) {}
  };
  return (
    <DeleteConfirm
      title={"Delete Plastic Type"}
      handleDelete={handleDelete}
      id={item._id}
      onClose={onClose}
    />
  );
}

export default DeletePlasticType;
