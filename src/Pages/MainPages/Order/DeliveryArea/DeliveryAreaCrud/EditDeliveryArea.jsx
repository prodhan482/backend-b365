import { useState, useEffect } from "react";
import { getDivision, getDistrictsFromDivision, getAreasFromDistrict } from "../../../Address/Area/areaService";
import EditFormLayout from "../../../../../Components/common/EditFormLayout";
import ProductDropDown from "../../../../../Components/common/ProductDropDown";
import { getSingleItems ,editItem} from "../deliveryAreaService";
import { getItems as getAllZones } from "../../DeliveryZone/deliveryZoneService";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function EditDeliveryArea({ data, onClose, onSuccess }) {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [division, setDivision] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [district, setDistrict] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [allAreas, setAllAreas] = useState([]);
  const [selectedZone, setSelectedZone] = useState("");
  const [zone, setZone] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchDropDowns = async () => {
      try {
        const singleArea = await getSingleItems(data._id)

        const divisionData = await getDivision();
        setDivision(divisionData);

        const districtData = await getDistrictsFromDivision(singleArea.area.district.division._id);
        setDistrict(districtData);

        const areaData = await getAreasFromDistrict(singleArea.area.district._id);

        setAllAreas(areaData);

        const allZones = await getAllZones()
        setZone(allZones)

        setSelectedDivision(singleArea.area.district.division._id);
        setSelectedDistrict(singleArea.area.district._id);
        setSelectedArea(singleArea.area._id);
        setSelectedZone(data.deliveryZone._id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDropDowns();
  }, []);

  const handleDivisionChange = async (selectedDivision) => {
    setSelectedDivision(selectedDivision);

    try {
      const districtData = await getDistrictsFromDivision(selectedDivision);
      setDistrict(districtData);
      setSelectedDistrict("");
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const handleDistrictSelectionChange = async (selectedDistrict) => {
    setSelectedDistrict(selectedDistrict);

    try {
      const areaData = await getAreasFromDistrict(selectedDistrict);
      setAllAreas(areaData);
    } catch (error) {
      console.error("Error fetching area data:", error);
    }
  };

  const handleAreaChange = (selectedArea) => {
    setSelectedArea(selectedArea);
  };

  const handleZoneChange = (selectedZone) => {
    setSelectedZone(selectedZone);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();

    try {
      const formData = {
        division: selectedDivision,
        district: selectedDistrict,
        area: selectedArea,
        deliveryZone: selectedZone,
      };
      console.log(formData)
      await editItem(data._id, formData);
      onSuccess();
    } catch (error) {
      setErrorMessage("Failed edit");
    }
  };

  return (
    <EditFormLayout title="Edit Delivery Area" onClose={onClose} onSubmit={handleSubmit}>
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
      <ProductDropDown
        label="All Areas"
        options={allAreas}
        value={selectedArea}
        onChange={handleAreaChange}
        required
      />
      <ProductDropDown
        label="Zone"
        options={zone}
        value={selectedZone}
        onChange={handleZoneChange}
        required
      />
       <ErrorMessage message={errorMessage} />
    </EditFormLayout>
  );
}

export default EditDeliveryArea;
