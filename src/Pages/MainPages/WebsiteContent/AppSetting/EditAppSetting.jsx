import { useState, useEffect } from "react";
import { editItem } from "./appSettingService";
import { IMAGE_URL } from "../../../../Utils/Api";
import ImageUploader from "../../../../Components/common/ImageUploader";
import EditFormLayout from "../../../../Components/common/EditFormLayout";
import TextField from "../../../../Components/common/TextField";

function EditAppSetting({ items, onClose, onSuccess }) {
  const [name, setName] = useState(items.name);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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
    } catch (error) {}
  };

  return (
    <EditFormLayout
      title={"Edit App Setting"}
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
    </EditFormLayout>
  );
}

export default EditAppSetting;
