import { deleteItem } from "../termsAndConditionsService";
import DeleteConfirm from "../../../../../Components/common/DeleteConfirm";
import { useState } from "react";

function DeleteTermsAndConditions({ item, onClose, onDeleteSuccess }) {
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
      title={"Delete Terms And Conditions"}
      handleDelete={handleDelete}
      id={item._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  );
}

export default DeleteTermsAndConditions;
