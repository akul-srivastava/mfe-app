import React from "react";
import Payment from "../containers/Payment";

function PaymentMFEApp() {
  const [method, setMethod] = React.useState(null);

  return (
    <Payment
      selectedPaymentMethod={method}
      setSelectedPaymentMethod={setMethod}
      onBack={() => {
        console.log("Cannot go back");
      }}
    />
  );
}

export default PaymentMFEApp;
