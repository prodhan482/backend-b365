import {
  getDistrictsFromDivision,
  getDivision,
  getAreasFromDistrict,
  getItems as getAllArea

} from "../../../Address/Area/areaService";
import { useState, useEffect } from "react";
import AddFormLayout from "../../../../../Components/common/AddFormLayout";
import ProductDropDown from "../../../../../Components/common/ProductDropDown";
import { addItem } from "../deliveryAreaService";
import { getItems as getAllZone } from "../../DeliveryZone/deliveryZoneService";
import ErrorMessage from "../../../../../Components/common/ErrorMessage";

function AddADeliveryArea({ onClose, onSuccess }) {
    const [division, setDivision] = useState([]);
    const [seletedDivision, setSeletedDivision] = useState("");
    const [district, setDistrict] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [allAreas, setAllAreas] = useState([]);
    const [selectedArea, setSelectedArea] = useState("");
    const [zones, setZones] = useState([]);
    const [selectedZone, setSelectedZone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    useEffect(() => {
      const fetchDropDowns = async () => {
        try {
          const divisionData = await getDivision();
          setDivision(divisionData);
          const zoneData = await getAllZone();
          setZones(zoneData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchDropDowns();
    }, []);
  
    useEffect(() => {
      const fetchAllAreas = async () => {
        try {
          const allAreasData = await getAllArea();
          setAllAreas(allAreasData);
        } catch (error) {
          console.error("Error fetching all areas:", error);
        }
      };
  
      fetchAllAreas();
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      onClose();
      try {
        await addItem({
          area: selectedArea,
          deliveryZone: selectedZone, 
        });
  
        onSuccess();
      } catch (error) {
        setErrorMessage("Add Failed");;
      }
    };
  
    const handleDivisionChange = async (selectedDivision) => {
      setSeletedDivision(selectedDivision);
  
      try {
        const districtData = await getDistrictsFromDivision(selectedDivision);
        setDistrict(districtData);
        setSelectedDistrict("");
        setSelectedZone("");
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };
  
    const handleDistrictSelectionChange = async (selectedDistrict) => {
      setSelectedDistrict(selectedDistrict);
      try {
        const areaData = await getAreasFromDistrict(selectedDistrict);
        setAllAreas(areaData)
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
  
    return (
      <AddFormLayout title="Add Area" onSubmit={handleSubmit} onClose={onClose}>
        <ProductDropDown
          label="Division"
          options={division}
          value={seletedDivision}
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
          label="Zones"
          options={zones}
          value={selectedZone}
          onChange={handleZoneChange}
          required
        />
        <ErrorMessage message={errorMessage} />
      </AddFormLayout>
    );
  }
  
  export default AddADeliveryArea;