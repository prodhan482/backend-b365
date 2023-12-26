import { useState } from "react";
import { addItem } from "../PaymentTypeService"
import TextField from "../../../../../Components/common/TextField";
import AddFormLayout from "../../../../../Components/common/AddFormLayout";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function AddPaymentType({ onClose, onSuccess }) {
    const [name, setName] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
    
          onClose()
    
          await addItem({
            name: name,
          })
    
          onSuccess()
    
        } catch (error) {
    
          setErrorMessage("Add Failed")
    
        }
      }
    
      return (
    
        <AddFormLayout
          title="Add Payment Type"
          onSubmit={handleSubmit}
          onClose={onClose}
        >
    
          <TextField
            label="Payment Type"
            value={name}
            onChange={setName}
            placeholder="Payment Type"
            required
          />
    
          <ErrorMessage message={errorMessage} />
    
        </AddFormLayout>
    
      )
    }
export default AddPaymentType;



