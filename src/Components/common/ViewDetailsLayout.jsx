import Modal from './Modal'

function ViewDetailsLayout({ children, label, onClose }) {

  return (

    <Modal title={label} onClose={onClose}>
      {children}
      <div className="w-full mt-4 flex justify-center items-center">
        <button className="bg-red-600 w-16 h-8 rounded text-white" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
    
  )
}

export default ViewDetailsLayout