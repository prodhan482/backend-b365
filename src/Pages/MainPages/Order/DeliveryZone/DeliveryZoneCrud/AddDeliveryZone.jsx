import TextField from "../../../../../Components/common/TextField";
import { addItem } from "../deliveryZoneService";
import { useState } from "react";
import AddFormLayout from "../../../../../Components/common/AddFormLayout";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function AddDeliveryZone({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await addItem({
        name: name,
      });
 
      onSuccess();
    } catch (error) {
      setErrorMessage("Add Failed");
    }
  };
  return (
    <AddFormLayout title="Add Delivery Zone" onSubmit={handleSubmit} onClose={onClose}>
      <TextField
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Name"
        required
      />
      <ErrorMessage message={errorMessage} />
    </AddFormLayout>
  );
}

export default AddDeliveryZone;
