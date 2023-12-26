import TextField from "../../../../Components/common/TextField";
import { addItem } from "./plasticTypeService";
import { useState } from "react";
import AddFormLayout from "../../../../Components/common/AddFormLayout";
import NumberInputField from "../../../../Components/common/NumberInputField";

function AddPlasticType({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await addItem({
        name: name,
        point: points,
      });
 
      onSuccess();
    } catch (error) {}
  };
  return (
    <AddFormLayout title="Add Plastic Type" onSubmit={handleSubmit} onClose={onClose}>
      <TextField
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Name"
        required
      />
      <NumberInputField 
        label="Points"
        value={points}
        onChange={setPoints}
        placeholder="Points"
      />
    </AddFormLayout>
  );
}

export default AddPlasticType;
