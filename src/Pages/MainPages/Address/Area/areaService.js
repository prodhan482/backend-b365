import axios from "axios";
import { ADDRESS_API } from "../../../../Utils/Api"
import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  
export async function getItems() {
  const response = await axios.get(`${ADDRESS_API}/areas`);
  return response.data;
}
export async function addItem(data) {
  const response = await axios.post(`${ADDRESS_API}/areas`, data,{ headers });
  return response.data;
}

export async function editItem(id, data) {
  const response = await axios.patch(`${ADDRESS_API}/areas/${id}`, data,{ headers });
  return response.data;
}

export async function deleteItem(id) {
  const response = await axios.delete(`${ADDRESS_API}/areas/${id}`,{ headers });
  return response.data;
}
export async function getAreasFromDistrict(id) {
  const response = await axios.get(`${ADDRESS_API}/areas/getAreasFromDistrict/${id}`);
  return response.data;
}
export async function getDivision() {
  const response = await axios.get(`${ADDRESS_API}/divisions`);
  return response.data;
}
export async function getDistrictsFromDivision(id) {
  const response = await axios.get(`${ADDRESS_API}/districts/getDistrictsFromDivision/${id}`);
  return response.data;
}
export async function getDivisionFromDistrict(id) {
  const response = await axios.get(`${ADDRESS_API}/divisions/getDivisionFromDistrict/${id}`);
  return response.data;
}
