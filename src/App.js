import React from "react";
// import Header from "./components/Header";
// import Menu from "./components/Menu";
// import Banner from "./components/Banner";
// import Contact from "./components/Contact";
// import Login from "./components/Login";
import LandingPage from "./pages/LandingPage";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  redirect,
} from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <LandingPage />;
    </BrowserRouter>
  );
};

export default App;
