import React from 'react';
import SubmitButton from './SubmitButton';
import Cross from '../Icons/Cross';
import Modal from './Modal';

function EditFormLayout({ title, onSubmit, onClose, children }) {
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

export default EditFormLayout;

