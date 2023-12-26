import { deleteItem } from "../divisionService";
import DeleteConfirm from "../../../../../Components/common/DeleteConfirm";
import { useState } from "react";

function DeleteDivision({ item, onClose, onDeleteSuccess }) {
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
      title={"Delete Division"}
      handleDelete={handleDelete}
      id={item._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  );
}

export default DeleteDivision;
