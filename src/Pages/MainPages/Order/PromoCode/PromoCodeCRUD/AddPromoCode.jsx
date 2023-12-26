import { useState } from "react"

import TextField from "../../../../../Components/common/TextField"
import NumberInputField from "../../../../../Components/common/NumberInputField"
import AddFormLayout from "../../../../../Components/common/AddFormLayout"

import ErrorMessage from "../../../../../Components/common/ErrorMessage"

import { addItem } from "../promoCodeService"
import DateField from "../../../../../Components/common/DateField"

function AddPromoCode({ onClose, onSuccess }) {
  const [promo, setPromo] = useState("")
  const [maxlimit, setMaxLimit] = useState("")
  const [discountType, setDiscountType] = useState("percentage")
  const [discountAmount, setDiscountAmount] = useState("")
  const [promotype, setPromoType] = useState("oneTime")
  const [validStartDate, setValidStartDate] = useState(new Date())
  const [validEndDate, setValidEndDate] = useState(new Date())

  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      onClose()

      await addItem({
        promo: promo,
        maxlimit: maxlimit,
        discountType: discountType,
        discountAmount: discountAmount,
        promotype: promotype,
        validStartDate: validStartDate,
        validEndDate: validEndDate,
      })

      onSuccess()

    } catch (error) {

      setErrorMessage("Add Failed")

    }
  }

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
    setContinueInput("");
  };

  return (

    <AddFormLayout
      title="Add PromoCode"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      
      <TextField
        label="promo"
        value={promo}
        onChange={setPromo}
        placeholder="Promo"
        required
      />

       <label htmlFor="amount">Promo Type:</label>
      <select id="promoType" value={promotype} onChange={(e) => setPromoType(e.target.value)}>
        <option value="oneTime">One Time</option>
        <option value="unlimited">unlimited</option>
      </select>

      <NumberInputField label="Max Limit" value={maxlimit} onChange={setMaxLimit} placeholder="Max Limit"/>

      <label htmlFor="amount">Discount Type:</label>
      <select id="discountType" value={discountType} onChange={(e) => setDiscountType(e.target.value)}>
        <option value="percentage">Percentage</option>
        <option value="amount">Amount</option>
      </select>

      <NumberInputField label="Discount Amount" value={discountAmount} onChange={setDiscountAmount} placeholder="Discount Amount"/>

      <DateField label="Start Date" selected={validStartDate} onChange={(date) => setValidStartDate(date)}  placeholderText="MM/DD/YY"/>

      <DateField label="End Date" selected={validEndDate} onChange={(date) => setValidEndDate(date)}  placeholderText="MM/DD/YY"/>

      <ErrorMessage message={errorMessage} />

    </AddFormLayout>

  )
}

export default AddPromoCode
