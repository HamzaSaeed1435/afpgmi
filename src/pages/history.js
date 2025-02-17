import React from "react";
import "./campusLife.css";
import Image1 from "../assets/Slide1.JPG";
import Image2 from "../assets/Slide2.JPG";
import Image3 from "../assets/Slide3.JPG";
import Image4 from "../assets/Slide4.JPG";
import Image5 from "../assets/Slide5.JPG";
import Image6 from "../assets/Slide6.JPG";
import Image7 from "../assets/Slide7.JPG";
import Image8 from "../assets/Slide8.JPG";
import Image9 from "../assets/Slide9.JPG";
import Image10 from "../assets/Slide10.JPG";
import Image11 from "../assets/Slide11.JPG";
import Image12 from "../assets/Slide12.JPG";
import Image13 from "../assets/Slide13.JPG";

const History = ({ src, title }) => {

  const facilitiesData = [
    {
      title: "Institute Library",
      image: Image1,
    },
    {
      title: "Faruqi Auditorium",
      image: Image2,
    },
    {
      title: "Conference Room",
      image: Image3,
    },
    {
      title: "Training Wing",
      image: Image4,
    },
    {
      title: "Exam cell",
      image: Image6,
    },
    {
        title: "Exam cell",
        image: Image7,
      },
      {
        title: "Exam cell",
        image: Image8,
      },
      {
        title: "Exam cell",
        image: Image9,
      },
      {
        title: "Exam cell",
        image: Image10,
      },
      {
        title: "Exam cell",
        image: Image11,
      },
      {
        title: "Exam cell",
        image: Image12,
      },
      {
        title: "Exam cell",
        image: Image13,
      },

  ];

  
  return (
    <div className="campus-life">
      <div className="second-cards-title">
        <h2>OUR HISTORY</h2>
      </div>

      <div className="cards-container" style={{ marginTop: 20 }}>
        {facilitiesData.map((e, index) => (
          <div className="card" key={index}>
            <img className="image" src={e.image} alt={`facility ${index}`} />
            {/* <a className="link" style={{ textTransform: "uppercase" }}>
              {e.title}
            </a> */}
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default History;
