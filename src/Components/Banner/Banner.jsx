import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MainBtn from "../MainBtn/MainBtn";
import arrow from "../../assets/icons/arrow.png"
import './Banner.css';

const Banner = () => {
  return (
    <section id="hero-banner">
      <Container>
        <Row>
          <Col md={12}>
          <div className="info-container">
            <div className="info-wrapper">
              <h2>We Ensure better education for a better world</h2>
              <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
              <div className="explore-btn">
                <MainBtn btnTitle={"Explore More"} icon={arrow} arrowStyle={"width"} btnBgColor={"white"} />
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
