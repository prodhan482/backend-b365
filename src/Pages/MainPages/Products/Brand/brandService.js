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
  const response = await axios.get(`${PRODUCTSGROUP_API}/brands`)
  return response.data
}

export async function addItem(formData) {
  const formDataObj = new FormData();
  formDataObj.append('image', formData.image);
  formDataObj.append('name', formData.name);
  const response = await axios.post(`${PRODUCTSGROUP_API}/brands`, formDataObj, { headers })
  return response.data
}
export async function editItem(id, data) {
  const formDataObj = new FormData();

  if (data.image) {
    formDataObj.append('image', data.image);
  }

  formDataObj.append('name', data.name);

  const response = await axios.patch(`${PRODUCTSGROUP_API}/brands/${id}`, formDataObj, { headers });

  return response.data;
}
export async function deleteItem(id) {
  const response = await axios.delete(`${PRODUCTSGROUP_API}/brands/${id}`, { headers })
  return response.data
}