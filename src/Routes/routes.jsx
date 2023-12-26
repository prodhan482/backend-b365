import { Navigate, Route, Routes } from "react-router-dom";
import {useContext } from "react";
import Dashboard from "../Pages/MainPages/Dashboard/Dashboard";
import Forget from "../Pages/AuthPages/ForgotPassword/ForgotPassword";
import Requirement from "../Pages/MainPages/Requirements/Requirement";
import ResetEmployeePassword from "../Pages/AuthPages/ResetPasswordPage/ResetEmployeePassword";
import Employees from "../Pages/MainPages/Users/Employees/Employees";
import InviteEmployees from "../Pages/MainPages/Users/InviteEmployees/InviteEmployees";
import RegisterEmployee from "../Pages/AuthPages/RegisterEmployee/RegisterEmployee";
import ChangePassword from "../Pages/AuthPages/ChangePassword/ChangePassword";
import HomeSlider from "../Pages/MainPages/WebsiteContent/HomeSlider/HomeSlider";
import Login from "../Pages/AuthPages/Login/Login";
import Faq from "../Pages/MainPages/WebsiteContent/Faq/Faq";
import AppContext from "../Context/AppContext";
import SocialLink from "../Pages/MainPages/WebsiteContent/SocialLink/SocialLink";
import OfferCard from "../Pages/MainPages/WebsiteContent/OfferCard/OfferCard";
import AppSetting from "../Pages/MainPages/WebsiteContent/AppSetting/AppSetting";
import Brand from "../Pages/MainPages/Products/Brand/Brand";
import PlasticType from "../Pages/MainPages/Products/PlasticType/PlasticType";
import Product from "../Pages/MainPages/Products/Product/Product";
import AddProduct from "../Pages/MainPages/Products/Product/AddProduct";
import EditProduct from "../Pages/MainPages/Products/Product/EditProduct";
import Category from "../Pages/MainPages/Products/Category/Category";
import SubCategory from "../Pages/MainPages/Products/SubCategory/SubCategory";
import Area from "../Pages/MainPages/Address/Area/Area";
import Division from "../Pages/MainPages/Address/Division/Division";
import District from "../Pages/MainPages/Address/District/District";
import FeaturedCategory from "../Pages/MainPages/Products/FeaturedCategory/FeaturedCategory.jsx";
import SubSubCategory from "../Pages/MainPages/Products/SubSubCategory/SubSubCategory.jsx";
import DeliveryZone from "../Pages/MainPages/Order/DeliveryZone/DeliveryZone.jsx";
import DeliveryArea from "../Pages/MainPages/Order/DeliveryArea/DeliveryArea.jsx";
import OrderList from "../Pages/MainPages/Order/OrderList/OrderList.jsx";
import Customers from "../Pages/MainPages/Users/Customers/Customers.jsx";
import TermsAndCondition from "../Pages/MainPages/WebsiteContent/TermsAndCondition/TermsAndConditions.jsx";
import Package from "../Pages/MainPages/Order/Package/Package.jsx";
import PromoCode from "../Pages/MainPages/Order/PromoCode/PromoCode.jsx";
import PromoCodeType from "../Pages/MainPages/Order/PromoCodeType/PromoCodeType.jsx";
import HomeBanner from "../Pages/MainPages/WebsiteContent/HomeBanner/HomeBanner.jsx";
import PackageProduct from "../Pages/MainPages/Order/PackageProduct/PackageProduct.jsx"
import PromotionFAQ from "../Pages/MainPages/WebsiteContent/PromotionFAQ/PromotionFAQ.jsx";
import PaymentType from "../Pages/MainPages/Order/PaymentType/PaymentType.jsx";

function PageRoutes() {
  const {employee} = useContext(AppContext)
  return (
    <>
      <Routes>
        {/* auth routes */}
        <Route path="/login" element={!employee ? <Login /> : <Navigate to='/' />} />
        <Route path="/forgetpassword" element={!employee ? <Forget /> : <Navigate to='/' />} />
        <Route path="/resetEmployeePassword/:token" element={!employee ? <ResetEmployeePassword /> : <Navigate to='/' />} />
        <Route path="/register/:token" element={!employee ? <RegisterEmployee /> : <Navigate to='/' />} />

        {/* main routes */}
        <Route path="/" element={employee ? <Dashboard /> : <Navigate to='/login' />} />
        <Route path="/requirement" element={employee ? <Requirement /> : <Navigate to='/login'/>} />
        <Route path="/Employees" element={employee ? <Employees /> : <Navigate to='/login'/>} />
        <Route path="/InviteEmployees" element={employee ? <InviteEmployees /> : <Navigate to='/login'/>} />
        <Route path="/HomeSlider" element={employee ? <HomeSlider /> : <Navigate to='/login'/>} />
        <Route path="/ChangePassword" element={employee ? <ChangePassword /> : <Navigate to='/login'/>} />
        <Route path="/Faq" element={employee ? <Faq /> : <Navigate to='/login'/>} />
        <Route path="/SocialLink" element={employee ? <SocialLink /> : <Navigate to='/login'/>} />
        <Route path="/OfferCard" element={employee ? <OfferCard /> : <Navigate to='/login'/>} />
        <Route path="/AppSetting" element={employee ? <AppSetting /> : <Navigate to='/login'/>} />
        <Route path="/Brand" element={employee ? <Brand /> : <Navigate to='/login'/>} />
        <Route path="/PlasticType" element={employee ? <PlasticType /> : <Navigate to='/login'/>} />
        <Route path="/Products" element={employee ? <Product /> : <Navigate to='/login'/>} />
        <Route path="/AddProduct" element={employee ? <AddProduct /> : <Navigate to='/login'/>} />
        <Route path="/EditProduct/:id" element={employee ? <EditProduct /> : <Navigate to='/login'/>} />
        <Route path="/Category" element={employee ? <Category /> : <Navigate to='/login'/>} />
        <Route path="/SubCategory" element={employee ? <SubCategory /> : <Navigate to='/login'/>} />
        <Route path="/SubSubCategory" element={employee ? <SubSubCategory /> : <Navigate to='/login'/>} />
        <Route path="/FeaturedCategory" element={employee ? <FeaturedCategory /> : <Navigate to='/login'/>} />
        <Route path="/Division" element={employee ? <Division /> : <Navigate to='/login'/>} />
        <Route path="/District" element={employee ? <District /> : <Navigate to='/login'/>} />
        <Route path="/Area" element={employee ? <Area /> : <Navigate to='/login'/>} />
        <Route path="/DeliveryZone" element={employee ? <DeliveryZone /> : <Navigate to='/login'/>} />
        <Route path="/DeliveryArea" element={employee ? <DeliveryArea /> : <Navigate to='/login'/>} />
        <Route path="/OrderList" element={employee ? <OrderList /> : <Navigate to='/login'/>} />
        <Route path="/Customers" element={employee ? <Customers /> : <Navigate to='/login'/>} />
        <Route path="/TermsAndCondition" element={employee ? <TermsAndCondition /> : <Navigate to='/login'/>} />
        <Route path="/Package" element={employee ? <Package /> : <Navigate to='/login'/>} />
        <Route path="/PromoCode" element={employee ? <PromoCode /> : <Navigate to='/login'/>} />
        <Route path="/PromoCodeType" element={employee ? <PromoCodeType /> : <Navigate to='/login'/>} />
        <Route path="/HomeBanner" element={employee ? <HomeBanner /> : <Navigate to='/login'/>} />
        <Route path="/PackageProduct" element={employee ? <PackageProduct /> : <Navigate to='/login'/>} />
        <Route path="/PromotionFAQs" element={employee ? <PromotionFAQ /> : <Navigate to='/login'/>} />
        <Route path="/PaymentType" element={employee ? <PaymentType /> : <Navigate to='/login'/>} />
      </Routes>
    </>
  ); 
}

export default PageRoutes;
