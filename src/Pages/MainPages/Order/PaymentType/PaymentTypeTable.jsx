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

function PaymentTypeTable({  paymentType,
  setIsViewModalOpen, setIsEditModalOpen, setIsDeleteModalOpen,
  setSelectedPaymentType,

}) {
  return (

    <Table>

      <TableHeadingRow>
        <TableHeading text="Name" />
        <TableHeading align={"text-right"} text="Action" />
      </TableHeadingRow>

      <TableBody>
        {paymentType.map(paymentType => (
          <TableRow key={paymentType._id} item={paymentType}>
            <TextCell text={paymentType.name} />
            <TableButtonCell>
              <ViewTableButton
                onClick={() => {
                  setSelectedPaymentType(paymentType)
                  setIsViewModalOpen(true)
                }}
              />
              <EditTableButton
                onClick={() => {
                  setSelectedPaymentType(paymentType)
                  setIsEditModalOpen(true)
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  setSelectedPaymentType(paymentType)
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

export default PaymentTypeTable; 

