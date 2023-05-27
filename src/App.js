import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import TrainTicketForm from "./components/TrainTicketForm";
import TrainTicketCheckout from "./components/TrainTicketCheckout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleLogin = (username, password) => {
    // Perform login validation here
    // Set the isLoggedIn state to true if login is successful
    setIsLoggedIn(true);
  };

  const handleTicketSelection = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCheckout = (farePaymentCode) => {
    // Perform checkout process here
    // Show success message if checkout is successful
    alert("Checkout successful!");
    // Reset selected ticket and isLoggedIn state
    setSelectedTicket(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : selectedTicket ? (
        <TrainTicketCheckout
          ticket={selectedTicket}
          onCheckout={handleCheckout}
        />
      ) : (
        <TrainTicketForm onSelectTicket={handleTicketSelection} />
      )}
    </div>
  );
}

export default App;
