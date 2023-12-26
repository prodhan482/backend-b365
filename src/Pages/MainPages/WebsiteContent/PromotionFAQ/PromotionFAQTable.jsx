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
import TextEditorCell from "../../../../Components/table/TextEditorCell";

function PromotionFAQTable({  promotionFAQ,
  setIsViewModalOpen, setIsEditModalOpen, setIsDeleteModalOpen,
  setSelectedPromotionFAQ,

}) {
  return (

    <Table>

      <TableHeadingRow>
        <TableHeading text="Name" />
        <TableHeading text="Description" />
        <TableHeading align={"text-right"} text="Action" />
      </TableHeadingRow>

      <TableBody>
        {promotionFAQ.map(promotionFAQ => (
          <TableRow key={promotionFAQ._id} item={promotionFAQ}>
            <TextCell text={promotionFAQ.name} />
            <TextCell text={promotionFAQ.description} />
            <TableButtonCell>
              <ViewTableButton
                onClick={() => {
                  setSelectedPromotionFAQ(promotionFAQ)
                  setIsViewModalOpen(true)
                }}
              />
              <EditTableButton
                onClick={() => {
                  setSelectedPromotionFAQ(promotionFAQ)
                  setIsEditModalOpen(true)
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  setSelectedPromotionFAQ(promotionFAQ)
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

export default PromotionFAQTable; 

