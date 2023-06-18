import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import MyImage from "../assets/img/logo.png";
// import bootstrap from bootstrap;

const Register = () => {
  const navigate = useNavigate();

  const [passenger, setPassenger] = useState({
    pass_fname: "",
    pass_lname: "",
    pass_phone: "",
    pass_addr: "",
    pass_uname: "",
    pass_email: "",
    pass_pwd: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassenger((prevPassenger) => ({
      ...prevPassenger,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing user data from local storage
    const existingData = JSON.parse(localStorage.getItem("passengers")) || [];

    // Add the new passenger to the existing data array
    const updatedData = [...existingData, passenger];

    // Save the updated data array to local storage
    localStorage.setItem("passengers", JSON.stringify(updatedData));

    // Mocking the success and error messages for demonstration purposes
    setSuccess("Created Account Proceed To Log In");
    setError("Please Try Again Or Try Later");

    // Redirect to login page
    navigate("/");
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
                  Passenger Registration Form
                </span>
              </div>
              <div className="card-body">
                {/* {success && (
                  <script>
                    setTimeout(function () 
                    { 
                      swal("Success!", "{success}!", "success");
                    },
                    100);
                  </script>
                )}
                {error && (
                  <script>
                    setTimeout(function () 
                    { 
                      swal("Failed!", "{error}!", "Failed");
                    },
                    100);
                  </script>
                )} */}
                <form onSubmit={handleSubmit}>
                  <div className="login-form">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="pass_fname"
                        type="text"
                        placeholder="Enter Your First Name"
                        value={passenger.pass_fname}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="pass_lname"
                        type="text"
                        placeholder="Enter Your Last Name"
                        value={passenger.pass_lname}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="pass_phone"
                        type="text"
                        placeholder="Enter Your Phone Number"
                        value={passenger.pass_phone}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="pass_addr"
                        type="text"
                        placeholder="Enter Your Address"
                        value={passenger.pass_addr}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="pass_uname"
                        type="text"
                        placeholder="Enter Your Username"
                        value={passenger.pass_uname}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="pass_email"
                        type="email"
                        placeholder="Enter Your Email Address"
                        value={passenger.pass_email}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="pass_pwd"
                        type="password"
                        placeholder="Password"
                        value={passenger.pass_pwd}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group row login-submit">
                      <div className="col-6">
                        <Link to="/" className="btn btn-outline-success btn-xl">
                          Login
                        </Link>
                      </div>
                      <div className="col-6">
                        <input
                          type="submit"
                          name="pass_register"
                          className="btn btn-outline-danger btn-xl"
                          value="Register"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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

export default Register;
