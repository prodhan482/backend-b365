import { deleteItem } from "./productService";
import DeleteConfirm from "../../../../Components/common/DeleteConfirm";
function DeleteProduct({ data, onClose, onDeleteSuccess }) {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      onDeleteSuccess();
      onClose();
    } catch (error) {

    }
  };
  return (
    <DeleteConfirm
      title={"Delete Product"}
      handleDelete={handleDelete}
      id={data._id}
      onClose={onClose}
    />
  );
}

export default DeleteProduct;
