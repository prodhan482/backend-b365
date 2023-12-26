import axios from 'axios';

import { GENERALSETTINGS_API } from "../../../../Utils/Api";

import { getToken } from '../../../../Utils/auth';

const token = getToken()
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'multipart/form-data',

};

export async function getItem() {
  const response = await axios.get(`${GENERALSETTINGS_API}/homeBanners`)
  return response.data
}

export async function addItem(formData) {
  const formDataObj = new FormData();
  formDataObj.append('image', formData.image);
  formDataObj.append('precedence', formData.precedence);
  const response = await axios.post(`${GENERALSETTINGS_API}/homeBanners`, formDataObj, { headers })
  return response.data
}
export async function editItem(id, data) {
  const formDataObj = new FormData();

  if (data.image) {
    formDataObj.append('image', data.image);
  }

  formDataObj.append('precedence', data.precedence);

  const response = await axios.patch(`${GENERALSETTINGS_API}/homeBanners/${id}`, formDataObj, { headers });

  return response.data;
}
export async function deleteItem(id) {
  const response = await axios.delete(`${GENERALSETTINGS_API}/homeBanners/${id}`, { headers })
  return response.data
}