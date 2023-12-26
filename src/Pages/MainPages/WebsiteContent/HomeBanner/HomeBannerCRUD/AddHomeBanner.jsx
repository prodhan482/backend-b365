import { useState } from "react"

import TextField from "../../../../../Components/common/TextField"
import NumberInputField from "../../../../../Components/common/NumberInputField"
import AddFormLayout from "../../../../../Components/common/AddFormLayout"
import ErrorMessage from "../../../../../Components/common/ErrorMessage"

import { addItem } from "../homeBannerService"
import PrecedenceField from "../../../../../Components/common/NumberInputField"
import ImageUploader from "../../../../../Components/common/ImageUploader"

function AddHomeBanner({ onClose, onSuccess }) {

  const [precedence, setPrecedence] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [errorMessage, setErrorMessage] = useState("")

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

      setErrorMessage("Failed edit")
    }

  }

  return (
    <AddFormLayout title="Add Banner" onSubmit={handleSubmit} onClose={onClose}>
      <ImageUploader
        imagePreview={imagePreview}
        handleImageChange={handleImageChange}
      />
      <PrecedenceField value={precedence} onChange={setPrecedence} />

      <ErrorMessage message={errorMessage} />
    </AddFormLayout>

  )
}

export default AddHomeBanner
