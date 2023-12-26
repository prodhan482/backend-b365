import Table from "../../../../Components/table/Table";
import TableHeadingRow from "../../../../Components/table/TableHeadingRow";
import TableHeading from "../../../../Components/table/TableHeading";
import TextCell from "../../../../Components/table/TextCell";
import TableButtonCell from "../../../../Components/table/TableButtonCell";
import EditTableButton from "../../../../Components/table/EditTableButton";
import DeleteTableButton from "../../../../Components/table/DeleteTableButton";
import TableBody from "../../../../Components/table/TableBody"
import TableRow from "../../../../Components/table/TableRow"
function DeliveryAreaView({ data, onDelete, onEdit, onView, onSelectDivisionArea }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="Delivery Zone" />
        <TableHeading text="Area" />
        <TableHeading align={'text-right' } text="Action" />
      </TableHeadingRow>
      <TableBody>
        {data.map((e) => (
          <TableRow items={data}>
            <TextCell text={e.deliveryZone.name} />
            <TextCell text={e.area?.name} />
            <TableButtonCell>
            <EditTableButton
                onClick={() => {
                  onSelectDivisionArea(e);
                  onEdit();
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  onSelectDivisionArea(e);
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

export default DeliveryAreaView;
