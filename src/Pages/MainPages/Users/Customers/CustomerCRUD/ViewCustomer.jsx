import ViewDetailsField from "../../../../../Components/common/ViewDetailsField";
import ViewDetailsLayout from "../../../../../Components/common/ViewDetailsLayout";

import ErrorMessage from "../../../../../Components/common/ErrorMessage"

function ViewCustomer({ customer, onClose, errorMessage }) {
  return (

    <ViewDetailsLayout label={"Customer Details"} onClose={onClose}>

      <ViewDetailsField
        fieldName={"Name"}
        data={customer.firstName}
      />
      <ViewDetailsField
        fieldName={"Email"}
        data={customer.email}
      />
      <ViewDetailsField
        fieldName={"Phone Number"}
        data={customer.mobile}
      />

      <ErrorMessage message={errorMessage} />

    </ViewDetailsLayout>

  )
}
export default ViewCustomer;
