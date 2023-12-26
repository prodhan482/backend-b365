import Table from "../../../Components/table/Table"
import TableHeadingRow from "../../../Components/table/TableHeadingRow"
import TableHeading from "../../../Components/table/TableHeading"
import TextCell from "../../../Components/table/TextCell"
import ViewTableButton from "../../../Components/table/ViewTableButton"
import EditTableButton from "../../../Components/table/EditTableButton"
import DeleteTableButton from "../../../Components/table/DeleteTableButton"
import TableButtonCell from "../../../Components/table/TableButtonCell"
import TableRow from "../../../Components/table/TableRow"
import TableBody from "../../../Components/table/TableBody"

function RequirementTable({

  requirements,
  setIsViewModalOpen, setIsEditModalOpen, setIsDeleteModalOpen,
  setSelectedRequirement,

}) {
  return (

    <Table>

      <TableHeadingRow>
        <TableHeading text="Name" />
        <TableHeading text="Description" />
        <TableHeading text="Precedence" />
        <TableHeading align={"text-right"} text="Action" />
      </TableHeadingRow>

      <TableBody>
        {requirements.map(requirement => (
          <TableRow key={requirement._id} item={requirement}>
            <TextCell text={requirement.name} />
            <TextCell text={requirement.description} />
            <TextCell text={requirement.precedence} />
            <TableButtonCell>
              <ViewTableButton
                onClick={() => {
                  setSelectedRequirement(requirement)
                  setIsViewModalOpen(true)
                }}
              />
              <EditTableButton
                onClick={() => {
                  setSelectedRequirement(requirement)
                  setIsEditModalOpen(true)
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  setSelectedRequirement(requirement)
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

export default RequirementTable
