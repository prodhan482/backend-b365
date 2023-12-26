import { useState } from "react";
import { addItem } from "../brandService";
import ImageUploader from "../../../../../Components/common/ImageUploader";
import AddFormLayout from "../../../../../Components/common/AddFormLayout";
import TextField from "../../../../../Components/common/TextField";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function AddBrand({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      const formData = {
        image,
        name,
      };
      await addItem(formData);
      
      onSuccess();
    } catch (error) {
      setErrorMessage("Add Failed");
    }
  };

  return (
    <AddFormLayout title="Add Brand" onSubmit={handleSubmit} onClose={onClose}>
      <ImageUploader
        imagePreview={imagePreview}
        handleImageChange={handleImageChange}
      />
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

export default AddBrand;
