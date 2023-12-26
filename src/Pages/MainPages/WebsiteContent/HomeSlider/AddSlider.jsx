import { useState } from "react";
import { addItem } from "./homeSliderService";
import PrecedenceField from "../../../../Components/common/PrecedenceField";
import ImageUploader from "../../../../Components/common/ImageUploader";
import AddFormLayout from "../../../../Components/common/AddFormLayout";

function AddSlider({ onClose, onSuccess }) {
  const [precedence, setPrecedence] = useState("");
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
        precedence,
      };
      await addItem(formData);
      
      onSuccess();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <AddFormLayout title="Add Slider" onSubmit={handleSubmit} onClose={onClose}>
      <ImageUploader
        imagePreview={imagePreview}
        handleImageChange={handleImageChange}
      />
      <PrecedenceField value={precedence} onChange={setPrecedence} />
    </AddFormLayout>
  );
}

export default AddSlider;
