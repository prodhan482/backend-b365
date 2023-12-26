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

function TermsAndConditionsView({ data, onDelete, onEdit, onView, onSelectTermsAndConditions }) {
  return (
    <Table>
      <TableHeadingRow>
        <TableHeading text="Name" />
        <TableHeading text="Description" />      
        <TableHeading align={'text-right' } text="Action" />
      </TableHeadingRow>
      <TableBody>
        {data.map((e) => (
          <TableRow items={e._id}>
          <TextCell text={e.name} />
          <TextEditorCell text={{__html: e.description}} />
          {/* <div dangerouslySetInnerHTML={{__html: e.description}}></div> */}
         
            <TableButtonCell>
              <EditTableButton
                onClick={() => {
                  onSelectTermsAndConditions(e);
                  onEdit();
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  onSelectTermsAndConditions(e);
                  onDelete();
                }}
              />
            </TableButtonCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TermsAndConditionsView; 


// import { useState } from "react";
// import { editItem } from "./termsAndConditionsService"
// import TextField from "./../../../../Components/common/TextField";
// import DescriptionField from "./../../../../Components/common/DescriptionField";
// import AddFormLayout from "./../../../../Components/common/AddFormLayout";
// import ErrorMessage from "./../../../../Components/common/ErrorMessage";
// import TextEditorDescriptionField from "./../../../../Components/common/TextEditorDescriptionField";
// import TextEditorFormLayout from "./../../../../Components/common/AddTextEditorFormLayout";

// function EditTermsAndConditions({data, onClose, onEditSuccess }) {
//     const [name, setName] = useState(data.name);
//     const [description, setDescription] = useState(data.description);
//     const [errorMessage, setErrorMessage] = useState("");

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       onClose();
//       try {
//         await editItem(data._id, {
//           name: name,
//           description: description,
//         });
//         onEditSuccess();
        
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     return (

//         <TextEditorFormLayout title="Add Terms And Conditions" onSubmit={handleSubmit} onClose={onClose}>
//            <TextField
//         id="name"
//         label="Name"
//         value={name}
//         onChange={(value) => setName(value)}
//         placeholder="Name"
//         required
//       />
//             <TextEditorDescriptionField value={description} onChange={setDescription} />
//             <ErrorMessage message={errorMessage} />
//         </TextEditorFormLayout>
//     );
// }

// export default EditTermsAndConditions;

// import { useState, useEffect } from "react";
// import { editItem } from "./termsAndConditionsService";
// import TextField from "./../../../../Components/common/TextField";
// import TextEditorDescriptionField from "./../../../../Components/common/TextEditorDescriptionField";
// import TextEditorFormLayout from "./../../../../Components/common/AddTextEditorFormLayout";
// import ErrorMessage from "./../../../../Components/common/ErrorMessage";
// import AddTextEditorFormLayout from "../../../../Components/common/AddTextEditorFormLayout";

// function TermsAndConditionsView({ data, onClose, onEditSuccess }) {
//   const [name, setName] = useState(data.name);
//   const [description, setDescription] = useState(data.description);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     onClose();
//     try {
//       await editItem(data._id, {
//         name: name,
//         description: description,
//       });
//       onEditSuccess();
      
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <AddTextEditorFormLayout
//       title="Terms And Conditions" onSubmit={handleSubmit} onClose={onClose}
//     >
//       <TextField
//         id="name"
//         label="Name"
//         value={name}
//         onChange={(value) => setName(value)}
//         placeholder="Name"
//         required
//       />

//       <TextEditorDescriptionField
//         id="Description"
//         label="Description"
//         value={description}
//         onChange={(value) => setDescription(value)}
//         placeholder="Description"
//         required
//       />
//     </AddTextEditorFormLayout>
//   );
// }

// export default TermsAndConditionsView;




