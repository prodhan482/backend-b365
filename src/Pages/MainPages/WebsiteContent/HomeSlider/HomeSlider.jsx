import HomeSliderView from "./HomeSliderView";
import { getItems } from "./homeSliderService";
import { useEffect, useState } from "react";
import AddSlider from "./AddSlider"
import DeleteSlider from "./DeleteSlider";
import EditHomeSlider from "./EditHomeSlider";

function HomeSlider() {
  const [items, setItems] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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

  const handleDelete = (deleteItem) => {
    setSelectedItem(deleteItem);
    setIsDeleteModalOpen(true);
  };

  const handleEdit = (items) => {
    setSelectedItem(items);
    setIsEditModalOpen(true);
  };


  const handleSuccess = async () => {
    try {
      const updatedItems = await getItems();
      setItems(updatedItems);
      setIsAddModalOpen(false);
    } catch (error) {
    }
  };
  return (
    <div className="relative h-full w-full">
      <div className="px-10 w-full flex justify-between my-12 ">
        <h1 className="text-xl font-bold text-[#313649]">All Sliders ({items.length})</h1>
        <button onClick={() => setIsAddModalOpen(true)} className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded ">Add Slider</button>
      </div>
      <div className=" flex justify-center items-center px-10">
      <div className="relative flex flex-col justify-center items-center w-full">
        <HomeSliderView
          data={items}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
    </div>
      </div>
      {isAddModalOpen && (
        <AddSlider
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={handleSuccess}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteSlider
          item={selectedItem}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleSuccess}
        />
      )}
      {isEditModalOpen && (
        <EditHomeSlider
          items={selectedItem}
          onClose={() => setIsEditModalOpen(false)}
          onSuccess={handleSuccess}

        />
      )}
    </div>
  );
}

export default HomeSlider;