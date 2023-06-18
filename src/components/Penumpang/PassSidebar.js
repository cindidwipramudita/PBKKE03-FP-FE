import React from "react";
import { Link } from "react-router-dom"; // Jika Anda menggunakan React Router
import "material-icons/iconfont/material-icons.css";

const PassSidebar = () => {
  return (
    <div className="be-left-sidebar">
      <div className="left-sidebar-wrapper">
        <Link to="/" className="left-sidebar-toggle">
          Dashboard
        </Link>
        <div className="left-sidebar-spacer">
          <div className="left-sidebar-scroll">
            <div className="left-sidebar-content">
              <ul className="sidebar-elements">
                <li className="divider">Menu</li>
                <li>
                  <Link to="/pass-dashboard">
                    <i className="icon mdi mdi-view-dashboard"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="parent">
                  <Link to="#">
                    <i className="icon mdi mdi-face"></i>
                    <span>'s Profile</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/pass-profile">View</Link>
                    </li>
                    <li>
                      <Link to="/pass-profile-update">Update</Link>
                    </li>
                    <li>
                      <Link to="/pass-profile-avatar">Profile Avatar</Link>
                    </li>
                    <li>
                      <Link to="/pass-profile-password">Change Password</Link>
                    </li>
                  </ul>
                </li>
                <li className="parent">
                  <Link to="#">
                    <i className="icon mdi mdi-train"></i>
                    <span>Trains</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/pass-all-available-trains">
                        All Available Trains
                      </Link>
                    </li>
                    <li>
                      <Link to="/pass-search-available-trains">
                        Search Train
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="parent">
                  <Link to="#">
                    <i className="icon mdi mdi-briefcase-edit-outline"></i>
                    <span>Book Train</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/pass-book-train">Reserve Train</Link>
                    </li>
                    <li>
                      <Link to="/pass-cancel-train">Cancel Train</Link>
                    </li>
                  </ul>
                </li>
                <li className="parent">
                  <Link to="#">
                    <i className="icon mdi mdi-ticket-confirmation"></i>
                    <span>Tickets</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/pass-train-checkout-ticket">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/pass-confirm-ticket">Confirm Payments</Link>
                    </li>
                    <li>
                      <Link to="/pass-print-ticket">Print</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/pass-logout">
                    <i className="icon mdi mdi-exit-run"></i>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassSidebar;
