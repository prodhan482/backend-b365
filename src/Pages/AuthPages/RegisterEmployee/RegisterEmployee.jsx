import React, { useEffect, useState } from "react";
import RegisterEmployeeView from "./RegisterEmployeeView";
import { useParams } from "react-router-dom";
import { getEmail, registerEmployee } from "./registerEmployeeService";

function RegisterEmployee() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { token } = useParams();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: username,
        email,
        password,
        image: selectedImage,
      };
      await registerEmployee(formData, token);

      navigate("/login");
    } catch (error) {
      setMessage("Login failed. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmail(token);
        setEmail(response.email);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <RegisterEmployeeView
        message={message}
        setMessage={setMessage}
        email={email}
        setEmail={email}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        selectedImage={selectedImage}
        imagePreview={imagePreview}
        handleImageChange={handleImageChange}
        handleSignIn={handleSignIn}
      />
    </div>
  );
}

export default RegisterEmployee;
