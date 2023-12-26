// Navbar.jsx
import React, { useContext } from "react";
import Avater from "./Avater";
import DropDown from "./DropDown";
import Bell from "./Icons/Bell";
import AppContext from "../Context/AppContext";

function Navbar() {
  const { employee } = useContext(AppContext);

  if (!employee) {
    return null;
  }

  return (
    <nav className="w-full h-[78px] bg-white border-b-2 border-[#ECECEC] flex justify-between items-center  fixed top-0 z-50">
      <h1 className="text-md font-semibold pl-4">Good morning Administrator</h1>
      <div className="right-[18rem] flex absolute justify-center items-center gap-4">
        <Avater />
        <DropDown />
      </div>
    </nav>
  );
}

export default Navbar;
