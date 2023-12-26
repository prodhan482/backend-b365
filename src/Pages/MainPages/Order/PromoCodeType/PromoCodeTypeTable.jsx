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

function PromoCodeTypeTable({

  promoCodeType,
  setIsViewModalOpen, setIsEditModalOpen, setIsDeleteModalOpen,
  setSelectedPromoCodeType,

}) {
  return (

    <Table>

      <TableHeadingRow>
        <TableHeading text="Name" />
        <TableHeading text="Description" />
        <TableHeading align={"text-right"} text="Action" />
      </TableHeadingRow>

      <TableBody>
        {promoCodeType.map(promoCodeType => (
          <TableRow key={promoCodeType._id} item={promoCodeType}>
            <TextCell text={promoCodeType.name} />
            <TextCell text={promoCodeType.description} />
            <TableButtonCell>
              <ViewTableButton
                onClick={() => {
                  setSelectedPromoCodeType(promoCodeType)
                  setIsViewModalOpen(true)
                }}
              />
              <EditTableButton
                onClick={() => {
                  setSelectedPromoCodeType(promoCodeType)
                  setIsEditModalOpen(true)
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  setSelectedPromoCodeType(promoCodeType)
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

export default PromoCodeTypeTable
