import { useState } from "react";
import { editItem } from "./socialLinkService";
import TextField from "../../../../Components/common/TextField";
import EditFormLayout from "../../../../Components/common/EditFormLayout";
import ToggleSwitch from "../../../../Components/common/ToggleSwitch";

function EditSocialLink({ data, onClose, onEditSuccess }) {
  const [name, setName] = useState(data.name);
  const [link, setLink] = useState(data.link);
  const [visibility, setVisibility] = useState(data.visibility);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await editItem(data._id, {
        name: name,
        link: link,
        visibility: visibility ? true : "false",
      });

      onEditSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EditFormLayout
      title="Edit Social Link"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <TextField
        label="Name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Name"
        required
      />
      <TextField
        label="Link"
        value={link}
        onChange={(value) => setLink(value)}
        placeholder="Link"
        required
      />
      <ToggleSwitch
        id="visibility"
        label="Visibility"
        checked={visibility}
        onChange={() => setVisibility(!visibility)}
      />
    </EditFormLayout>
  );
}

export default EditSocialLink;
