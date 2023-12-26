import Table from "../../../../Components/table/Table"
import TableHeadingRow from "../../../../Components/table/TableHeadingRow"
import TableHeading from "../../../../Components/table/TableHeading"
import TextCell from "../../../../Components/table/TextCell"
import ImageCell from "../../../../Components/table/ImageCell"
import TableImage from "../../../../Components/table/TableImage"
import TableBody from "../../../../Components/table/TableBody"
import TableRow from "../../../../Components/table/TableRow"
function EmployeeView({ items }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="Name" />
        <TableHeading text="Email" />
        <TableHeading text="Image" />
      </TableHeadingRow>
      <TableBody>
        {[items].map((item) => (
          <TableRow key={item._id} item={items} className="border-t border-grey-300">
            <TextCell text={item.name} />
            <TextCell text={item.email} />
            <ImageCell>
              <TableImage img={item.image}/>
            </ImageCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default EmployeeView
