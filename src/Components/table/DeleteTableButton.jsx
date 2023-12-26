import TableButton from "./TableButton"
import Trash from "../../Components/Icons/Trash"

function DeleteTableButton({ onClick }) {
  return (
    <TableButton onClick={onClick}>
      <Trash />
    </TableButton>
  );
}

export default DeleteTableButton;