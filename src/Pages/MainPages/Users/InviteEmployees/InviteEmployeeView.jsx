import Table from "../../../../Components/table/Table";
import TableHeadingRow from "../../../../Components/table/TableHeadingRow";
import TableHeading from "../../../../Components/table/TableHeading";
import TextCell from "../../../../Components/table/TextCell";
import TableButtonCell from "../../../../Components/table/TableButtonCell";
import DeleteTableButton from "../../../../Components/table/DeleteTableButton";
import TableBody from "../../../../Components/table/TableBody"
import TableRow from "../../../../Components/table/TableRow"
function InviteEmployeeView({ items, onSendInvite, onDelete }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="Employee Name" />
        <TableHeading text="Email" />
        <TableHeading text="Time" />
        <TableHeading align={'text-right' } text="Action" />
      </TableHeadingRow>
      <TableBody>
        {items.map((e) => (
          <TableRow items={items} className="border-t border-grey-300">
            <TextCell text={e.employee.name} />
            <TextCell text={e.email} />
            <TextCell text={new Date(`${e.createdAt}`).toLocaleString('en-uk', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })} />
            <TableButtonCell>
              <DeleteTableButton onClick={() => onDelete(e)}/>
            </TableButtonCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default InviteEmployeeView;
