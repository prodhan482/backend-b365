import TextField from "../../../../Components/common/TextField";

import { addItem } from "./socialLinkService";
import { useState } from "react";
import AddFormLayout from "../../../../Components/common/AddFormLayout";
import ToggleSwitch from "../../../../Components/common/ToggleSwitch";


function AddSocialLinkView({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [visibility, setVisibility] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await addItem({
        name: name,
        link: link,
        visibility: visibility ? true : "false",
      });
      
      onSuccess();
    } catch (error) {
    console.log(error)
    }
  };
  return (
    <AddFormLayout title="Add Social" onSubmit={handleSubmit} onClose={onClose}>
      <TextField
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Name"
        required
      />
      <TextField
        label="Link"
        value={link}
        onChange={setLink}
        placeholder="Link"
        required
      />
      <ToggleSwitch
        id="visibility"
        label="Visibility"
        checked={visibility}
        onChange={() => setVisibility(!visibility)}
      />
    </AddFormLayout>
  );
}

export default AddSocialLinkView;
