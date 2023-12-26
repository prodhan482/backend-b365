import axios from "axios";
import { CUSTOMERS_API } from "../../../../Utils/Api";
import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};

export async function getItems() {
  const response = await axios.get(`${CUSTOMERS_API}/getAllCustomers`, { headers });
  return response.data;
}

export async function getSingleItems(id) {
  const response = await axios.get(`${CUSTOMERS_API}/getSingleCustomer/${id}`, { headers });
  return response.data;
}

