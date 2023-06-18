import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../components/Login";
import Register from "../components/Register";
import PassContent from "../components/Penumpang/PassContent";
import PassSidebar from "../components/Penumpang/PassSidebar";
import PassHeader from "../components/Penumpang/PassHeader";
import PassDashboardPage from "../components/Penumpang/PassDashboardPage";
import PassRegister from "../components/Penumpang/PassRegister";
import AdminDashboardPage from "../components/Admin/AdminDashboardPage";
import AdminTambahKereta from "../components/Admin/AdminTambahKereta";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/pass-content",
    element: <PassContent />,
  },
  {
    path: "/pass-sidebar",
    element: <PassSidebar />,
  },
  {
    path: "/pass-header",
    element: <PassHeader />,
  },
  {
    path: "/pass-dashboard-page",
    element: <PassDashboardPage />,
  },
  {},
  {
    path: "/pass-register",
    element: <PassRegister />,
  },
  {
    path: "/admin-dashboard-page",
    element: <AdminDashboardPage />,
  },
  {
    path: "/admin-tambah-kereta",
    element: <AdminTambahKereta />,
  },
]);

export default routes;
