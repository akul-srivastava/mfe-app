import paymentState from "../states/payment";
import paymentTypes from "../types/payment";

export function paymentReducer(state = paymentState, action) {
  switch (action.type) {
    case paymentTypes.SET_SELECTED_PAYMENT_METHOD:
      return {
        ...state,
        selectedPaymentMethod: action.payload.selectedPaymentMethod,
      };
    default:
      return state;
  }
}
