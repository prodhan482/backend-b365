import axios from "axios";
import { EMPLOYEE_API } from "../../../../Utils/Api";
import { getToken } from "../../../../Utils/auth";
const token = getToken()
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
};

export async function getItems() {
  const response = await axios.get(`${EMPLOYEE_API}`, { headers });
  return response.data;
}