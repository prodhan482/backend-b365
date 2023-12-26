import { useState } from "react"

import TextField from "../../../../../Components/common/TextField"
import NumberInputField from "../../../../../Components/common/NumberInputField"
import EditFormLayout from "../../../../../Components/common/EditFormLayout"

import ErrorMessage from "../../../../../Components/common/ErrorMessage"

import { editItem } from "../promoCodeService"
import DateField from "../../../../../Components/common/DateField"

function EditPromoCode({ promoCode, onClose, onEditSuccess }) {

  const [promo, setPromo] = useState(promoCode.promo)
  const [maxlimit, setMaxLimit] = useState(promoCode.maxlimit)
  const [discountType, setDiscountType] = useState(promoCode.discountType)
  const [discountAmount, setDiscountAmount] = useState(promoCode.discountAmount)
  const [promotype, setPromoType] = useState(promoCode.discountType)
  const [validStartDate, setValidStartDate] = useState(promoCode.validStartDate)
  const [validEndDate, setValidEndDate] = useState(promoCode.validEndDate)

  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    onClose()

    try {

      await editItem(promoCode._id, {
        promo: promo,
        maxlimit: maxlimit,
        discountType: discountType,
        discountAmount: discountAmount,
        promotype: promotype,
        validStartDate: validStartDate,
        validEndDate: validEndDate,
      })

      onEditSuccess()

    } catch (error) {

      setErrorMessage("Failed edit")

    }
  }

  return (

    <EditFormLayout
      title="Edit PromoCode"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
       <TextField
        label="promo"
        value={promo}
        onChange={(value) => setPromo(value)}
        placeholder="Promo"
        required
      />
      <label htmlFor="amount">Promo Type:</label>
      <select id="promoType" value={promotype} onChange={(value) => setPromoType(value)}>
        <option value="oneTime">One Time</option>
        <option value="unlimited">unlimited</option>
      </select>

      <NumberInputField label="Max Limit" value={maxlimit} onChange={(value) => setMaxLimit(value)} />

      <label htmlFor="amount">Discount Type:</label>
      <select id="discountType" value={discountType} onChange={(value) => setDiscountType(value)}>
        <option value="percentage">Percentage</option>
        <option value="amount">Amount</option>
      </select>

      <NumberInputField
        id="discountAmount"
        label="Discount Amount"
        value={discountAmount}
        onChange={(value) => setDiscountAmount(value)}
        placeholder="Discount Amount"
        required
      />

      <DateField
        id="validStartDate"
        label="Start Date"
        selected={validStartDate} 
        onChange={(date) => setValidStartDate(date)}
        placeholder="Start Date"
        required
      />
      <DateField
        id="validEndDate"
        label="End Date"
        selected={validEndDate}
        onChange={(date) => setValidEndDate(date)}
        placeholder="End Date"
        required
      />

      <ErrorMessage message={errorMessage} />

    </EditFormLayout>

  )
}

export default EditPromoCode
