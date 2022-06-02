import React from "react";
import { createRoot } from "react-dom/client";
import PaymentContainer from "./demo/Payment";

const rootElement = document.getElementById("payments-container");
const root = createRoot(rootElement);

root.render(<PaymentContainer />);
