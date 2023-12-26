import FormLayout from '../../../Components/common/FormLayout';
import PasswordField from "../../../Components/common/PasswordField";
import SubmitButton from '../../../Components/common/SubmitButton';


function ChangePasswordPageView({
  setOldPassword,
  setNewPassword,
  setConfirmPassword,
  message,
  handleSignIn,
}) {
  return (
    <FormLayout title="Set New Password" onSubmit={handleSignIn} message={message}>
      <PasswordField setPassword={setOldPassword} label="Current Password" placeholder="Current Password" />
      <PasswordField setPassword={setNewPassword} label="New Password" placeholder="New Password" errorMessage={message} />
      <PasswordField setPassword={setConfirmPassword} label="Confirm Password" placeholder="Confirm Password" errorMessage={message} />
      <SubmitButton label={"Update Password"} />
    </FormLayout>
  );
}

export default ChangePasswordPageView;