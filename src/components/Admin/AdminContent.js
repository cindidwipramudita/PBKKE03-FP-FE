import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";
import AdminSidebar from "./AdminSidebar";
import MyImge from "../../assets/img/logo.png";

const AdminContent = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Retrieve the train data from local storage
    const storedData = JSON.parse(localStorage.getItem("trainFormData"));

    if (storedData) {
      // Set the trains state with the stored data
      setTrains([storedData]);
    } else {
      // Fetch the train data from the API
      axios
        .get("/api/trains")
        .then((response) => {
          setTrains(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="be-wrapper be-fixed-sidebar">
      <AdminSidebar />
      <div className="be-content container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="widget widget-tile">
              <div className="widget-body bg-white">
                <div className="card card-border-color card-border-color-success">
                  <div className="card-header">
                    <img
                      className="logo-img"
                      src={MyImge}
                      alt="logo"
                      width="{conf.logoWidth}"
                      height="27"
                    />
                    <span className="splash-description">
                      Please enter train information.
                    </span>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Train Name</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                          </tr>
                        </thead>
                        <tbody>
                          {trains.map((train, index) => (
                            <tr key={index}>
                              <td>{train.trainName}</td>
                              <td>{train.departure}</td>
                              <td>{train.arrival}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="form-group row login-submit col-lg-6">
                      <div className="d-flex justify-content-center">
                        <div className="col-lg-6">
                          <Link
                            to="/admin-tambah-kereta"
                            className="btn btn-success btn-xl"
                          >
                            Add Train
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="splash-footer">
                  Back <a href="../index.php">Home</a>
                </div>
                <div className="splash-footer">
                  &copy; 2019 - {new Date().getFullYear()} Online Railway
                  Reservation System | Developed By Martin Mbithi Nzilani
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
