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
  const response = await axios.get(`${PRODUCTSGROUP_API}/subsubcategories`)
  return response.data
}

export async function addItem(formData) {
  const formDataObj = new FormData();
  formDataObj.append('image', formData.image);
  formDataObj.append('name', formData.name);
  formDataObj.append('precedence', formData.precedence);
  formDataObj.append('subcategory', formData.selectedCategory);
  const response = await axios.post(`${PRODUCTSGROUP_API}/subsubcategories`, formDataObj, { headers })
  return response.data
}
export async function editItem(id, data) {
  const formDataObj = new FormData();

  if (data.image) {
    formDataObj.append('image', data.image);
  }
  formDataObj.append('name', data.name);
  formDataObj.append('precedence', data.precedence);
  formDataObj.append('subcategory', data.selectedSubCategory);

  const response = await axios.patch(`${PRODUCTSGROUP_API}/subsubcategories/${id}`, formDataObj, { headers });

  return response.data;
}
export async function deleteItem(id) {
  const response = await axios.delete(`${PRODUCTSGROUP_API}/subsubcategories/${id}`, { headers })
  return response.data
}