import React from "react";
import Cross from "../../../Components/Icons/Cross";

function ConfirmModal({ onClose, handleChangePass }) {
  return (
    <div className="flex flex-col justify-center items-center fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative bg-white p-8 w-2/6">
        <Cross className="absolute top-4 right-4 h-5 w-5" onClick={onClose} />
        <h1 className="text-center">Successfully password changed </h1>
        <div className="flex justify-center gap-4 my-4">
          <button
            type="button"
            onClick={handleChangePass}
            className="bg-gray-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;

