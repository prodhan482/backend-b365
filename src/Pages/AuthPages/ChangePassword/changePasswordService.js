import axios from "axios";
import { EMPLOYEE_API } from "../../../Utils/Api";
import {getToken} from "../../../Utils/auth"

// const employee = JSON.parse(localStorage.getItem("employee"))
// const token = employee.token
// let token = localStorage.getItem("authToken");
const token = getToken()
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};

export async function updateNewPassword(oldPassword, newPassword) {
  try {
    const response = await axios.patch(
      `${EMPLOYEE_API}/changeEmployeePassword`,
      { oldPassword, newPassword },
      { headers }
    );
    const data = response.data;

    return { ok: response.status >= 200 && response.status < 300, status: response.status, data };
  } catch (error) {

    throw error;
  }
};
