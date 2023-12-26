import { useState } from 'react';
import { sendInvite } from './inviteEmployeeService';
import Cross from '../../../../Components/Icons/Cross';
import EmailField from "../../../../Components/common/EmailField"

function SendInvite({ onClose, onSendSuccess }) {
  const [inviteName, setInviteName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await sendInvite({
        email: inviteName,
      });

      onSendSuccess();
      
    } catch (error) {

    }
  };

  return (
    <div className="flex flex-col justify-center items-center fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-[99]">
      <form
        onSubmit={handleSubmit}
        className="mt-8 w-2/6 bg-white p-8 rounded relative "
      >
        <h1 className="text-2xl my-6 font-bold">Send Invite</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="InviteName"
          >
            Invite Name
          </label>
          <input
            value={inviteName}
            onChange={(e) => setInviteName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="InviteName"
            type="mail"
            placeholder="example@example.com"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
        <Cross className="absolute top-4 right-4  h-5 w-5" onClick={onClose} />
      </form>
    </div>
  );
}

export default SendInvite;