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
function FeaturedCategoryView({ data, onDelete, onEdit, onView }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="Name" />
        <TableHeading text="Precedence" />
        <TableHeading align={'text-right' } text="Action" />
      </TableHeadingRow>
      <TableBody>
        {data.map((e) => (
          <TableRow items={data}>
            <TextCell text={e.category.name} />
            <TextCell text={e.precedence} />
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

export default FeaturedCategoryView;
