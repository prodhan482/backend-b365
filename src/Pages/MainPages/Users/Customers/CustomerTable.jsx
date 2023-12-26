import Table from "../../../../Components/table/Table";
import TableHeadingRow from "../../../../Components/table/TableHeadingRow";
import TableHeading from "../../../../Components/table/TableHeading";
import TextCell from "../../../../Components/table/TextCell";
import TableButtonCell from "../../../../Components/table/TableButtonCell";
import ViewTableButton from "../../../../Components/table/ViewTableButton";
import TableBody from "../../../../Components/table/TableBody"
import TableRow from "../../../../Components/table/TableRow"
function CustomerTable({

  customers,
  setIsViewModalOpen,
  setSelectedCustomer,

}) {
  return (

    <Table>

      <TableHeadingRow>
        <TableHeading text="Name" />
        <TableHeading text="Email" />
        <TableHeading text="Phone Number" />
        <TableHeading align={"text-right"} text="Action" />
      </TableHeadingRow>

      <TableBody>
        {customers.map(customer => (
          <TableRow key={customer._id} item={customer}>

            <TextCell text={customer.firstName} />
            <TextCell text={customer.email} />
            <TextCell text={customer.mobile} />

            <TableButtonCell>
              <ViewTableButton
                onClick={() => {
                  setSelectedCustomer(customer)
                  setIsViewModalOpen(true)
                }}
              />
            </TableButtonCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>

  )
}

export default CustomerTable;
