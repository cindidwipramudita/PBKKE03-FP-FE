import React, { useEffect, useState } from "react";
import axios from "axios";
import "material-icons/iconfont/material-icons.css";
import PassSidebar from "./PassSidebar";

const PassContent = () => {
  const [passengers, setPassengers] = useState(0);
  const [trains, setTrains] = useState(0);
  const [bookedTickets, setBookedTickets] = useState(0);
  const [pendingTickets, setPendingTickets] = useState(0);
  const [trainData, setTrainData] = useState([]);
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const passengerResponse = await axios.get("/api/passengers/count");
      const trainResponse = await axios.get("/api/trains/count");
      const bookedTicketsResponse = await axios.get(
        "/api/tickets/count?status=Approved"
      );
      const pendingTicketsResponse = await axios.get(
        "/api/tickets/count?status=Pending"
      );
      const trainDataResponse = await axios.get("/api/trains/random?limit=10");
      const ticketDataResponse = await axios.get("/api/tickets/approved");

      setPassengers(passengerResponse.data.count);
      setTrains(trainResponse.data.count);
      setBookedTickets(bookedTicketsResponse.data.count);
      setPendingTickets(pendingTicketsResponse.data.count);
      setTrainData(trainDataResponse.data.trains);
      setTicketData(ticketDataResponse.data.tickets);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="be-wrapper be-fixed-sidebar">
      <PassSidebar />
      <div className="be-content container-fluid">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="widget widget-tile">
                <div className="widget-body bg-white">
                  <div className="row">
                    <div className="col-6 col-lg-3">
                      <div className="chart sparkline">
                        <i className="material-icons">
                          airline_seat_recline_normal
                        </i>
                      </div>
                      <div className="data-info">
                        <div className="desc">Passengers</div>
                        <div className="value">
                          <span className="indicator indicator-equal mdi mdi-chevron-right"></span>
                          <span
                            className="number"
                            data-toggle="counter"
                            data-end={passengers}
                          >
                            {passengers}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="chart sparkline">
                        <i className="material-icons">directions_subway</i>
                      </div>
                      <div className="data-info">
                        <div className="desc">Trains</div>
                        <div className="value">
                          <span className="indicator indicator-positive mdi mdi-chevron-right"></span>
                          <span
                            className="number"
                            data-toggle="counter"
                            data-end={trains}
                          >
                            {trains}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="chart sparkline">
                        <i className="material-icons">receipt</i>
                      </div>
                      <div className="data-info">
                        <div className="desc">Booked Tickets</div>
                        <div className="value">
                          <span className="indicator indicator-negative mdi mdi-chevron-right"></span>
                          <span
                            className="number"
                            data-toggle="counter"
                            data-end={bookedTickets}
                          >
                            {bookedTickets}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="chart sparkline">
                        <i className="material-icons">playlist_add</i>
                      </div>
                      <div className="data-info">
                        <div className="desc">Pending Tickets</div>
                        <div className="value">
                          <span className="indicator indicator-warning mdi mdi-chevron-right"></span>
                          <span
                            className="number"
                            data-toggle="counter"
                            data-end={pendingTickets}
                          >
                            {pendingTickets}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Recent Trains</div>
                </div>
                <div className="card-body">
                  <ul className="user-timeline user-timeline-compact">
                    {trainData.map((train) => (
                      <li key={train.id}>
                        <div className="user-timeline-date">{train.date}</div>
                        <div className="user-timeline-title">{train.name}</div>
                        <div className="user-timeline-description">
                          {train.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Approved Tickets</div>
                </div>
                <div className="card-body">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Passenger</th>
                        <th>Train</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ticketData.map((ticket) => (
                        <tr key={ticket.id}>
                          <td>{ticket.passenger}</td>
                          <td>{ticket.train}</td>
                          <td>{ticket.departure}</td>
                          <td>{ticket.arrival}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassContent;
