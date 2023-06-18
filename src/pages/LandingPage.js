import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Login from "../components/Login";

const LandingPage = () => {
  return (
    <div id="page-wrapper">
      <Header />

      <Row>
        <Col lg={6} md={6}></Col>
        <Col lg={6} md={6}>
          <Login />
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
