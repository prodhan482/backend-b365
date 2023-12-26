import React, { useState, useContext } from "react";
import DropArrow from "./Icons/DropArrow"
import { useNavigate } from "react-router-dom";
import SignOut from "./Icons/SignOut"
import AppContext from "../Context/AppContext";

function DropDown() {
  let navigate = useNavigate();
  const {logout} = useContext(AppContext)
  
  const handleLogOut = () => {
    logout()
    navigate("/login")
  }

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (<div className="navDropdown " onClick={toggleDropdown}>
    <DropArrow className="h-5 w-5" onClick={toggleDropdown} />
    {isDropdownOpen && (
      <div className="absolute z-10 top-12 right-0 bg-[#D9D9D9] h-[8rem] w-[8rem] flex justify-center items-center rounded ">
        <button onClick={handleLogOut} className="flex bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded"><SignOut />Logout</button>
      </div>
    )}
  </div>);
}

export default DropDown;