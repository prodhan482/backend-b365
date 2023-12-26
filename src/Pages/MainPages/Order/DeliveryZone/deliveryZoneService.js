import axios from "axios";
import { DELIVERYGROUP_API } from "../../../../Utils/Api"
import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  
export async function getItems() {
  const response = await axios.get(`${DELIVERYGROUP_API}/deliveryZones`);
  return response.data;
}
export async function addItem(data) {
  const response = await axios.post(`${DELIVERYGROUP_API}/deliveryZones`, data,{ headers });
  return response.data;
}

export async function editItem(id, data) {
  const response = await axios.patch(`${DELIVERYGROUP_API}/deliveryZones/${id}`, data,{ headers });
  return response.data;
}

export async function deleteItem(id) {
  const response = await axios.delete(`${DELIVERYGROUP_API}/deliveryZones/${id}`,{ headers });
  return response.data;
}

// export async function getSingleItems(id) {
//   const response = await axios.get(`${DELIVERYGROUP_API}/deliveryZones/getSingleDeliveryZone/${id}`);
//   return response.data;
// }
