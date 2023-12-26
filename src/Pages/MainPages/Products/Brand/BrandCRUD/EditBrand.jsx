import { useState, useEffect } from "react";
import { editItem } from "../brandService";
import { IMAGE_URL } from "../../../../../Utils/Api";
import ImageUploader from "../../../../../Components/common/ImageUploader";
import EditFormLayout from "../../../../../Components/common/EditFormLayout";
import TextField from "../../../../../Components/common/TextField";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function EditBrand({ items, onClose, onSuccess }) {
  const [name, setName] = useState(items.name);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (items.image) {
      setImagePreview(`${IMAGE_URL}${items.image}`);
    }
  }, [items.image]);

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
        image: image || null,
        name,
      };
      await editItem(items._id, formData);

      onSuccess();
    } catch (error) {
      setErrorMessage("Failed edit");
    }
  };

  return (
    <EditFormLayout
      title={"Edit Brand"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <ImageUploader
        imagePreview={imagePreview}
        handleImageChange={handleImageChange}
      />
      <TextField
        label="Name"
        value={name}
        onChange={setName}
        placeholder="name"
        required
      />
       <ErrorMessage message={errorMessage} />
    </EditFormLayout>
  );
}

export default EditBrand;
