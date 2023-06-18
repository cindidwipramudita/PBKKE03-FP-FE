import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../Header";
import Register from "../Register";

const AdminRegister = () => {
  return (
    <div id="page-wrapper">
      <Header />

      <Row>
        <Col lg={6} md={6}></Col>
        <Col lg={6} md={6}>
          <Register />
        </Col>
      </Row>
    </div>
  );
};

export default AdminRegister;
