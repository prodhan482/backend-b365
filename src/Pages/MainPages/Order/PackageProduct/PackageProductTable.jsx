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

function PackageProductTable({

packageProduct,
//   setIsViewModalOpen, setIsEditModalOpen, setIsDeleteModalOpen,
  setSelectedPackageProduct,

}) {
  return (

    <Table>

      <TableHeadingRow>
        <TableHeading text="Package Name" />
        <TableHeading text="Product Sku" />
        {/* <TableHeading align={"text-right"} text="Action" /> */}
      </TableHeadingRow>

      <TableBody>
        {packageProduct.map(packageProduct => (
          <TableRow key={packageProduct._id} item={packageProduct}>
            <TextCell text={packageProduct.promoPackage.name} />
            <TextCell text={packageProduct.productSku} />
            {/* <TableButtonCell>
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
            </TableButtonCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
  )
}

export default PackageProductTable
