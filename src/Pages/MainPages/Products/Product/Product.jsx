import { useEffect, useState } from "react";
import { getItems } from "./productService";
import ProductView from "./ProductView";
import DeleteProduct from "./DeleteProduct";
import { useNavigate } from "react-router-dom";

function Product() {
  const [data, setData] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const navigate = useNavigate()
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
    setSelectedItem(item);
    setIsViewModalOpen(true);
  };

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
      setData(updatedItems);
      setIsAddModalOpen(false);
    } catch (error) {}
  };
  return (
    <div className="relative h-full w-full overflow-x-scroll">
      <div className="px-10 w-full flex justify-between my-12 ">
        <h1 className="text-xl font-bold text-[#313649]">
          All Product ({data.length})
        </h1>
        <button
          onClick={() => navigate("/AddProduct")}
          className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded "
        >
          Add Product
        </button>
      </div>
      <div className=" flex justify-center items-center px-10">
        <ProductView
          data={data}
          onView={handleView}
          onDelete={handleDelete}
          // onEdit={handleEdit}
        />
      </div>
      {isDeleteModalOpen && (
        <DeleteProduct
          data={selectedItem}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteSuccess={handleSuccess}
        />
      )}
      {/* {isAddModalOpen && (
        <AddProduct
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={handleSuccess}
        />
      )} */}
      {/* 
      {isEditModalOpen && (
        <EditPlasticType
          data={selectedItem}
          onClose={() => setIsEditModalOpen(false)}
          onEditSuccess={handleSuccess}
        />
      )}
    
      

 
         {isViewModalOpen && (
        <ViewBrand
          data={selectedItem}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}  */}
    </div>
  );
}

export default Product;
