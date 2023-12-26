import { useState, useEffect } from "react";
import { editItem } from "./offerCardService";
import { IMAGE_URL } from "../../../../Utils/Api";
import ImageUploader from "../../../../Components/common/ImageUploader";
import EditFormLayout from "../../../../Components/common/EditFormLayout";
import TextField from "../../../../Components/common/TextField";

function EditOfferCard({ items, onClose, onSuccess }) {
  const [link, setLink] = useState(items.link);
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
        link,
      };
      await editItem(items._id, formData);
      
      onSuccess();
    } catch (error) {}
  };

  return (
    <EditFormLayout
      title={"Update Offer Card"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <ImageUploader
        imagePreview={imagePreview}
        handleImageChange={handleImageChange}
      />
      <TextField
        label="Link"
        value={link}
        onChange={setLink}
        placeholder="Link"
        required
      />
    </EditFormLayout>
  );
}

export default EditOfferCard;
