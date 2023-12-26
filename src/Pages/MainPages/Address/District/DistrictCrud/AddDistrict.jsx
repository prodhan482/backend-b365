import TextField from "../../../../../Components/common/TextField";
import { addItem } from "../districtService";
import { useState,useEffect } from "react";
import AddFormLayout from "../../../../../Components/common/AddFormLayout";
import ProductDropDown from "../../../../../Components/common/ProductDropDown";
import { getDivision } from "../../Area/areaService";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function AddDistrict({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [division, setDivision] = useState([]);
  const [seletedDivision, setSeletedDivision] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    const fetchDropDowns = async () => {
      try {
        const divisionData = await getDivision();

        setDivision(divisionData);

      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchDropDowns();
  }, []);


  const handleDivisionChange = (selectedDistrict) => {
    setSeletedDivision(selectedDistrict);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await addItem({
        name: name,
        division: seletedDivision,
      });

      onSuccess();
    } catch (error) {}
  };
  return (
    <AddFormLayout
      title="Add Division"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <ProductDropDown
        label="Division"
        options={division}
        value={seletedDivision}
        onChange={handleDivisionChange}
        required
      />
      <TextField
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Name"
        required
      />
      <ErrorMessage message={errorMessage} />
    </AddFormLayout>
  );
}

export default AddDistrict;
