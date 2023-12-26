import { useState } from "react";
import { addItem } from "./categoryService";
import ImageUploader from "../../../../Components/common/ImageUploader";
import AddFormLayout from "../../../../Components/common/AddFormLayout";
import TextField from "../../../../Components/common/TextField";
import PrecedenceField from "../../../../Components/common/PrecedenceField";
import NumberInputField from "../../../../Components/common/NumberInputField";
import ToggleSwitch from "../../../../Components/common/ToggleSwitch";

function AddCategory({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [precedence, setPrecedence] = useState("");
  const [sqlId, setSqlId] = useState("");
  const [productCount, setProductCount] = useState("");
  const [level, setLevel] = useState("");
  const [isActive, setIsActive] = useState(false);
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
        name,
        precedence,
        sqlId,
        productCount,
        level,
        isActive

      };
      await addItem(formData);
      
      onSuccess();
    } catch (error) {
      // Handle error
      console.log(error)
    }
  };

  return (
    <AddFormLayout title="Add Category" onSubmit={handleSubmit} onClose={onClose}>
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
       <PrecedenceField value={precedence} onChange={setPrecedence} />
       <NumberInputField value={sqlId} onChange={setSqlId} label={"SQL Id"} placeholder={"SQL Id"}/>
       <NumberInputField value={productCount} onChange={setProductCount} label={"Product Count"} placeholder={"Product Count"}/>
       <NumberInputField value={level} onChange={setLevel} label={"Level"} placeholder={"Level"}/>
       <ToggleSwitch
        label="Status"
        checked={isActive}
        onChange={() => setIsActive(!isActive)}
      />
       
    </AddFormLayout>
  );
}

export default AddCategory;
