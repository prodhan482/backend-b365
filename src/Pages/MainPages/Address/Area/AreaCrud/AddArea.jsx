import TextField from "../../../../../Components/common/TextField";
import {
  addItem,
  getDivision,
  getDistrictsFromDivision,
} from "../areaService";
import { useState, useEffect } from "react";
import AddFormLayout from "../../../../../Components/common/AddFormLayout";
import ProductDropDown from "../../../../../Components/common/ProductDropDown";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function AddArea({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [division, setDivision] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      await addItem({
        name: name,
        district: selectedDistrict,
      });

      onSuccess();
    } catch (error) {
      setErrorMessage("Add Failed");
    }
  };

  const handleDivisionChange = async (data) => {
    setSelectedDivision(data);

    try {
      const districtData = await getDistrictsFromDivision(data);
      setDistrict(districtData);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };
  const handleDistrictSelectionChange = (selectedDistrict) => {
    setSelectedDistrict(selectedDistrict);
  };

  return (
    <AddFormLayout title="Add Area" onSubmit={handleSubmit} onClose={onClose}>
      <ProductDropDown
        label="Division"
        options={division}
        value={selectedDivision}
        onChange={handleDivisionChange}
        required
      />
      <ProductDropDown
        label="District"
        options={district}
        value={selectedDistrict}
        onChange={handleDistrictSelectionChange}
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

export default AddArea;
