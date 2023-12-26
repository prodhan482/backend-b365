import Table from "../../../../Components/table/Table";
import TableHeadingRow from "../../../../Components/table/TableHeadingRow";
import TableHeading from "../../../../Components/table/TableHeading";
import TextCell from "../../../../Components/table/TextCell";
import TableButtonCell from "../../../../Components/table/TableButtonCell";
import ViewTableButton from "../../../../Components/table/ViewTableButton";
import EditTableButton from "../../../../Components/table/EditTableButton";
import DeleteTableButton from "../../../../Components/table/DeleteTableButton";
import TableBody from "../../../../Components/table/TableBody";
import TableRow from "../../../../Components/table/TableRow";

function AreaView({ data, onView, onEdit, onDelete, onSelectArea }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="Name" />
        <TableHeading  text="Division" />
        <TableHeading align={'text-right' } text="Action" />
      </TableHeadingRow>
      <TableBody>
        {data.map((e) => (
          <TableRow items={e._id}>
            <TextCell  text={e.name} />
            <TextCell align ={"text-center"} text={e.district.name} />
            <TableButtonCell>
            <EditTableButton
                onClick={() => {
                  onSelectArea(e);
                  onEdit();
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  onSelectArea(e);
                  onDelete();
                }}
              />
            </TableButtonCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AreaView;
