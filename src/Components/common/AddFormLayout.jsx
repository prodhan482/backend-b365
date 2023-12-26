import React from 'react';
import Modal from './Modal';
import SubmitButton from './SubmitButton';

function AddFormLayout({ title, onSubmit, onClose, children }) {
  return (
    <Modal title={title} onClose={onClose}>
      <form onSubmit={onSubmit} className="w-full">
        {children}
        <div className="mt-5 w-full flex justify-end">
          <SubmitButton label="Submit" />
        </div>
      </form>
    </Modal>
  );
}

export default AddFormLayout;