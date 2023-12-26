import { useState, useEffect } from "react";
import { editItem, getDivision, getDivisionFromDistrict ,getDistrictsFromDivision} from "../areaService";
import EditFormLayout from "../../../../../Components/common/EditFormLayout";
import ProductDropDown from "../../../../../Components/common/ProductDropDown";
import TextField from "../../../../../Components/common/TextField";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function EditArea({ items, onClose, onSuccess }) {
  const [name, setName] = useState(items.name);
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
        const districtData = await getDistrictsFromDivision(items.district.division);
        const divisioSinglenData = await getDivisionFromDistrict(items.district.division)
        console.log(divisioSinglenData)
        if (Array.isArray(districtData)) {
          setDistrict(districtData);
        } else {
        }

        setSelectedDivision(divisioSinglenData._id);
        setSelectedDistrict(items.district._id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDropDowns();
  }, [items.district,items.division]);

  

  const handleDivisionChange = async (data) => {
    setSelectedDivision(data);

    try {
      const districtData = await getDivisionFromDistrict(data);
      setDistrict(districtData);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const handleDistrictSelectionChange = (selectedDistrict) => {
    setSelectedDistrict(selectedDistrict);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      const formData = {
        name,
        district: selectedDistrict,
        division: selectedDivision
      };

      await editItem(items._id, formData);

      onSuccess();
    } catch (error) {
      setErrorMessage("Failed edit");
    }
  };

  return (
    <EditFormLayout title="Edit Area" onClose={onClose} onSubmit={handleSubmit}>
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
    </EditFormLayout>
  );
}

export default EditArea;