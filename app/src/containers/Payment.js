import React from "react";
import { useNavigate } from "react-router-dom";
import Payment from "payment/Payment";
import { usePaymentActions } from "../store/actions";
import { usePaymentState } from "../store/selectors";

function PaymentContainer() {
  const { setSelectedPaymentMethod } = usePaymentActions();
  const { selectedPaymentMethod } = usePaymentState();
  const navigate = useNavigate();

  function onBack() {
    navigate("../");
  }

  return (
    <Payment
      selectedPaymentMethod={selectedPaymentMethod}
      setSelectedPaymentMethod={setSelectedPaymentMethod}
      onBack={onBack}
    />
  );
}

export default PaymentContainer;
