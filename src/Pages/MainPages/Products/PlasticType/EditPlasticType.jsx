import { useState } from "react";
import { editItem } from "./plasticTypeService";
import TextField from "../../../../Components/common/TextField";
import EditFormLayout from "../../../../Components/common/EditFormLayout";
import NumberInputField from "../../../../Components/common/NumberInputField";

function EditPlasticType({ data, onClose, onEditSuccess }) {
  const [name, setName] = useState(data.name);
  const [points, setPoints] = useState(data.point);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await editItem(data._id, {
        name: name,
        point: points,
      });
      onEditSuccess();
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EditFormLayout title="Edit Plastic Type" onSubmit={handleSubmit} onClose={onClose}>
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Name"
        required
      />

      <NumberInputField
        label="Points"
        value={points}
        onChange={setPoints}
        placeholder="Points"
      />
    </EditFormLayout>
  );
}

export default EditPlasticType;
