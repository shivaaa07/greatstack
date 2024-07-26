import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "./SectionHeading/Heading";
import galImg1 from "../assets/gallery/gallery1.png";
import galImg2 from "../assets/gallery/gallery2.png";
import galImg3 from "../assets/gallery/gallery3.png";
import galImg4 from "../assets/gallery/gallery4.png";
import arrow from "../assets/icons/arrow.png"
import MainBtn from "./MainBtn/MainBtn";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Gallery.css"

const Gallery = () => {
    return (
        <section id="gallery">
            <Container>
                <Row>
                    <Col md={12}>
                        <Heading heading={"gallery"} subHeading={"Campus Photo"} textPosition={"textPosition"}/>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="imgWrapper">
                            <img src={galImg1} alt="Books" className="w-100" />
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="imgWrapper">
                            <img src={galImg2} alt="Library" className="w-100" />
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="imgWrapper">
                            <img src={galImg3} alt="Degree" className="w-100" />
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="imgWrapper">
                            <img src={galImg4} alt="Project" className="w-100" />
                        </div>
                    </Col>
                    <Col md={12} className="text-center mt-5">
                        <MainBtn btnTitle={"See More Here"} icon={arrow} arrowStyle={"width"} btnBgColor={"blue"}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Gallery;