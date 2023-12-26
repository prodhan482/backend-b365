import { useState, useEffect } from "react";
import { editItem } from "./subCategoryService";
import EditFormLayout from "../../../../Components/common/EditFormLayout";
import ProductDropDown from "../../../../Components/common/ProductDropDown";
import TextField from "../../../../Components/common/TextField";
import ImageUploader from "../../../../Components/common/ImageUploader";
import PrecedenceField from "../../../../Components/common/PrecedenceField";
import NumberInputField from "../../../../Components/common/NumberInputField";
import ToggleSwitch from "../../../../Components/common/ToggleSwitch";
import { getItems as getAllCategory } from "../Category/categoryService";
import { IMAGE_URL } from "../../../../Utils/Api";
function EditSubCategory({ items, onClose, onSuccess }) {
  const [name, setName] = useState(items.name);
  const [image, setImage] = useState(null);
  const [precedence, setPrecedence] = useState(items.precedence);
  const [sqlId, setSqlId] = useState(items.sqlId);
  const [productCount, setProductCount] = useState(items.productCount);
  const [level, setLevel] = useState(items.level);
  const [isActive, setIsActive] = useState(items.isActive);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedCategory, setSeletedCategory] = useState("");
  const [category, setCategory] = useState([]);


  useEffect(() => {
    const fetchDropDowns = async () => {
      try {
        const categoryData = await getAllCategory();
        setCategory(categoryData);
        setSeletedCategory(items.category);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchDropDowns();
  }, []);
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

  console.log({     name,
    image,
    precedence,
    sqlId,
    productCount,
    level,
    selectedCategory,
    isActive: isActive ? true : false})

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();

    try {
      const formData = {
        name,
        image,
        precedence,
        sqlId,
        productCount,
        level,
        selectedCategory,
        isActive: isActive ? true : false,
      };

      await editItem(items._id, formData);

      onSuccess();
    } catch (error) {
      console.error("Error editing subcategory:", error);
    }
  };

  const handleChange = (selected) => {
    setSeletedCategory(selected);
  };

  return (
    <EditFormLayout
      title="Edit Subcategory"
      onClose={onClose}
      onSubmit={handleSubmit}
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
    </EditFormLayout>
  );
}

export default EditSubCategory;
