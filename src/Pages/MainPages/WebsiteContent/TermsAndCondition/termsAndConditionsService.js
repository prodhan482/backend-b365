import axios from "axios";
import { GENERALSETTINGS_API } from "../../../../Utils/Api"
import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  
export async function getItems() {
  const response = await axios.get(`${GENERALSETTINGS_API}/termsAndConditions`);
  return response.data;
}

export async function addItem(data) {
  const response = await axios.post(`${GENERALSETTINGS_API}/termsAndConditions`, data,{ headers });
  return response.data;
}

export async function deleteItem(id) {
  const response = await axios.delete(`${GENERALSETTINGS_API}/termsAndConditions/${id}`,{ headers });
  return response.data;
}

export async function editItem(id, data) {
  const response = await axios.patch(`${GENERALSETTINGS_API}/termsAndConditions/${id}`, data,{ headers });
  return response.data;
}

export async function getSingleItems(id) {
  const response = await axios.get(`${ GENERALSETTINGS_API }/termsAndConditions/getSingleTermsAndConditions/${id}`);
  return response.data;
}




// export async function addItem(data) {

//   const { requirementName,precedence, description } = data;

//   // Ensure you are sending the HTML content in the request body
//   const requestData = {
//     requirementName:requirementName,
//     precedence:precedence,
//     description: description, // You can adjust this based on your API requirements
//   };

//   const response = await axios.post(`${REQUIREMENTS_API}`, requestData, data)
//   return response.data
// }
