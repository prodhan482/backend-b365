import React, { useState, useEffect } from 'react';
import InviteEmployeeView from './InviteEmployeeView';
import SendInvite from './SendInviteModal';
import DeleteInvite from './DeleteInvite';
import { getItems } from './inviteEmployeeService';

function InviteEmployees() {
  const [items, setItems] = useState([]);
  const [selectedInvite, setSelectedInvite] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);

  const handleDelete = (props) => {
    setSelectedInvite(props);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteSuccess = async () => {
    try {
      const updatedItems = await getItems();
      setItems(updatedItems);
    } catch (error) {

    }
  };

  const handleSendSuccess = async () => {
    try {
      const updatedItems = await getItems();
      setItems(updatedItems);
    } catch (error) {

    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItems();
        setItems(response);
      } catch (error) {

      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full w-full">
      <div className="flex flex-col justify-center items-center px-10">
      <div className="w-full flex justify-between my-12">
        <h1 className="text-xl font-bold text-[#313649]">
          All Invites ({items.length})
        </h1>
        <button
          className="bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsSendModalOpen(true)}
        >
          Invite
        </button>
      </div>
        <InviteEmployeeView
          items={items}
          onSendInvite={() => setIsSendModalOpen(true)}
          onDelete={handleDelete}
        />
      </div>

      {isSendModalOpen && (
        <SendInvite
          onClose={() => setIsSendModalOpen(false)}
          onSendSuccess={handleSendSuccess}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteInvite
          requirement={selectedInvite}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleSendSuccess}
        />
      )}
    </div>
  );
}

export default InviteEmployees;
