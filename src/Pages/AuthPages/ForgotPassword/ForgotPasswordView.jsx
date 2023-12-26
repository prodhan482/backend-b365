import FormLayout from "../../../Components/common/FormLayout";
import EmailField from "../../../Components/common/EmailField";
import SubmitButton from '../../../Components/common/SubmitButton'

function ForgotPasswordView({ handleSignIn, message, setEmail }) {
  return (
    <FormLayout title="Forget Password" onSubmit={handleSignIn} message={message}>
      <div className="flex flex-col items-center mb-10">
        <h1 className="font-normal text-xl">Forgot Password</h1>
      </div>
      <EmailField setEmail={setEmail} />
      <div className="flex items-center justify-center">
        <SubmitButton label={'Send mail'}/>
      </div>
    </FormLayout>
  );
}

export default ForgotPasswordView;

