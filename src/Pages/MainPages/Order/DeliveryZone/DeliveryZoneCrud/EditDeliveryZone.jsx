import { useState } from "react";
import { editItem } from "../deliveryZoneService";
import TextField from "../../../../../Components/common/TextField";
import EditFormLayout from "../../../../../Components/common/EditFormLayout";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function EditDeliveryZone({ data, onClose, onSuccess }) {
  const [name, setName] = useState(data.name);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await editItem(data._id, {
        name: name,
      });
      onSuccess();
    } catch (error) {
      setErrorMessage("Failed edit");
    }
  };

  return (
    <EditFormLayout
      title="Edit Delivery Zone"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Name"
        required
      />
      <ErrorMessage message={errorMessage} />
    </EditFormLayout>
  );
}

export default EditDeliveryZone;
