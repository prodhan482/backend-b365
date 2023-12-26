import { useState } from "react";
import { addItem } from "../promotionFAQService"
import TextField from "../../../../../Components/common/TextField";
import DescriptionField from "../../../../../Components/common/DescriptionField";
import AddFormLayout from "../../../../../Components/common/AddFormLayout";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function AddPromotionFAQ({ onClose, onSuccess }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
    
          onClose()
    
          await addItem({
            name: name,
            description: description,
          })
    
          onSuccess()
    
        } catch (error) {
    
          setErrorMessage("Add Failed")
    
        }
      }
    
      return (
    
        <AddFormLayout
          title="Add Promotion FAQ"
          onSubmit={handleSubmit}
          onClose={onClose}
        >
    
          <TextField
            label="Promotion Name"
            value={name}
            onChange={setName}
            placeholder="Promotion Name"
            required
          />
          <DescriptionField value={description} onChange={setDescription} />
    
          <ErrorMessage message={errorMessage} />
    
        </AddFormLayout>
    
      )
    }
export default AddPromotionFAQ;



