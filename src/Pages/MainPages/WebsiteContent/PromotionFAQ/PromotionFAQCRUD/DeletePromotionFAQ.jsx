import { deleteItem } from "../promotionFAQService";
import DeleteConfirm from "../../../../../Components/common/DeleteConfirm";
import { useState } from "react";

function DeletePromotionFAQ({ promotionFAQ, onClose, onDeleteSuccess }) {
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
      id={promotionFAQ._id}
      onClose={onClose}
      errorMessage={errorMessage}
    />
  );
}

export default DeletePromotionFAQ;
