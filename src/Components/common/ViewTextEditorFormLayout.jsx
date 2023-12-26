import React from 'react';
import Modal from './Modal';
import SubmitButton from './SubmitButton';

function ViewTextEditorFormLayout({ onSubmit, children }) {
  return (
    // <Modal title={title} onClose={onClose}>
    //   <form onSubmit={onSubmit} className="w-full">
    //     {children}
    //     <div className="mt-5 w-full flex justify-end">
    //       <SubmitButton label="Submit" />
    //     </div>
    //   </form>
    // </Modal>

    <div className="flex justify-center items-center h-full w-full mt-2">
              <form onSubmit={onSubmit} className="w-4/6">
                  {children}
                  <div className="mt-5 w-full flex justify-end flex justify-center">
                      <SubmitButton label="Edit" />
                  </div>
              </form>
    </div>
  );
}
export default ViewTextEditorFormLayout;