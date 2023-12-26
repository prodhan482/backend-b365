import axios from 'axios';
import { PRODUCTSGROUP_API } from "../../../../Utils/Api";
import { getToken } from '../../../../Utils/auth';

const token = getToken()
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'multipart/form-data',
};

export async function getItems() {
  const response = await axios.get(`${PRODUCTSGROUP_API}/subcategories`)
  return response.data
}

export async function addItem(formData) {
  const formDataObj = new FormData();
  formDataObj.append('image', formData.image);
  formDataObj.append('name', formData.name);
  formDataObj.append('precedence', formData.precedence);
  formDataObj.append('sqlId', formData.sqlId);
  formDataObj.append('productCount', formData.productCount);
  formDataObj.append('level', formData.level);
  formDataObj.append('isActive', formData.isActive);
  formDataObj.append('category', formData.selectedCategory);
  const response = await axios.post(`${PRODUCTSGROUP_API}/subcategories`, formDataObj, { headers })
  return response.data
}
export async function editItem(id, data) {
  const formDataObj = new FormData();

  if (data.image) {
    formDataObj.append('image', data.image);
  }

  formDataObj.append('precedence', data.precedence);
  formDataObj.append('sqlId', data.sqlId);
  formDataObj.append('productCount', data.productCount);
  formDataObj.append('level', data.level);
  formDataObj.append('isActive', data.isActive);
  formDataObj.append('category', data.selectedCategory);
  formDataObj.append('name', data.name);

  const response = await axios.patch(`${PRODUCTSGROUP_API}/subcategories/${id}`, formDataObj, { headers });

  return response.data;
}
export async function deleteItem(id) {
  const response = await axios.delete(`${PRODUCTSGROUP_API}/subcategories/${id}`, { headers })
  return response.data
}