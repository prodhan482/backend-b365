import TableButton from "./TableButton";
import View from "../../Components/Icons/View";

function ViewTableButton({ onClick }) {
  return (
    <TableButton onClick={onClick}>
      <View />
    </TableButton>
  );
}

export default ViewTableButton;