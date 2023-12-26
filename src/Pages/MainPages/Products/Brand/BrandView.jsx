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
function BrandView({ data, onDelete, onEdit, onView, onSelectBrand }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="Image" />
        <TableHeading text="Name" />
        <TableHeading align={'text-right' } text="Action" />
      </TableHeadingRow>
      <TableBody>
        {data.map((e) => (
          <TableRow items={data}>
            <ImageCell>
              <TableImage img={e.image} />
            </ImageCell>
            <TextCell text={e.name} />
            <TableButtonCell>
            <ViewTableButton
                onClick={() => {
                  onSelectBrand(e);
                  onView();
                }}
              />
              <EditTableButton
                onClick={() => {
                  onSelectBrand(e);
                  onEdit();
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  onSelectBrand(e);
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

export default BrandView;
