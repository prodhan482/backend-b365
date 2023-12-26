import axios from "axios";
import { PRODUCTSGROUP_API } from "../../../../Utils/Api"
import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  
export async function getItems() {
  const response = await axios.get(`${PRODUCTSGROUP_API}/plasticTypes`);
  return response.data;
}
export async function addItem(data) {
  const response = await axios.post(`${PRODUCTSGROUP_API}/plasticTypes`, data,{ headers });
  return response.data;
}

export async function editItem(id, data) {
  const response = await axios.patch(`${PRODUCTSGROUP_API}/plasticTypes/${id}`, data,{ headers });
  return response.data;
}

export async function deleteItem(id) {
  const response = await axios.delete(`${PRODUCTSGROUP_API}/plasticTypes/${id}`,{ headers });
  return response.data;
}
