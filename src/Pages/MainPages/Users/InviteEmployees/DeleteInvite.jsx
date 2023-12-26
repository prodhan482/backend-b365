import Cross from "../../../../Components/Icons/Cross"
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
import { deleteItem } from "./inviteEmployeeService";

function DeleteInvite({ requirement, onClose,onDeleteSuccess }) {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      onDeleteSuccess();
      onClose();
    } catch (error) {
      console.log(error)
    }
  };
  

  return (
    <DeleteConfirm
      title={"Delete Invite"}
      handleDelete={handleDelete}
      id={requirement._id}
      onClose={onClose}
    />
  );
}

export default DeleteInvite;
