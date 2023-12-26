import { deleteItem } from "../PaymentTypeService";
import DeleteConfirm from "../../../../../Components/common/DeleteConfirm";
import { useState } from "react";

function DeletePaymentType({ paymentType, onClose, onDeleteSuccess }) {
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
      title={"Delete Payment Type"}
      handleDelete={handleDelete}
      id={paymentType._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  );
}

export default DeletePaymentType;
