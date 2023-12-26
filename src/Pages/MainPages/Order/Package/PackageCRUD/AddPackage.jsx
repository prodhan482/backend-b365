import { useState } from "react"

import TextField from "../../../../../Components/common/TextField"
import NumberInputField from "../../../../../Components/common/NumberInputField"
import ToggleSwitch from "../../../../../Components/common/ToggleSwitch"
import AddFormLayout from "../../../../../Components/common/AddFormLayout"
import ErrorMessage from "../../../../../Components/common/ErrorMessage"

import { addItem } from "../packageService"
import DateField from "../../../../../Components/common/DateField"

function AddPackage({ onClose, onSuccess }) {

  const [name, setName] = useState("")
  const [discountAmount, setDiscountAmount] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      onClose()

      await addItem({
        name: name,
        discountAmount: discountAmount,
        isActive: isActive,
        startDate: startDate,
        endDate: endDate,
      })

      onSuccess()

    } catch (error) {

      setErrorMessage("Add Failed")

    }
  }

  return (

    <AddFormLayout
      title="Add Package"
      onSubmit={handleSubmit}
      onClose={onClose}
    >

      <TextField
        label="Package Name"
        value={name}
        onChange={setName}
        placeholder="Package Name"
        required
      />

      <NumberInputField label="Discount Amount" value={discountAmount} onChange={setDiscountAmount} placeholder="Discount Amount"/>
      <DateField label="Start Date" selected={startDate} onChange={(date) => setStartDate(date)}  placeholderText="MM/DD/YY"/>
      <DateField label="End Date" selected={endDate} onChange={(date) => setEndDate(date)}  placeholderText="MM/DD/YY"/>

      <ToggleSwitch
        id="isActive"
        label="Status"
        value={isActive}
        checked={isActive}
        onChange={() => setIsActive(!isActive)}
      />

      <ErrorMessage message={errorMessage} />

    </AddFormLayout>

  )
}

export default AddPackage
