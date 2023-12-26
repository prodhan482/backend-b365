import { deleteItem } from "./featuredCategory";
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
function DeleteFeaturedCategory({ item, onClose, onDeleteSuccess }) {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      onDeleteSuccess();
      onClose();
    } catch (error) {}
  };
  return (
    <DeleteConfirm
      title={"Delete Featured Category"}
      handleDelete={handleDelete}
      id={item._id}
      onClose={onClose}
    />
  );
}

export default DeleteFeaturedCategory;
