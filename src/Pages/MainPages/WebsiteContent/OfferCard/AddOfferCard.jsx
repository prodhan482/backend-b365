import { useState } from "react";
import { addItem } from "./offerCardService";
import ImageUploader from "../../../../Components/common/ImageUploader";
import AddFormLayout from "../../../../Components/common/AddFormLayout";
import TextField from "../../../../Components/common/TextField";

function AddOfferCard({ onClose, onSuccess }) {
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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
        link,
      };
      await addItem(formData);
      
      onSuccess();
    } catch (error) {
      // Handle error
      console.log(error)
    }
  };

  return (
    <AddFormLayout title="Add Offer" onSubmit={handleSubmit} onClose={onClose}>
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
    </AddFormLayout>
  );
}

export default AddOfferCard;
