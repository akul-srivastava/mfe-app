import React from "react";

const payments = ["Card", "Netbanking", "UPI", "GPay", "PhonePe"];

const PaymentContainer = (props) => {
  const { selectedPaymentMethod, setSelectedPaymentMethod, onBack } = props;

  return (
    <>
      <h1>Payments</h1>
      <ul>
        {payments.map((payment) => (
          <li
            key={payment}
            style={{
              cursor: "pointer",
              fontWeight: selectedPaymentMethod === payment ? 800 : 400,
            }}
            onClick={() => {
              setSelectedPaymentMethod(payment);
            }}
          >
            {payment}
          </li>
        ))}
      </ul>
      <button onClick={onBack}>On Back</button>
    </>
  );
};

export default PaymentContainer;
