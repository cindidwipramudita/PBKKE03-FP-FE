import React, { useState } from "react";

const TrainTicketCheckout = ({ ticket, onCheckout }) => {
  const [farePaymentCode, setFarePaymentCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onCheckout function passed from App.js with the fare payment code
    onCheckout(farePaymentCode);
  };

  return (
    <div className="container">
      <h2>Train Ticket Checkout</h2>
      <div>
        <p>
          <strong>Destination:</strong> {ticket.destination}
        </p>
        <p>
          <strong>Departure Date:</strong> {ticket.departureDate}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fare Payment Code:</label>
          <input
            type="text"
            className="form-control"
            value={farePaymentCode}
            onChange={(e) => setFarePaymentCode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default TrainTicketCheckout;
