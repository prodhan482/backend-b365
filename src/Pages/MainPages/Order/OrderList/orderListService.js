import axios from "axios";
import { ORDERS_API } from "../../../../Utils/Api";
import { getToken } from "../../../../Utils/auth";

const token = getToken()
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  export async function getItems() {
    const response = await axios.get( ORDERS_API , { headers } );
    return response.data;
  }

  export async function getSingleItems(id) {
    const response = await axios.get(`${ ORDERS_API }/getSingleOrder/${id}`, { headers });
    return response.data;
  }

