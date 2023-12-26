import Table from "../../../../Components/table/Table";
import TableHeadingRow from "../../../../Components/table/TableHeadingRow";
import TableHeading from "../../../../Components/table/TableHeading";
import TextCell from "../../../../Components/table/TextCell";
import TableButtonCell from "../../../../Components/table/TableButtonCell";
import ViewTableButton from "../../../../Components/table/ViewTableButton";
import EditTableButton from "../../../../Components/table/EditTableButton";
import DeleteTableButton from "../../../../Components/table/DeleteTableButton";
import TableImage from "../../../../Components/table/TableImage";
import ImageCell from "../../../../Components/table/ImageCell";
import TableBody from "../../../../Components/table/TableBody"
import TableRow from "../../../../Components/table/TableRow"
function DistrictView({ data, onDelete, onEdit, onView, onSelectDistrict }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="District" />
        <TableHeading text="Division" />
        <TableHeading align={'text-right' } text="Action" />
      </TableHeadingRow>
      <TableBody>
        {data.map((e) => (
          <TableRow items={data}>
            <TextCell text={e.name} />
            <TextCell text={e.division.name} />
            <TableButtonCell>
            <EditTableButton
                onClick={() => {
                  onSelectDistrict(e);
                  onEdit();
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  onSelectDistrict(e);
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

export default DistrictView;
