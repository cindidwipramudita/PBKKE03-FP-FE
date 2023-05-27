import React, { useState } from "react";

const TrainTicketForm = ({ onSelectTicket }) => {
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a ticket object with the form data
    const ticket = {
      destination,
      departureDate,
    };
    // Call the onSelectTicket function passed from App.js with the ticket object
    onSelectTicket(ticket);
  };

  return (
    <div className="container">
      <h2>Train Ticket Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Destination:</label>
          <input
            type="text"
            className="form-control"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Departure Date:</label>
          <input
            type="date"
            className="form-control"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Select Ticket
        </button>
      </form>
    </div>
  );
};

export default TrainTicketForm;
