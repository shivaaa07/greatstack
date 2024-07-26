import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "./SectionHeading/Heading";
import Thumbnail from "../assets/thumbnail.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/AboutUs.css";

const AboutUs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="aboutUs">
      <Container>
        <Row>
          <Col md={6}>
            <div className="aboutVideoWrapper">
                <img src={Thumbnail} alt="About Video Thumbnail" />
            </div>
          </Col>
          <Col md={6}>
            <div className="aboutInfoWrapper">
              <Heading
                heading={"About university"}
                subHeading={
                  <span>
                    Nurturing Tomorrow's <br />
                    Leaders Today
                  </span>
                }
                textPosition={"textLeft"}
              />
              <p className="info">
                Embark on a transformative educational journey with our
                university's comprehensive education programs. Our cutting-edge
                curriculum is designed to empower students with the knowledge,
                skills, and experiences needed to excel in the dynamic field of
                education.
              </p>
              <p className="info">
                With a focus on innovation, hands-on learning, and personalized
                mentorship, our programs prepare aspiring educators to make a
                meaningful impact in classrooms, schools, and communities.
              </p>
              <p className="info">
                Whether you aspire to become a teacher, administrator,
                counselor, or educational leader, our diverse range of programs
                offers the perfect pathway to achieve your goals and unlock your
                full potential in shaping the future of education.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
