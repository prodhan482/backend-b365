import React, { createContext, useState } from "react";
import { login as loginService } from "../Pages/AuthPages/Login/loginService";

const AppContext = createContext({});

function AppContextProvider({ children }) {

  const [employee, setEmployee] = useState(JSON.parse(localStorage.getItem('employee')));
  const [isLoading, setIsLoading] = useState(false);
  
  async function login(email, password) {
    try {
      setIsLoading(true);
      const response = await loginService(email, password);
      if (response.status === 200) {
        setEmployee(response.data);
        localStorage.setItem('employee', JSON.stringify(response.data));
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      
    }
  }

  function logout() {
    setEmployee(null);
    localStorage.removeItem('employee');
  }

  return (
    <AppContext.Provider
      value={{
        login,
        logout,
        employee,
        setEmployee,
        isLoading,

      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider };
export default AppContext;

