import { useState } from "react";
import { addItem } from "../termsAndConditionsService"
import TextField from "../../../../../Components/common/TextField";
import DescriptionField from "../../../../../Components/common/DescriptionField";
import AddFormLayout from "../../../../../Components/common/AddFormLayout";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";
import TextEditorDescriptionField from "../../../../../Components/common/TextEditorDescriptionField";
import TextEditorFormLayout from "../../../../../Components/common/AddTextEditorFormLayout";

function AddTermsAndConditions({ onClose, onSuccess }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        onClose();
        try {
            await addItem({
                name: name,
                description: description,
            });

            onSuccess();
        } catch (error) {
            setErrorMessage("Add Failed");
        }
    };
    return (
        <TextEditorFormLayout title="Add Terms And Conditions" onSubmit={handleSubmit} onClose={onClose}>
            <TextField
                label="Name"
                value={name}
                onChange={setName}
                placeholder="Name"
                required
            />
            <TextEditorDescriptionField value={description} onChange={setDescription} />
            <ErrorMessage message={errorMessage} />
        </TextEditorFormLayout>
    );
}

export default AddTermsAndConditions;



