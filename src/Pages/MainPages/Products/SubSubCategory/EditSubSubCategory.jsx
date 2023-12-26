import React, { useState, useEffect } from "react";
import { editItem } from "./subSubCategoryService";
import EditFormLayout from "../../../../Components/common/EditFormLayout";
import ProductDropDown from "../../../../Components/common/ProductDropDown";
import TextField from "../../../../Components/common/TextField";
import ImageUploader from "../../../../Components/common/ImageUploader";
import PrecedenceField from "../../../../Components/common/PrecedenceField";
import NumberInputField from "../../../../Components/common/NumberInputField";
import ToggleSwitch from "../../../../Components/common/ToggleSwitch";
import { getItems as getAllSubCategory } from "../SubCategory/subCategoryService";
import { IMAGE_URL } from "../../../../Utils/Api";

function EditSubSubCategory({ items, onClose, onSuccess }) {
  const [name, setName] = useState(items.name);
  const [image, setImage] = useState(null);
  const [precedence, setPrecedence] = useState(items.precedence);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchDropDowns = async () => {
      try {
        const subCategoryData = await getAllSubCategory();
        setSubCategories(subCategoryData);
        setSelectedSubCategory(items.subcategory); // Assuming subCategory is a field in your data
      } catch (error) {
        console.error("Error fetching subcategories:", error);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();

    try {
      const formData = {
        name,
        image,
        precedence,
        selectedSubCategory,
      };
   

      await editItem(items._id, formData);

      onSuccess();
    } catch (error) {
      console.error("Error editing subsubcategory:", error);
    }
  };

  const handleChange = (selected) => {
    setSelectedSubCategory(selected);
  };

  return (
    <EditFormLayout
      title="Edit Sub Sub Category"
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
        label="Sub Category"
        options={subCategories}
        value={selectedSubCategory}
        onChange={handleChange}
        required
      />

      <ImageUploader
        imagePreview={imagePreview}
        handleImageChange={handleImageChange}
      />

      <PrecedenceField value={precedence} onChange={setPrecedence} />
    </EditFormLayout>
  );
}

export default EditSubSubCategory;