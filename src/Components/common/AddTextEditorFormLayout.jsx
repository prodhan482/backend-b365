import React from 'react';
import Modal from './Modal';
import SubmitButton from './SubmitButton';

function AddTextEditorFormLayout({ title, onSubmit, children }) {
  return (
    <div className="flex justify-center items-center h-full w-full mt-2">
        <form onSubmit={onSubmit} className="w-4/6">
            {children}
            <div className="mt-5 w-full flex justify-end flex justify-center">
                <SubmitButton label="Submit" />
            </div>
        </form>         
    </div>    
  );
}

export default AddTextEditorFormLayout;