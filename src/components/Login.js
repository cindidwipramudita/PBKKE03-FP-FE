import React, { useState } from "react";
import swal from "sweetalert";
import MyImage from "../assets/img/logo.png";
import "../assets/css/app.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic
    // You can use an API or any other method to handle the login
    const storedPassengers =
      JSON.parse(localStorage.getItem("passengers")) || [];

    if (email && password) {
      // Check if the logged-in user is admin
      if (email === "admin@mail") {
        // Handle successful login for admin
        swal("Success!", "Admin logged in successfully!", "success");
        navigate("/admin-dashboard-page");
      } else {
        const matchedPassenger = storedPassengers.find(
          (passenger) => passenger.pass_email === email
        );

        if (matchedPassenger) {
          // Handle successful login for passenger/user
          swal("Success!", "Passenger logged in successfully!", "success");
          navigate("/pass-dashboard-page");
        } else {
          // Handle failed login
          swal(
            "Failed!",
            "Access Denied Please Check Your Credentials",
            "error"
          );
        }
      }
    } else {
      // Handle failed login
      swal("Failed!", "Access Denied Please Check Your Credentials", "error");
    }
  };

  return (
    <div className="be-wrapper be-login">
      <div className="be-content">
        <div className="main-content container-fluid">
          <div className="splash-container">
            <div className="card card-border-color card-border-color-success">
              <div className="card-header">
                <img
                  className="logo-img"
                  src={MyImage}
                  alt="logo"
                  width="{conf.logoWidth}"
                  height="27"
                />
                <span className="splash-description">
                  Please enter your user information.
                </span>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="login-form">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="emp_email"
                        type="text"
                        placeholder="Email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="emp_pwd"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group row login-tools">
                      <div className="col-6 login-remember">
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            type="checkbox"
                            id="check1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check1"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="col-6 login-forgot-password">
                        <a target="_blank" href="../pass-pwd-forgot.php">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <div className="form-group row login-submit">
                      <div className="col-lg-6">
                        <input
                          type="submit"
                          name="emp_login"
                          className="btn btn-success btn-xl"
                          value="Log In"
                        />
                      </div>
                      <div className="col-lg-6">
                        <Link
                          to="/pass-register"
                          className="btn row btn-outline-danger btn-xl"
                        >
                          Register
                        </Link>
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
  );
};

export default Login;
