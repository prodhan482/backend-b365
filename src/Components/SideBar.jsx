import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import DropArrow from "./Icons/DropArrow";
import DashboardIcon from "../Components/Icons/DashboardIcon";
import RequirementIcon from "../Components/Icons/RequirementIcon";
import EmployeeIcon from "../Components/Icons/EmployeeIcon";
import CatalogIcon from "../Components/Icons/Catalog";
import AddressIcon from "./Icons/AddressIcon";
import OrderIcon from "../Components/Icons/OrderIcon"; 
import AppContext from "../Context/AppContext";

function SideBar() {
  const { employee } = useContext(AppContext);

  if (!employee) {
    return null;
  }

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isEmployeeDropdownOpen, setEmployeeDropdownOpen] = useState(false);
  const [isCatalogDropdownOpen, setCatalogDropdownOpen] = useState(false);
  const [isAddressDropdownOpen, setAddressDropdownOpen] = useState(false);
  const [isDropdownOpenGeneral, setDropdownOpenGeneral] = useState(false);
  const [isOrderDropdownOpen, setOrderDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownGeneral = () => {
    setDropdownOpenGeneral(!isDropdownOpenGeneral);
  };

  const toggleDropdownEmployee = () => {
    setEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  };

  const toggleCatalogDropdown = () => {
    setCatalogDropdownOpen(!isCatalogDropdownOpen);
  };

  const toggleAddressDropdown = () => {
    setAddressDropdownOpen(!isAddressDropdownOpen);
  };

  const toggleOrderDropdown = () => {
    setOrderDropdownOpen(!isOrderDropdownOpen);
  };

  return (
    <div className="sideBar bg-[#fffff] border-r-2 border-[#ECECEC] h-screen w-[250px] flex flex-col fixed left-0 z-50">
      <Link className="h-[78px] border-b-2 border-[#ECECEC]" to="#">
        <img className="ml-8 logo w-[150px] h-[68px]" src={Logo} alt="" />
      </Link>
      <div className="menu flex flex-col gap-4 ml-8 mt-6">
        <h1 className=" my-2 text-sm font-semibold text-[#313649]">MENU</h1>
        <NavLink to={"/"}>
          <h1 className=" flex items-center gap-2 text font-semibold text-[#313649]">
            <DashboardIcon className="h-5 w-5" />
            Dashboard
          </h1>
        </NavLink>
        <NavLink to={"/requirement"}>
          <h1 className="  flex items-center gap-2 text font-semibold text-[#313649]">
            <RequirementIcon className="-ml-1 h-6 w-6" />
            Requirement
          </h1>
        </NavLink>
        <div className="">
          <h1
            onClick={toggleDropdownEmployee}
            className="flex items-center gap-2 cursor-pointer font-semibold text-[#313649]"
          >
            <EmployeeIcon />
            Users <DropArrow className="mt-1 h-3 w-3" />
          </h1>
          {isEmployeeDropdownOpen && (
            <div className="mt-4 ml-4 flex flex-col gap-2">
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/Employees"
              >
                All Employee
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/InviteEmployees"
              >
                Invite Employee
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/Customers"
              >
                All Customer
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/ChangePassword"
              >
                Change Password
              </NavLink>
            </div>
          )}
        </div>
        <div className="">
          <h1
            onClick={toggleDropdownGeneral}
            className=" flex gap-2 cursor-pointer font-semibold text-[#313649]"
          >
            <RequirementIcon className="-ml-1 h-6 w-6" />
            Website Content
            <DropArrow className="mt-2 ml-1 h-3 w-3" />
          </h1>
          {isDropdownOpenGeneral && (
            <div className="ml-4 flex flex-col gap-2">
              <NavLink
                className="mt-4 text-sm font-semibold text-[#313649]"
                to={"/HomeSlider"}
              >
                Home Slider
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/HomeBanner"}
              >
                Home Banner
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/AppSetting"}
              >
                App Setting
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/OfferCard"}
              >
                Offer Card
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/Faq"}
              >
                FAQ
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/SocialLink"}
              >
                Social Link
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/TermsAndCondition"}
              >
                Terms And Condition
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/PromotionFAQs"}
              >
                Promotion FAQ
              </NavLink>
            </div>
          )}
        </div>
        <div className="">
          <h1
            onClick={toggleCatalogDropdown}
            className=" flex gap-2 cursor-pointer font-semibold text-[#313649]"
          >
            <CatalogIcon className="-ml-1 h-6 w-6" />
            Catalog
            <DropArrow className="mt-2 ml-1 h-3 w-3" />
          </h1>
          {isCatalogDropdownOpen && (
            <div className="ml-4 flex flex-col gap-2">
              <NavLink
                className="mt-4 text-sm font-semibold text-[#313649]"
                to={"/Products"}
              >
                Products
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/Category"}
              >
                Category
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/FeaturedCategory"}
              >
                Featured Category
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/SubCategory"}
              >
                Sub Category
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/SubSubCategory"}
              >
                Sub Sub Category
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/Brand"}
              >
                Brand
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to={"/PlasticType"}
              >
                Plastic Type
              </NavLink>
            </div>
          )}
        </div>
        <div className="">
          <h1
            onClick={toggleOrderDropdown}
            className="flex gap-2 cursor-pointer font-semibold text-[#313649]"
          >
            <OrderIcon className="-ml-1 h-6 w-6" />
            Orders <DropArrow className="mt-2 h-3 w-3" />
          </h1>
          {isOrderDropdownOpen && (
            <div className="mt-4 ml-4 flex flex-col gap-2">
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/OrderList"
              >
                Order List
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/Deliveryarea"
              >
                Delivery Area
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/DeliveryZone"
              >
                Completed Orders
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/Package"
              >
                Package
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/PackageProduct"
              >
                Package Product
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/PromoCode"
              >
                Promo Code
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/PromoCodeType"
              >
                Promo Code Type
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/PaymentType"
              >
                Payment Type
              </NavLink>
            </div>
          )}
        </div>
       
        <div className="">
          <h1
            onClick={toggleAddressDropdown}
            className="flex gap-2 cursor-pointer font-semibold text-[#313649]"
          >
            <AddressIcon className="-ml-1 h-6 w-6" />
            Address <DropArrow className="mt-2 h-3 w-3" />
          </h1>
          {isAddressDropdownOpen && (
            <div className="mt-4 ml-4 flex flex-col gap-2">
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/Division"
              >
                Division
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/District"
              >
                District
              </NavLink>
              <NavLink
                className="text-sm font-semibold text-[#313649]"
                to="/Area"
              >
                Area
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
