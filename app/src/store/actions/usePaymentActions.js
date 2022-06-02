import React from "react";
import { useDispatch } from "react-redux";
import paymentTypes from "../types/payment";

export function usePaymentActions() {
  const dispatch = useDispatch();

  function setSelectedPaymentMethod(method) {
    dispatch({
      type: paymentTypes.SET_SELECTED_PAYMENT_METHOD,
      payload: {
        selectedPaymentMethod: method,
      },
    });
  }

  return {
    setSelectedPaymentMethod,
  };
}
