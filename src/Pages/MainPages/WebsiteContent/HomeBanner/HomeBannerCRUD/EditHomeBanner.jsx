import { useState,useEffect } from "react"

import PrecedenceField from "../../../../../Components/common/NumberInputField"
import ImageUploader from "../../../../../Components/common/ImageUploader"
import EditFormLayout from "../../../../../Components/common/EditFormLayout"
import { IMAGE_URL } from "../../../../../Utils/Api";

import ErrorMessage from "../../../../../Components/common/ErrorMessage"

import { editItem } from "../homeBannerService"


function EditHomeBanner({ homeBanner, onClose, onEditSuccess }) {

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [precedence, setPrecedence] = useState(homeBanner.precedence)

  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    if (homeBanner.image) {
      setImagePreview(`${IMAGE_URL}${homeBanner.image}`);
    }
  }, [homeBanner.image]);

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
        precedence,
      };
      await editItem(homeBanner._id, formData);
     
      onEditSuccess();
    } catch (error) {

      setErrorMessage("Failed edit")
  }

  }
  return (

    <EditFormLayout title={"Update Banner"} onClose={onClose} onSubmit={handleSubmit}>
          <ImageUploader
            imagePreview={imagePreview}
            handleImageChange={handleImageChange}
          />
          <PrecedenceField value={precedence} onChange={setPrecedence} />
  
          <ErrorMessage message={errorMessage} />

    </EditFormLayout>

  )
}

export default EditHomeBanner
