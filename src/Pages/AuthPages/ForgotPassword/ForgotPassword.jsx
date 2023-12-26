import React, { useState } from "react";
import { forgetEmail } from "./forgotPasswordService";
import ForgotPasswordView from "./ForgotPasswordView";

function ForgetPassword() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { ok, data,status } = await forgetEmail(email);

      if (status==201) {
        setMessage("Please check your mail and verify your mail address.");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Email failed. Please try again later.");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <ForgotPasswordView 
        handleSignIn={handleSignIn}
        message={message}
        setMessage={setMessage} 
        setEmail={setEmail} 
      />
    </div>
  );
}

export default ForgetPassword;