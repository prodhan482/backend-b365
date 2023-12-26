import Logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";
import FormLayout from "../../../Components/common/FormLayout";
import EmailField from "../../../Components/common/EmailField";
import PasswordField from "../../../Components/common/PasswordField";
import SubmitButton from "../../../Components/common/SubmitButton";

function LoginView({ setEmail, setPassword, handleSignIn, message }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
    <FormLayout onSubmit={handleSignIn} message={message}>
      <div className="flex flex-col items-center mb-10">
        <img className="logo w-[150px] h-[68px]" src={Logo} alt="" />
        <h1 className="font-normal text-xl">Admin Login</h1>
      </div>
      <EmailField setEmail={setEmail} />
      <PasswordField setPassword={setPassword} label={'Password'} />
      <div className="flex items-center justify-between">
        <SubmitButton label="Sign In" />
        <Link className="inline-block align-baseline font-bold text-sm text-[#10823A] hover:text-gray-500" to="/forgetpassword">
          Forgot Password?
        </Link>
      </div>
    </FormLayout>
    </div>
  )
}

export default LoginView;
