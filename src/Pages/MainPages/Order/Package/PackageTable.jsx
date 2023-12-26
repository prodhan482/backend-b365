import Table from "../../../../Components/table/Table"
import TableHeadingRow from "../../../../Components/table/TableHeadingRow"
import TableHeading from "../../../../Components/table/TableHeading"
import TextCell from "../../../../Components/table/TextCell"
import ViewTableButton from "../../../../Components/table/ViewTableButton"
import EditTableButton from "../../../../Components/table/EditTableButton"
import DeleteTableButton from "../../../../Components/table/DeleteTableButton"
import TableButtonCell from "../../../../Components/table/TableButtonCell"
import TableRow from "../../../../Components/table/TableRow"
import TableBody from "../../../../Components/table/TableBody"

function PackageTable({

packages,
  setIsViewModalOpen, setIsEditModalOpen, setIsDeleteModalOpen,
  setSelectedPackage,

}) {
  return (

    <Table>

      <TableHeadingRow>
        <TableHeading text="Package Name" />
        <TableHeading text="Discount Amount" />
        <TableHeading text="Active" />
        <TableHeading align={"text-right"} text="Action" />
      </TableHeadingRow>

      <TableBody>
        {packages.map(packages => (
          <TableRow key={packages._id} item={packages}>
            <TextCell text={packages.name} />
            <TextCell text={packages.discountAmount} />
            <TextCell text={`${packages.isActive}`} />
            <TableButtonCell>
              <ViewTableButton
                onClick={() => {
                  setSelectedPackage(packages)
                  setIsViewModalOpen(true)
                }}
              />
              <EditTableButton
                onClick={() => {
                  setSelectedPackage(packages)
                  setIsEditModalOpen(true)
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  setSelectedPackage(packages)
                  setIsDeleteModalOpen(true)
                }}
              />
            </TableButtonCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
  )
}

export default PackageTable
