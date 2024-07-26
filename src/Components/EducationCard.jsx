import React from "react";
import graduation from "../assets/graduation.png";
import masters from "../assets/master.png";
import postDegree from "../assets/post.png";
import graduationIcon from "../assets/graduationDegree.png";
import masterIcon from "../assets/mastersDegree.png";
import postIcon from "../assets/postGraduation.png";
import "./styles/EducationCard.css";

const EducationCard = () => {
  const cardsData = [
    {
      degreeImage: graduation,
      degreeIcon: graduationIcon,
      degreeTitle: "Graduation Degree",
    },
    {
      degreeImage: masters,
      degreeIcon: masterIcon,
      degreeTitle: "Masters Degree",
    },
    {
      degreeImage: postDegree,
      degreeIcon: postIcon,
      degreeTitle: "Post Graduation",
    },
  ];

  cardsData.map(()=>{

  })

  return (
    <>
      {
        cardsData.map((ele)=>
          <div className="educationWrapper">
            <div className="education position-relative">
              <img src={ele.degreeImage} alt="graduation" className="educationImg" />
              <div className="caption">
                <img src={ele.degreeIcon} alt="Caption Icon" />
                <p>{ele.degreeTitle}</p>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default EducationCard;
