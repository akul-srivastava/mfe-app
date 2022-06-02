import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import Payment from "./containers/Payment";
import store from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
