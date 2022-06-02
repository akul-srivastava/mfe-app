import { combineReducers } from "redux";
import { paymentReducer } from "./payment";

const reducer = combineReducers({
  payment: paymentReducer,
});

export default reducer;
