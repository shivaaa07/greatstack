import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mailIcon from "../assets/msg-icon.png";
import Heading from "./SectionHeading/Heading";
import MainBtn from "./MainBtn/MainBtn";
import arrow from "../assets/icons/arrow.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ContactUs.css";

const ContactUs = () => {
  return (
    <section id="contactUs">
      <Container>
        <Row>
            <Col md={12}>
                <Heading heading={"Contact Us"} subHeading={"Get in Touch"} textPosition={"textPosition"} />
            </Col>
          <Col md={6}>
            <div className="contactWrapper">
              <h4>
                Send us a Message
                <img src={mailIcon} alt="Email" />
              </h4>
              <p className="w-75 w-sx-100">
                Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are
                important to us as we strive to provide exceptional service to
                our university community.
              </p>
              <div className="contactInfo">
                <p className="fs-5"><i class="fa-solid fa-paper-plane" /> contact@greatstack.dev</p>
                <p className="fs-5"><i class="fa-solid fa-phone-volume" /> <a href="tel:+0000000000" className="text-decoration-none">+1123-456-7890</a></p>
                <p className="fs-5"><i class="fa-solid fa-location-dot" /> contact@greatstack.dev</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="formWrapper">
              <form action="#">
                <div className="userNameWrapper">
                  <label htmlFor="userName">Your Name</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="userMobileWrapper">
                  <label htmlFor="userMobile">Phone Number</label>
                  <input
                    type="text"
                    id="userMobile"
                    name="userMobile"
                    placeholder="Enter Your Mobile Number"
                  />
                </div>
                <div className="userMailWrapper">
                  <label htmlFor="userMail">Your Email</label>
                  <input
                    type="email"
                    id="userMail"
                    name="userMail"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="userMessageWrapper">
                  <label htmlFor="userMsg">Write Your Meassage Here</label>
                  <textarea
                    type="text"
                    id="userMsg"
                    name="userMsg"
                    placeholder="Enter Your Message"
                  />
                </div>
                <div className="submitBtnWrapper mt-4">
                    <MainBtn btnTitle={"Submit Now"} icon={arrow} arrowStyle={"width"} btnBgColor={"blue"}/>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
