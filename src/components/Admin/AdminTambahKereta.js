import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";
import AdminSidebar from "./AdminSidebar";
import MyImge from "../../assets/img/logo.png";
import AdminHeader from "./AdminHeader";

const AdminTambahKereta = () => {
  const [trainName, setTrainName] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const navigate = useNavigate(); // Object to access the browser history

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to store the form data
    const formData = {
      trainName,
      departure,
      arrival,
    };

    // Save the form data to local storage
    localStorage.setItem("trainFormData", JSON.stringify(formData));

    // Reset form fields
    setTrainName("");
    setDeparture("");
    setArrival("");

    // Redirect to admin dashboard page
    navigate("/admin-dashboard-page");
  };

  return (
    <div className="be-wrapper be-fixed-sidebar">
      <AdminHeader />
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
                    <span className="splash-description logo-img">
                      Please enter train information.
                    </span>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="login-form">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="train_name"
                            type="text"
                            placeholder="Train Name"
                            autoComplete="off"
                            value={trainName}
                            onChange={(e) => setTrainName(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="departure"
                            type="text"
                            placeholder="Departure"
                            autoComplete="off"
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="arrival"
                            type="text"
                            placeholder="Arrival"
                            autoComplete="off"
                            value={arrival}
                            onChange={(e) => setArrival(e.target.value)}
                          />
                        </div>
                        <div className="form-group row login-submit col-lg-6">
                          <div className="d-flex justify-content-center">
                            <div className="col-lg-6">
                              <input
                                type="submit"
                                name="add_train"
                                className="btn btn-success btn-xl"
                                value="Add Train"
                              />
                            </div>
                            <div className="col-lg-6">
                              <Link
                                to="/admin-dashboard-page"
                                className="btn row btn-outline-danger btn-xl"
                              >
                                Batal
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default AdminTambahKereta;
