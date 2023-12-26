import { useState,useEffect } from "react";
import { editItem } from "../districtService";
import TextField from "../../../../../Components/common/TextField";
import EditFormLayout from "../../../../../Components/common/EditFormLayout";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";
import ProductDropDown from "../../../../../Components/common/ProductDropDown";
import { getDivision } from "../../Area/areaService";

function EditDistrict({ data, onClose, onSuccess }) {
  const [name, setName] = useState(data.name);
  const [division, setDivision] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchDropDowns = async () => {
      try {
        const divisionData = await getDivision();
        setDivision(divisionData);
        setSelectedDivision(data.division);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDropDowns();
  }, [data.division]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await editItem(data._id, {
        name: name,
      });
      onSuccess();
      
    } catch (error) {
      setErrorMessage("Failed edit");
    }
  };

  const handleDivisionChange = (division) => {
    setSelectedDivision(division);
  };

  return (
    <EditFormLayout
      title="Edit District" onSubmit={handleSubmit} onClose={onClose}
    >
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Name"
        required
      />
      <ProductDropDown
        label="Division"
        options={division}
        value={selectedDivision}
        onChange={handleDivisionChange}
        required
      />
      <ErrorMessage message={errorMessage} />
    </EditFormLayout>
  );
}

export default EditDistrict;
