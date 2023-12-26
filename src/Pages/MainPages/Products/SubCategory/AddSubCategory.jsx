import { useState,useEffect } from "react";
import { addItem } from "./subCategoryService";
import ImageUploader from "../../../../Components/common/ImageUploader";
import AddFormLayout from "../../../../Components/common/AddFormLayout";
import TextField from "../../../../Components/common/TextField";
import PrecedenceField from "../../../../Components/common/PrecedenceField";
import NumberInputField from "../../../../Components/common/NumberInputField";
import ToggleSwitch from "../../../../Components/common/ToggleSwitch";
import { getItems as getAllCategory } from "../Category/categoryService";
import ProductDropDown from "../../../../Components/common/ProductDropDown";
function AddSubCategory({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [precedence, setPrecedence] = useState("");
  const [sqlId, setSqlId] = useState("");
  const [productCount, setProductCount] = useState("");
  const [level, setLevel] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSeletedCategory] = useState("");
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

  useEffect(() => {
    const fetchDropDowns = async () => {
      try {
        const data = await getAllCategory();

        setCategory(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchDropDowns();
  }, []);

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
        isActive: isActive ? true : "false",
        selectedCategory
      }
      await addItem(formData);

      onSuccess();
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };
  const handleChange = (selected) => {
    setSeletedCategory(selected);
  };
  return (
    <AddFormLayout
      title="Add Category"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <TextField
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Name"
        required
      />
      <ProductDropDown
        label="Category"
        options={category}
        value={selectedCategory}
        onChange={handleChange}
        required
      />

      <ImageUploader
        imagePreview={imagePreview}
        handleImageChange={handleImageChange}
      />

      <PrecedenceField value={precedence} onChange={setPrecedence} />
      <NumberInputField
        value={sqlId}
        onChange={setSqlId}
        label={"SQL Id"}
        placeholder={"SQL Id"}
      />
      <NumberInputField
        value={productCount}
        onChange={setProductCount}
        label={"Product Count"}
        placeholder={"Product Count"}
      />
      <NumberInputField
        value={level}
        onChange={setLevel}
        label={"Level"}
        placeholder={"Level"}
      />
      <ToggleSwitch
       id="visibility"
        label="Status"
        checked={isActive}
        onChange={() => setIsActive(!isActive)}
      />
    </AddFormLayout>
  );
}

export default AddSubCategory;

