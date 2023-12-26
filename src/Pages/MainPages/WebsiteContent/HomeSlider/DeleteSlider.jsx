import { deleteItem } from "./homeSliderService";
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
function DeleteSlider({ item, onClose, onDeleteSuccess }) {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      onDeleteSuccess();
      onClose();
    } catch (error) {}
  };
  return (
    <DeleteConfirm
      title={"Delete Slider"}
      handleDelete={handleDelete}
      id={item._id}
      onClose={onClose}
    />
  );
}

export default DeleteSlider;
