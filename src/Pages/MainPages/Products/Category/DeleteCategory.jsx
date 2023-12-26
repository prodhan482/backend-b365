import { deleteItem } from "./categoryService";
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
function DeleteSubCategory({ item, onClose, onDeleteSuccess }) {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      onDeleteSuccess();
      onClose();
    } catch (error) {}
  };
  return (
    <DeleteConfirm
      title={"Delete sub category"}
      handleDelete={handleDelete}
      id={item._id}
      onClose={onClose}
    />
  );
}

export default DeleteSubCategory;
