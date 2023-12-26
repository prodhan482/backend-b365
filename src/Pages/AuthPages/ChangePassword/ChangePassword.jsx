import React, { useState ,useContext} from "react";
import ChangePassworView from "./ChangePasswordView";
import ConfirmModal from "./ConfirmModal";
import { updateNewPassword } from "./changePasswordService";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../Context/AppContext";

function ChangePassword() {
  const [message, setMessage] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logout } = useContext(AppContext);
  let navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (confirmPassword === newPassword) {
      try {
        const { ok, data } = await updateNewPassword(oldPassword, newPassword);

        if (ok) {
          setIsModalOpen(true);
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        setMessage("Login failed. Please try again later.");
      }
    } else {
      setMessage("Password not matched");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);

  };

  const handleChangePass = async () => {
    await logout()
    closeModal();
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <ChangePassworView
        oldPassword={oldPassword}
        setOldPassword={setOldPassword}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        message={message}
        setMessage={setMessage}
        handleSignIn={handleSignIn}
      />
      {isModalOpen && <ConfirmModal onClose={closeModal} handleChangePass={handleChangePass} />}
    </div>
  );
}

export default ChangePassword;