import SocialLinkView from "./SocialLinkView";
import { useState, useEffect } from "react";
import { getItems } from "./socialLinkService";
import AddSocialLinkView from "./AddSocialLinkView";
import DeleteSocialLink from "./DeleteSocialLink";
import ViewSocialLink from "./ViewSocialLink";
import EditSocialLink from "./EditSocialLink";
function SocialLink() {
  const [data, setData] = useState([]);
  const [selectedSocial, setSelectedSocial] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItems();
        setData(response);
      } catch (error) {}
    };
    fetchData();
  }, []);
  const handleView = (item) => {
    setSelectedSocial(item);
    setIsViewModalOpen(true);
  };

  const handleEdit = (item) => {
    setSelectedSocial(item);
    setIsEditModalOpen(true);
  };

  const handleDelete = (item) => {
    setSelectedSocial(item);
    setIsDeleteModalOpen(true);
  };

  const handleAddSuccess = async () => {
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
  
  const handleEditSuccess = async () => {
    try {
      const updatedItems = await getItems();
      setData(updatedItems);
      setIsEditModalOpen(false);
    } catch (error) {

    }
  };

  return (
    <div className="relative h-full w-full">
      <div className="flex justify-center items-center px-10">
        <div className="relative flex flex-col justify-center items-center w-full">
          <div className="w-full flex justify-between my-12">
            <h1 className="text-xl font-bold text-[#313649]">
              All Social ({data.length})
            </h1>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded "
            >
              Add Social
            </button>
          </div>
          <SocialLinkView
            data={data}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
      {isViewModalOpen && (
        <ViewSocialLink
          data={selectedSocial}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}
      {isAddModalOpen && (
        <AddSocialLinkView
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={handleAddSuccess}
        />
      )}
    {isDeleteModalOpen && (
        <DeleteSocialLink
          data={selectedSocial}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleDeleteSuccess}
        />
      )}
    {isEditModalOpen && (
        <EditSocialLink
          data={selectedSocial}
          onClose={() => setIsEditModalOpen(false)}
          onEditSuccess={handleEditSuccess}
        />
      )}
    </div>
  );
}

export default SocialLink;
