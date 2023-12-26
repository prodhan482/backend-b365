import axios from "axios"
import { REQUIREMENTS_API } from "../../../Utils/Api"

export async function getItems() {
  const response = await axios.get(`${REQUIREMENTS_API}`)
  return response.data
}
export async function addItem(data) {
  const response = await axios.post(`${REQUIREMENTS_API}`, data)
  return response.data
}

export async function editItem(id, data) {
  const response = await axios.patch(`${REQUIREMENTS_API}/${id}`, data)
  return response.data
}

export async function deleteItem(id) {
  const response = await axios.delete(`${REQUIREMENTS_API}/${id}`)
  return response.data
}