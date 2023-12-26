import axios from "axios";
import { PRODUCTSGROUP_API } from "../../../../Utils/Api"
import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
  };
  
export async function getItems() {
  const response = await axios.get(`${PRODUCTSGROUP_API}/products`);
  return response.data;
}
  
export async function addItem(formData) {
  const formDataObj = new FormData();
  formDataObj.append("image", formData.image);
  formDataObj.append("name", formData.name);
  formDataObj.append("sku", formData.sku);
  formDataObj.append("price", formData.price);
  formDataObj.append("quantity", formData.qty);
  formDataObj.append("brand", formData.brand);
  // formDataObj.append("employee", formData.employee);
  formDataObj.append("category", formData.category);
  formDataObj.append("subcategory", formData.subcategory);
  formDataObj.append("subsubcategory", formData.subsubcategory);
  formDataObj.append("shortDescription", formData.shortDescription);
  formDataObj.append("description", formData.description);
  formDataObj.append("isVisible", formData.isVisible);
  formDataObj.append("isPlastic", formData.isPlastic);
  formDataObj.append("plasticType", formData.plasticType);
  formDataObj.append("weight", formData.weight);
  formDataObj.append("isDiscount", formData.isDiscount);
  formDataObj.append("discountType", formData.discountType);
  formDataObj.append("discountAmount", formData.discountAmount);
  
  const response = await axios.post(`${PRODUCTSGROUP_API}/products`, formDataObj, {
    headers,
  });

  return response.data;
}


export async function editItem(id, formData) {
  const formDataObj = new FormData();
  if (formData.image) {
    formDataObj.append('image', formData.image);
  }
  formDataObj.append("name", formData.name);
  formDataObj.append("sku", formData.sku);
  formDataObj.append("price", formData.price);
  formDataObj.append("quantity", formData.qty);
  formDataObj.append("brand", formData.brand);
  formDataObj.append("category", formData.category);
  formDataObj.append("subcategory", formData.subcategory);
  formDataObj.append("subsubcategory", formData.subsubcategory);
  formDataObj.append("shortDescription", formData.shortDescription);
  formDataObj.append("description", formData.description);
  formDataObj.append("isVisible", formData.isVisible);
  formDataObj.append("isPlastic", formData.isPlastic);
  formDataObj.append("plasticType", formData.plasticType);
  formDataObj.append("weight", formData.weight);
  formDataObj.append("isDiscount", formData.isDiscount);
  formDataObj.append("discountType", formData.discountType);
  formDataObj.append("discountAmount", formData.discountAmount);
  
  const response = await axios.patch(`${PRODUCTSGROUP_API}/products/${id}`, formDataObj,{ headers });
  return response.data;
}

export async function deleteItem(id) {
  const response = await axios.delete(`${PRODUCTSGROUP_API}/products/${id}`,{ headers });
  return response.data;
}

export async function getSingleItems(id) {
  const response = await axios.get(`${PRODUCTSGROUP_API}/products/getSingleProduct/${id}`);
  return response.data;
}