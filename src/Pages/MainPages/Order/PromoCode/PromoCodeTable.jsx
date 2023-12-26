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

function PromoCodeTable({

  promoCode,
  setIsViewModalOpen, setIsEditModalOpen, setIsDeleteModalOpen,
  setSelectedPromoCode,

}) {
  return (

    <Table>

      <TableHeadingRow>
        <TableHeading text="Promo" />
        <TableHeading text="Max Limit" />
        <TableHeading text="Discount Type" />
        <TableHeading text="Discount Amount" />
        <TableHeading text="Promo Type" />
        <TableHeading text="Start Date" />
        <TableHeading text="End Date" />
        <TableHeading align={"text-right"} text="Action" />
      </TableHeadingRow>

      <TableBody>
        {promoCode.map(promoCode => (
          <TableRow key={promoCode._id} item={promoCode}>
            {/* <TextCell text={promoCode.startDate} />
            <TextCell text={promoCode.endDate} /> */}
            <TextCell text={promoCode.promo} />
            <TextCell text={promoCode.maxlimit} />
            <TextCell text={promoCode.discountType} />
            <TextCell text={promoCode.discountAmount} />
            <TextCell text={promoCode.promotype} />
            <TextCell text={promoCode.validStartDate} />
            <TextCell text={promoCode.validEndDate} />
            <TableButtonCell>
              <ViewTableButton
                onClick={() => {
                  setSelectedPromoCode(promoCode)
                  setIsViewModalOpen(true)
                }}
              />
              <EditTableButton
                onClick={() => {
                  setSelectedPromoCode(promoCode)
                  setIsEditModalOpen(true)
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  setSelectedPromoCode(promoCode)
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

export default PromoCodeTable
