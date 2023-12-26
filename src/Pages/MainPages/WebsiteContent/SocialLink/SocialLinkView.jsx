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

function SocialLinkView({ data, onView, onEdit, onDelete }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="Name" />
        <TableHeading text="Link"/>
        <TableHeading text="Visibility"/>
        <TableHeading align={'text-right' } text="Action" />
      </TableHeadingRow>
      <TableBody>
        {data.map((e) => (
          <TableRow items={e._id} className="border-t border-grey-300">
            <TextCell text={e.name} />
            <TextCell text={e.link} />
            <TextCell text={`${e.visibility}`} />
            <TableButtonCell>
              <ViewTableButton onClick={() => onView(e)} />
              <EditTableButton onClick={() => onEdit(e)} />
              <DeleteTableButton onClick={() => onDelete(e)} />
            </TableButtonCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default SocialLinkView;
