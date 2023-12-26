import axios from "axios"
import { PROMOCODETYPE_API } from "../../../../Utils/Api"

import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

export async function getItems() {
  const response = await axios.get(`${PROMOCODETYPE_API}`)
  return response.data
}
export async function addItem(data) {
  const response = await axios.post(`${PROMOCODETYPE_API}`, data, { headers })
  return response.data
}
export async function editItem(id,data) {
    const response = await axios.patch(`${PROMOCODETYPE_API}/${id}`, data, { headers })
    return response.data
}
export async function deleteItem(id) {
    const response = await axios.delete(`${PROMOCODETYPE_API}/${id}`,{ headers });
    return response.data;
}
export async function getSingleItems(id) {
    const response = await axios.get(`${ PROMOCODETYPE_API}/getSinglePromoCodeType/${id}`, { headers });
    return response.data;
}
