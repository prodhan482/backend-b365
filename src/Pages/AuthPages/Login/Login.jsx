import React, { useState, useContext } from "react";
import LoginView from "./LoginView";
import AppContext from "../../../Context/AppContext";

function Login() {
  const { login } = useContext(AppContext);

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if (response.status === 200) {
        navigate("/");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Login failed. Please try again later.");
    }
  }

  return (
      <LoginView
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
        message={message}
      />
  );
}

export default Login;
