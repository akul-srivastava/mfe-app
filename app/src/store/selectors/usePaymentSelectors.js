import React from "react";
import { useSelector } from "react-redux";

export function usePaymentState() {
  const paymentState = useSelector((s) => s.payment);

  return paymentState;
}
