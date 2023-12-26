import { useState,useEffect } from "react";
import { addItem } from "./featuredCategory";
import AddFormLayout from "../../../../Components/common/AddFormLayout";
import PrecedenceField from "../../../../Components/common/PrecedenceField";
import { getItems as getAllCategory } from "../Category/categoryService";
import ProductDropDown from "../../../../Components/common/ProductDropDown";
function AddFeaturedCategory({ onClose, onSuccess }) {
  const [precedence, setPrecedence] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSeletedCategory] = useState("");
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
      const data = {
        precedence,
        category:selectedCategory
      }
      await addItem(data);

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
      <ProductDropDown
        label="Category"
        options={category}
        value={selectedCategory}
        onChange={handleChange}
        required
      />
      <PrecedenceField value={precedence} onChange={setPrecedence} />
    </AddFormLayout>
  );
}

export default AddFeaturedCategory;
