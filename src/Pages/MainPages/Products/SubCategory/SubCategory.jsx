import { useEffect, useState } from "react";
import { getItems } from "./subCategoryService";
import SubCategoryView from "./SubCategoryView";
import AddSubCategory from "./AddSubCategory";
import DeleteSubCategory from "./DeleteSubCategory";
import EditSubCategory from "./EditSubCategory";
import ViewSubCategory from "./ViewSubCategory";


function SubCategory() {
    const [data, setData] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
        } catch (error) {
        }
      };
    return ( 
        <div className="relative h-full w-full">
        <div className="px-10 w-full flex justify-between my-12 ">
          <h1 className="text-xl font-bold text-[#313649]">All Subcategories ({data.length})</h1>
          <button onClick={() => setIsAddModalOpen(true)} className="  bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded ">Add Subcategory</button>
        </div>
        <div className=" flex justify-center items-center px-10">
        <div className="relative flex flex-col justify-center items-center w-full">
          <SubCategoryView
            data={data}
            onView={handleView}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
          </div>
        </div>
        {isAddModalOpen && (
          <AddSubCategory
            onClose={() => setIsAddModalOpen(false)}
            onSuccess={handleSuccess}
          />
        )}
            {isDeleteModalOpen && (
          <DeleteSubCategory
            item={selectedItem}
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteSuccess={handleSuccess}
          />
        )}
                {isEditModalOpen && (
          <EditSubCategory
            items={selectedItem}
            onClose={() => setIsEditModalOpen(false)}
            onSuccess={handleSuccess}
  
          />
          
        )}
           {isViewModalOpen && (
        <ViewSubCategory
          data={selectedItem}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}
        {/* {isAddModalOpen && (
          <AddSubCategory
            onClose={() => setIsAddModalOpen(false)}
            onSuccess={handleSuccess}
          />
        )}

    
        */}
      </div>
     );
}

export default SubCategory;