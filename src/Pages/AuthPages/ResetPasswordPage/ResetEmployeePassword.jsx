import React, { useEffect, useState } from "react";
import ResetPasswordPageView from "./ResetPasswordView";
import { useNavigate, useParams } from "react-router-dom";
import { updatePassword } from "./resetPasswordService";

function ResetEmployeePassword() {
  const [message, setMessage] = useState("");
  const [newPassword, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();

  const handleReset = async (e) => {
    e.preventDefault();
    if (confirmPass === newPassword) {
      try {
        const response = await updatePassword(token, newPassword);

        if (response.ok) {
          navigate('/login');
        } else {
          setMessage(response.data.message);
        }
      } catch (error) {
        setMessage("Reset failed. Please try again later.");
      }
    } else {
      setMessage("Password not matched");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <ResetPasswordPageView
        onReset={handleReset}
        message={message}
        newPassword={newPassword}
        setNewPass={setNewPass}
        confirmPass={confirmPass}
        setConfirmPass={setConfirmPass}
      />
    </div>
  );
}

export default ResetEmployeePassword;
