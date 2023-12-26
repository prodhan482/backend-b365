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
import ImageCell from "../../../../Components/table/ImageCell";
import TableImage from "../../../../Components/table/TableImage";
import { useNavigate } from "react-router-dom";

function ProductView({ data, onView, onEdit, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <Table>
        <TableHeadingRow>
          <TableHeading text="Image" />
          <TableHeading text="Name" />
          <TableHeading text="SKU" />
          <TableHeading text="Price" />
          <TableHeading text="QUANTITY" />
          <TableHeading text="Brand" />         
          <TableHeading text="Category" />
          <TableHeading text="Sub Category" />
          <TableHeading text="Sub Sub Category" />
          <TableHeading text="Description" />
          <TableHeading text="Visibility" />
          <TableHeading text="Plastic" />
          <TableHeading text="Plastic Type" />
          <TableHeading text="Weight" />
          <TableHeading text="Discount Status" />
          <TableHeading text="Discount Type" />
          <TableHeading text="Discount Amount" />
          <TableHeading text="Employee" />
          <TableHeading align={'text-right' } text="Action" />
        </TableHeadingRow>
        <TableBody>
          {data.map((e) => (
            <TableRow item={e._id} className="border-t border-grey-300">
              <ImageCell>
                <TableImage img={e.image} />
              </ImageCell>
              <TextCell text={e.name} />
              <TextCell text={e.sku} />
              <TextCell text={e.price} />
              <TextCell text={e.quantity} />
              <TextCell text={e.brand?.name} />
              <TextCell text={e.category?.name} />
              <TextCell text={e.subcategory?.name} />
              <TextCell text={e.subsubcategory?.name } />
              <TextCell text={e.description} />
              <TextCell text={`${e.isVisible}`} />
              <TextCell text={`${e.isPlastic}`} />
              <TextCell text={e.plasticType?.name} />
              <TextCell text={e.weight} />
              <TextCell text={`${e.isDiscount}`} />
              <TextCell text={e.discountType} />
              <TextCell text={e.discountAmount} />
              <TextCell text={e.employee?.name} />
              <TableButtonCell>
                <EditTableButton onClick={() => navigate(`/EditProduct/${e._id}`)} />
                <DeleteTableButton onClick={() => onDelete(e)} />
              </TableButtonCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductView;
