import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import MainBtn from "../MainBtn/MainBtn";
import "./Header.css";

const Menu = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  // +++++++++++++++++++++++++++ OnClick Colse Menu ++++++++++++++++++++
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        expanded={expanded}
        onToggle={handleToggle}
        expand="lg"
        className={`sticky ${colorChange ? "navbar navbarBlue" : "navbar"}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" className="logo-width" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#hero-banner"
                className="text-light"
                onClick={handleClose}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#programm"
                className="text-light"
                onClick={handleClose}
              >
                Program
              </Nav.Link>
              <Nav.Link
                href="#aboutUs"
                className="text-light"
                onClick={handleClose}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#gallery"
                className="text-light"
                onClick={handleClose}
              >
                Campus
              </Nav.Link>
              <Nav.Link
                href="#testimonial"
                className="text-light"
                onClick={handleClose}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                href="#contactUs"
                className="text-light"
                onClick={handleClose}
              >
                <MainBtn
                  btnTitle={"Contact Us"}
                  arrowStyle={"d-none"}
                  btnBgColor={"white"}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
