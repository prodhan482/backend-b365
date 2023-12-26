import { EMPLOYEE_API } from "../../../Utils/Api";
const headers = {
  'Content-Type': 'application/json',
};

export async function updatePassword(token, newPassword) {
  try {
    const response = await fetch(`${EMPLOYEE_API}/resetEmployeePassword`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ token, newPassword }),
    });

    const data = await response.json();

    return { ok: response.ok, status: response.status, data };
  } catch (error) {
    throw error;
  }
};