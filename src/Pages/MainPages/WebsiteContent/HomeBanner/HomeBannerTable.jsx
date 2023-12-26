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
import ImageCell from "../../../../Components/table/ImageCell"
import TableImage from "../../../../Components/table/TableImage"

function HomeBannerTable({

  homeBanner,
  setIsViewModalOpen, setIsEditModalOpen, setIsDeleteModalOpen,
  setSelectedHomeBanner,

}) {
  return (

    <Table>

      <TableHeadingRow>
        <TableHeading text="Image" />
        <TableHeading text="Precedence" />
        <TableHeading align={"text-right"} text="Action" />
      </TableHeadingRow>

      <TableBody>
        {homeBanner.map(homeBanner => (
          <TableRow key={homeBanner._id} item={homeBanner}>
            <ImageCell>
              <TableImage img={homeBanner.image} />
            </ImageCell>
            <TextCell text={homeBanner.precedence} />
            <TableButtonCell>
              <ViewTableButton
                onClick={() => {
                  setSelectedHomeBanner(homeBanner)
                  setIsViewModalOpen(true)
                }}
              />
              <EditTableButton
                onClick={() => {
                  setSelectedHomeBanner(homeBanner)
                  setIsEditModalOpen(true)
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  setSelectedHomeBanner(homeBanner)
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

export default HomeBannerTable
