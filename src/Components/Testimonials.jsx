import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { Col, Container, Row } from "react-bootstrap";
import user1 from "../assets/testimonialUser1.png";
import user2 from "../assets/testimonialUser2.png";
import user3 from "../assets/testimonialUser3.png";
import user4 from "../assets/testimonialUser4.png";
import Heading from "./SectionHeading/Heading";
import "./styles/Testimonials.css";

const Testimonials = () => {
  const sliderData = [
    {
      userImg: user1,
      userName: "Emily Williams",
      userCity: "Edusity, USA",
      userReview:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      userImg: user2,
      userName: "William Jackson",
      userCity: "Edusity, USA",
      userReview:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      userImg: user3,
      userName: "Emily Williams",
      userCity: "Edusity, USA",
      userReview:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      userImg: user4,
      userName: "William Jackson",
      userCity: "Edusity, USA",
      userReview:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
  ];

  return (
    <section id="testimonial">
      <Container>
        <Row>
            <Col lg={12}>
                <Heading heading={"Testimonials"} subHeading={"What Student Says"} textPosition={"textPosition"} />
            </Col>
          <Col lg={12}>
            <Swiper
              spaceBetween={30}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {sliderData.map((testimonialData) => (
                <SwiperSlide>
                  <div className="testimonialWrapper w-100">
                    <div className="userInfo d-flex justify-content-start align-items-center mb-3">
                      <div className="userImage">
                        <img
                          src={testimonialData.userImg}
                          alt="Emily Williams"
                        />
                      </div>
                      <div className="userDetails text-start">
                        <h3 className="mb-0">{testimonialData.userName}</h3>
                        <span>{testimonialData.userCity}</span>
                      </div>
                    </div>
                    <div className="reviewInfo">
                      <p>{testimonialData.userReview}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
