import axios from "axios";
import { ADDRESS_API } from "../../../../Utils/Api"
import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  
export async function getItems() {
  const response = await axios.get(`${ADDRESS_API}/divisions`);
  return response.data;
}
export async function addItem(data) {
  const response = await axios.post(`${ADDRESS_API}/divisions`, data,{ headers });
  return response.data;
}

export async function editItem(id, data) {
  const response = await axios.patch(`${ADDRESS_API}/divisions/${id}`, data,{ headers });
  return response.data;
}

export async function deleteItem(id) {
  const response = await axios.delete(`${ADDRESS_API}/divisions/${id}`,{ headers });
  return response.data;
}
export async function getSingleDivision(id) {
    const response = await axios.get(`${PRODUCTSGROUP_API}/divisions/getSingleDivision/${id}`);
    return response.data;
  }