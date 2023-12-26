import React from "react";
import FormLayout from "../../../Components/common/FormLayout";
import PasswordField from "../../../Components/common/PasswordField";
import SubmitButton from "../../../Components/common//SubmitButton"

function ResetPasswordPageView({
  onReset,
  message,
  newPassword,
  setNewPass,
  confirmPass,
  setConfirmPass,
}) {
  return (
    <FormLayout title="Set new password" onSubmit={onReset} message={message}>
      <PasswordField
        setPassword={setNewPass}
        label="New Password"
        placeholder="new password"
      />
      <PasswordField
        setPassword={setConfirmPass}
        label="Confirm Password"
        placeholder="confirm password"
      />
      <div className="flex items-center justify-center">
        <SubmitButton label="Change"/>
      </div>
    </FormLayout>
  );
}

export default ResetPasswordPageView;
