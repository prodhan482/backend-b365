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
function CategoryView({ data, onDelete, onEdit, onView }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="Image" />
        <TableHeading text="Name" />
        <TableHeading text="Precedence" />
        <TableHeading text="SQL Id" />
        <TableHeading text="Product Count" />
        <TableHeading text="Level" />
        <TableHeading text="Active" />
        <TableHeading align={'text-right' } text="Action" />
      </TableHeadingRow>
      <TableBody>
        {data.map((e) => (
          <TableRow items={data}>
            <ImageCell>
              <TableImage img={e.image} />
            </ImageCell>
            <TextCell text={e.name} />
            <TextCell text={e.precedence} />
            <TextCell text={e.sqlId} />
            <TextCell text={e.productCount} />
            <TextCell text={e.level} />
            <TextCell text={`${e.isActive}`} />
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

export default CategoryView;
