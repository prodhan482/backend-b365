import React from 'react';
import Modal from './Modal';
import ErrorMessage from './ErrorMessage';

function DeleteConfirm({ onClose, title, id, handleDelete, errorMessage }) {
  return (
    <Modal title={title} onClose={onClose}>
      <h1 className="mt-1 text-semibold text-center">Are you sure you want to delete this?</h1>
      <div className="flex justify-center gap-4 my-4">
        <button
          onClick={() => handleDelete(id)}
          type="submit"
          className="bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
        <button
          onClick={onClose}
          className="bg-[#5CB85C] text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
        <ErrorMessage message={errorMessage}/>
      </div>
    </Modal>
  );
}

export default DeleteConfirm;
