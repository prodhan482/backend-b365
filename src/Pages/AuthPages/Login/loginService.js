import axios from "axios";
import { EMPLOYEE_API } from "../../../Utils/Api";

const headers = {
  'Content-Type': 'application/json',
};

export async function login(email, password) {
  try {
    const response = await axios.post(`${EMPLOYEE_API}/login`, {
      email,
      password,
    }, {
      headers,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    throw error;
  }
}
