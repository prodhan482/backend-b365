import axios from "axios"
import { PACKAGEPRODUCT_API } from "../../../../Utils/Api"

import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

export async function getItems() {
  const response = await axios.get(`${PACKAGEPRODUCT_API}`)
  return response.data
}
export async function addItem(data) {
  // const response = await axios.post(`${PACKAGEPRODUCT_API}`, data, { headers })
  // return response.data

    const { productSku, promoPackage } = data;
  
    if (Array.isArray(productSku)) {
      const promises = productSku.map((sku) => {
        const itemData = {
          productSku: sku,
          promoPackage,
        };
        return axios.post(`${PACKAGEPRODUCT_API}`, itemData, { headers });
      });
  
      const response = await Promise.all(promises);
      return response.map((response) => response.data);
}

}
export async function editItem(id,data) {
    const response = await axios.patch(`${PACKAGEPRODUCT_API}/${id}`, data, { headers })
    return response.data
}
export async function deleteItem(id) {
    const response = await axios.delete(`${PACKAGEPRODUCT_API}/${id}`,{ headers });
    return response.data;
}
export async function getSingleItems(id) {
    const response = await axios.get(`${ PACKAGEPRODUCT_API}/getSinglePackageProduct/${id}`, { headers });
    return response.data;
}
