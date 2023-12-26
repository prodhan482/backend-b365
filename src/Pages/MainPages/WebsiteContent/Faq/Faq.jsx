import { useState, useEffect } from "react";
import FaqView from "./FaqView";
import { getItems } from "./faqService";
import { Link } from "react-router-dom";
import ViewFaq from "./ViewFaq";
import EditFaq from "./EditFaq";
import AddFaqView from "./AddFaqView";
import DeleteFaq from "./DeleteFaq";

function Faq() {
  const [data, setData] = useState([]);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItems();
        setData(response);
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  const handleView = (item) => {
    setSelectedFaq(item);
    setIsViewModalOpen(true);
  };

  const handleEdit = (item) => {
    setSelectedFaq(item);
    setIsEditModalOpen(true);
  };
  
  const handleDelete = (item) => {
    setSelectedFaq(item);
    setIsDeleteModalOpen(true);
  };

  const handleEditSuccess = async () => {
    try {
      const updatedItems = await getItems();
      setData(updatedItems);
      setIsEditModalOpen(false);
    } catch (error) {

    }
  };
  const handleDeleteSuccess = async () => {
    try {
      const updatedItems = await getItems();
      setData(updatedItems);
      setIsDeleteModalOpen(false);
    } catch (error) {

    }
  };
  const handleAddSuccess = async () => {
    try {
      const updatedItems = await getItems();
      setData(updatedItems);
      setIsEditModalOpen(false);
    } catch (error) {

    }
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".relative")) {
        setIsDeleteModalOpen(false)
        setIsViewModalOpen(false)
        setIsEditModalOpen(false)
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isDeleteModalOpen, isViewModalOpen, isEditModalOpen]);

  return (
    <div className="relative h-full w-full">
      <div className="flex justify-center items-center px-10">
        <div className="relative flex flex-col justify-center items-center w-full">
          <div className="w-full flex justify-between my-12">
            <h1 className="text-xl font-bold text-[#313649]">All FAQs ({data.length})</h1>
            <button onClick={() => setIsAddModalOpen(true)} className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded ">Add FAQ</button>
          </div>
          <FaqView 
            data={data}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
      {isViewModalOpen && (
        <ViewFaq
          faq={selectedFaq}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}
      {isAddModalOpen && (
        <AddFaqView
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={handleAddSuccess}
        />
      )}
      {isEditModalOpen && (
        <EditFaq
          data={selectedFaq}
          onClose={() => setIsEditModalOpen(false)}
          onEditSuccess={handleEditSuccess}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteFaq
          data={selectedFaq}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleDeleteSuccess}
        />
      )}
    </div>
  );
}

export default Faq;
