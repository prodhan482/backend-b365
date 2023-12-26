import FormLayout from "../../../Components/common/FormLayout";
import EmailField from "../../../Components/common/EmailField";
import PasswordField from "../../../Components/common/PasswordField";
import SubmitButton from "../../../Components/common/SubmitButton";
import ImageUploader from "../../../Components/common/ImageUploader";

function RegisterEmployeeView({
  message,
  setUsername,
  setPassword,
  handleImageChange,
  handleSignIn,
  setEmail,
  email,
  selectedImage,
  imagePreview
}) {

  return (
    <FormLayout title="Admin Signup" onSubmit={handleSignIn} message={message}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      {/* <EmailField setEmail={setEmail} /> */}
      {/* <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          Profile Image
        </label>
        <input
          onChange={handleImageChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="image"
          type="file"
          accept="image/*"
        />
      </div> */}
            <ImageUploader
        imagePreview={imagePreview}
        handleImageChange={handleImageChange}
      />
      <PasswordField setPassword={setPassword} label={'Set Password'}/>
      <div className="flex items-center justify-end">
        <SubmitButton label="Signup" />
      </div>
      <h1 className="text-black">{message}</h1>
    </FormLayout>
  );
}

export default RegisterEmployeeView;