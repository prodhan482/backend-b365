import axios from "axios"
import { EMPLOYEE_API } from "../../../Utils/Api"

export async function forgetEmail(email) {

  try {

    const response = await axios.post(`${EMPLOYEE_API}/forgotEmployeePassword`, { email })
    return { status:response.status, ok: response.status === 200, data: response.data }

  } catch (error) {
    throw error

  }
}