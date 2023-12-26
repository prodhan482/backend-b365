import TextField from "../../../../Components/common/TextField";
import DescriptionField from "../../../../Components/common/DescriptionField";
import { addItem } from "./faqService";
import { useState } from "react";
import AddFormLayout from "../../../../Components/common/AddFormLayout";

function AddFaqView({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await addItem({
        name: name,
        description: description,
      });
     
      onSuccess();
    } catch (error) {}
  };
  return (
    <AddFormLayout title="Add FAQ" onSubmit={handleSubmit} onClose={onClose}>
      <TextField
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Name"
        required
      />
      <DescriptionField value={description} onChange={setDescription} />
    </AddFormLayout>
  );
}

export default AddFaqView;
