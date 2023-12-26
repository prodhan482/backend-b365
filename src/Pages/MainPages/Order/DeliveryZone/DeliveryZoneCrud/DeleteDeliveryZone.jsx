import { deleteItem } from "../deliveryZoneService";
import DeleteConfirm from "../../../../../Components/common/DeleteConfirm";
import { useState } from "react";

function DeleteDeliveryZone({ item, onClose, onDeleteSuccess }) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      onDeleteSuccess();
      onClose();
    } catch (error) {}
  };
  return (
    <DeleteConfirm
      title={"Delete Division"}
      handleDelete={handleDelete}
      id={item._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  );
}

export default DeleteDeliveryZone;
