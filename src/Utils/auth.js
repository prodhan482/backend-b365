export function getToken() {
    const employeeData = JSON.parse(localStorage.getItem("employee"));
    return employeeData ? employeeData.token : null;
  }