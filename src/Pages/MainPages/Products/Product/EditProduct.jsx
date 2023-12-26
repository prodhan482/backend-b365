import React, { useState, useEffect } from "react";
import TextField from "../../../../Components/common/TextField";
import NumberInputField from "../../../../Components/common/NumberInputField";
import ImageUploader from "../../../../Components/common/ImageUploader";
import DescriptionField from "../../../../Components/common/DescriptionField";
import { editItem, getSingleItems } from "./productService";
import { getItems as getBrands } from "../../Products/Brand/brandService";
import { getItems as getCategory } from "../../Products/Category/categoryService";
import { getItems as getPlasticTypes } from "../../Products/PlasticType/plasticTypeService";
import { getItems as getSubCategory } from "../SubCategory/subCategoryService";
import { getItems as getSubSubCategory } from "../SubSubCategory/subSubCategoryService";
import ToggleSwitch from "../../../../Components/common/ToggleSwitch";
import { useNavigate, useParams } from "react-router-dom";
import ProductDropDown from "../../../../Components/common/ProductDropDown";
import { IMAGE_URL } from "../../../../Utils/Api";


function EditProduct() {
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    sku: "",
    price: "",
    qty: "",
    employee: "",
    subcategory: [],
    subsubcategory: [],
    shortDescription: "",
    description: "",
    visibility: Boolean,
    weight: "",
    brand: [],
    selectedBrand: "",
    categories: [],
    selectedCategory: "",
    plasticTypes: [],
    selectedPlasticType: "",
    isPlastic: Boolean,
    isDiscount: Boolean,
    discountType:"",
    discountAmount:"",
  });

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [employee, setEmployee] = useState("");
  const [subcategory, setSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState();
  const [subsubcategory, setSubSubCategory] = useState("");
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState();
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [weight, setWeight] = useState("");
  const [brand, setBrand] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [plasticTypes, setPlasticTypes] = useState([]);
  const [selectedPlasticType, setSelectedPlasticType] = useState("");
  const [isPlastic, setIsPlastic] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);
  const [discountType, setDiscountType] = useState("percentage")
  const [discountAmount, setDiscountAmount] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleItem = await getSingleItems(id);
        setData({
          ...data,
          ...singleItem,
          selectedBrand: singleItem.brand._id,
          selectedCategory: singleItem.category,
          selectedSubCategory: singleItem.subcategory,
          selectedSubSubCategory: singleItem.subsubcategory,
          selectedPlasticType: singleItem.plasticType,
        });
        setImagePreview(`${IMAGE_URL}${singleItem.image}`); 
        setName(singleItem.name);
        setSku(singleItem.sku);
        setPrice(singleItem.price);
        setQty(singleItem.quantity);
        setEmployee(singleItem.employee);
        setSubCategory(singleItem.subcategory);
        setSubSubCategory(singleItem.subsubcategory);
        setShortDescription(singleItem.shortDescription);
        setDescription(singleItem.description);
        setVisibility(singleItem.visibility);
        setWeight(singleItem.weight);
        setSelectedBrand(singleItem.brand._id);
        setSelectedCategory(singleItem.category._id);
        setIsPlastic(singleItem.isPlastic);
        setIsDiscount(singleItem.isDiscount);
        setDiscountType(singleItem.discountType);
        setDiscountAmount(singleItem.discountAmount);
        setSelectedPlasticType(singleItem.plasticType._id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    const fetchDropDowns = async () => {
      try {
        const brandData = await getBrands();
        const catData = await getCategory();
        const subCategoryData = await getSubCategory();
        const subSubCategoryData = await getSubSubCategory();
        const plasticTypeData = await getPlasticTypes();
        setPlasticTypes(plasticTypeData);
        setBrand(brandData);
        setCategories(catData);
        setSubCategory(subCategoryData);
        setSubSubCategory(subSubCategoryData);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
  
    fetchData();
    fetchDropDowns();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name,
        image,
        sku,
        price,
        qty,
        brand: selectedBrand,
        category: selectedCategory,
        subcategory:selectedSubCategory,
        subsubcategory:selectedSubSubCategory,
        shortDescription,
        description,
        isVisible: visibility ? true : "false",
        isPlastic: isPlastic ? true : "false",
        plasticType: selectedPlasticType,
        weight,
        isDiscount: isDiscount ? true : "false",
      //  discountType : discountType,
      //   discountAmount : discountAmount,
      };

      if (isDiscount) {
        formData.discountType = discountType;
        formData.discountAmount = discountAmount;
      }

      await editItem(id,formData);
      navigate("/products");
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

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

  return (
    <div className="w-full my-10 flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Name"
            value={name}
            onChange={setName}
            placeholder="Name"
            required
          />
          <ImageUploader
            imagePreview={imagePreview}
            handleImageChange={handleImageChange}
          />
          <NumberInputField
            label="SKU"
            value={sku}
            onChange={setSku}
            placeholder="SKU"
          />
          <NumberInputField
            label="Price"
            value={price}
            onChange={setPrice}
            placeholder="Price"
          />
          <NumberInputField
            label="Quantity"
            value={qty}
            onChange={setQty}
            placeholder="Quantity"
          />
          <ProductDropDown
            label="Brand"
            options={brand}
            value={selectedBrand}
            onChange={setSelectedBrand}
            required
          />
          <ProductDropDown
            label="Category"
            options={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            required
          />
          <TextField
            label="Sub Category"
            value={subcategory}
            onChange={setSubCategory}
            placeholder="Sub Category"
          />
          <TextField
            label="Sub Sub Category"
            value={subsubcategory}
            onChange={setSubSubCategory}
            placeholder="Sub Sub Category"
          />
          <DescriptionField
            label="Short Description"
            value={shortDescription}
            onChange={setShortDescription}
          />
          <DescriptionField
            label="Description"
            value={description}
            onChange={setDescription}
          />
          <ToggleSwitch
            id="visibilityToggle"
            label="Visibility"
            checked={visibility}
            onChange={() => setVisibility(!visibility)}
          />
          <ToggleSwitch
            id="isPlasticToggle"
            label="Is Plastic"
            checked={isPlastic}
            onChange={() => setIsPlastic(!isPlastic)}
          />
          <ProductDropDown
            label="Plastic Type"
            options={plasticTypes}
            value={selectedPlasticType}
            onChange={setSelectedPlasticType}
            required={isPlastic}
          />
          <NumberInputField
            label="Weight"
            value={weight}
            onChange={setWeight}
            placeholder="Weight"
          />
          <ToggleSwitch
            id="isDiscountToggle"
            label="Discount Status"
            checked={isDiscount}
            onChange={() => setIsDiscount(!isDiscount)}
          />
           {isDiscount && (
            <>
              <label htmlFor="discountType">Discount Type</label>
              <select
                id="discountType"
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
              >
                <option value="percentage">Percentage</option>
                <option value="fixedAmount">Fixed Amount</option>
              </select>
              <TextField
                label="Discount Amount"
                value={discountAmount}
                onChange={setDiscountAmount}
                placeholder="Discount Amount"
              />
            </>
          )}
           
          <div className=" mt-5">
            <button
              type="submit"
              className="bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
