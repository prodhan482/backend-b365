import { deleteItem } from "./appSettingService";
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
function DeleteAppSetting({ item, onClose, onDeleteSuccess }) {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      onDeleteSuccess();
      onClose();
    } catch (error) {}
  };
  return (
    <DeleteConfirm
      title={"Delete App Setting"}
      handleDelete={handleDelete}
      id={item._id}
      onClose={onClose}
    />
  );
}

export default DeleteAppSetting;
