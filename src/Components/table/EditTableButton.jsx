import TableButton from "./TableButton";
import Edit from "../../Components/Icons/Edit";

function EditTableButton({ onClick }) {
  return (
    <TableButton onClick={onClick}>
      <Edit />
    </TableButton>
  );
}

export default EditTableButton;