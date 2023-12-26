import { deleteItem } from "../deliveryAreaService";
import DeleteConfirm from "../../../../../Components/common/DeleteConfirm";
import { useState } from "react";

function DeleteDeliveryArea({ item, onClose, onDeleteSuccess }) {
  const [errorMessage, setErrorMessage] = useState("");
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      onDeleteSuccess();
      onClose();
    } catch (error) {
      setErrorMessage("Delete Failed");
    }
  };
  return (
    <DeleteConfirm
      title={"Delete Delivery area"}
      handleDelete={handleDelete}
      id={item._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  );
}

export default DeleteDeliveryArea;
