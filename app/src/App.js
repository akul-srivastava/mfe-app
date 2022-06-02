import React from "react";
import { Link } from "react-router-dom";
import { usePaymentState } from "./store/selectors";

function App() {
  const { selectedPaymentMethod } = usePaymentState();

  return (
    <>
      <h1>App</h1>
      <h3>Selected Method: {JSON.stringify(selectedPaymentMethod)}</h3>
      <Link to="/payment">Goto Payment MFE Page</Link>
    </>
  );
}

export default App;
