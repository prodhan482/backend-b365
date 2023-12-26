import Table from "../../../../Components/table/Table";
import TableHeadingRow from "../../../../Components/table/TableHeadingRow";
import TableHeading from "../../../../Components/table/TableHeading";
import TextCell from "../../../../Components/table/TextCell";
import TableButtonCell from "../../../../Components/table/TableButtonCell";
import ViewTableButton from "../../../../Components/table/ViewTableButton";
import EditTableButton from "../../../../Components/table/EditTableButton";
import DeleteTableButton from "../../../../Components/table/DeleteTableButton";
import TableBody from "../../../../Components/table/TableBody"
import TableRow from "../../../../Components/table/TableRow"
function OrderListView({ data, onDelete, onEdit, onView }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="Customer" />
        <TableHeading text="total" />
        <TableHeading text="Status" />
        <TableHeading text="notes" />
        <TableHeading align={'text-right' } text="Action" />
      </TableHeadingRow>
      <TableBody>
        {data.map((e) => (
          <TableRow items={data}>
            <TextCell text={e.customer} />
            <TextCell text={e.grandTotal} />
            <TextCell text={e.orderStatus} />
            <TextCell text={e.notes} />
           
            <TableButtonCell>
              <ViewTableButton onClick={() => onView(e)} />
              {/* <EditTableButton onClick={() => onEdit(e)} />
              <DeleteTableButton onClick={() => onDelete(e)} /> */}
            </TableButtonCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OrderListView;
