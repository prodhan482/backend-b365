import { deleteItem } from "./subSubCategoryService";
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
function DeleteSubSubCategory({ item, onClose, onDeleteSuccess }) {
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

export default DeleteSubSubCategory;
