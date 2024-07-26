import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="divider"></div>
                            <div className="footer-body d-flex justify-content-between">
                                <p>&#169; 2024 Edusity. All rights reserved.</p>
                                <ul className="policy d-flex gap-4">
                                    <li>
                                        <a href="#">Terms of Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;