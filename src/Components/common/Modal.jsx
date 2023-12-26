import { useEffect, useRef } from 'react';

import Cross from '../Icons/Cross';

function Modal({ title, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-[99]">
      <div ref={modalRef} className="relative mt-8 w-2/6 bg-white p-8 rounded flex flex-col justify-center items-center">
        <div className="w-full">
          <h1 className="text-2xl my-6 font-bold">{title}</h1>
          <hr className="mb-4 border-1" />
        </div>
        {children}
        <Cross className="cross" onClick={onClose} />
      </div>
    </div>
  );
}

export default Modal;
