import React from "react";
import "./campusLife.css";
import ImageOne from "../assets/1.jpg";
import ImageTwo from "../assets/2.jpg";
import ImageThree from "../assets/3.jpg";
import ImageFour from "../assets/4.jpg";
import FARUQI1 from "../assets/FARUQI-1.jpeg";
import FARUQI2 from "../assets/FARUQI-2.jpg";
import FARUQI3 from "../assets/FARUQI-3.jpg";
import FARUQI4 from "../assets/FARUQI-4.jpg";
import FARUQI5 from "../assets/FARUQI-5.jpg";
import ImageSlider from "../components/Slider";
import examCell from "../assets/exam-cell.jpg";
import nursing1 from "../assets/nursing-1.jpeg";
import nursing2 from "../assets/nursing-2.jpeg";
import nursing3 from "../assets/nursing-3.jpeg";
import nursing4 from "../assets/nursing-4.jpeg";
import training1 from "../assets/training-1.jpeg";
import training2 from "../assets/training-2.jpeg";
import training3 from "../assets/training-3.jpeg";
import training4 from "../assets/training-4.jpeg";
import training5 from "../assets/training-5.jpeg";
import training6 from "../assets/training-6.jpeg";
import training7 from "../assets/training-7.jpeg";
import Institute1 from "../assets/Institute-1.jpeg";
import Institute2 from "../assets/Institute-2.jpeg";
import Institute3 from "../assets/Institute-3.jpeg";
import Institute4 from "../assets/Institute-4.jpeg";
import Institute5 from "../assets/Institute-5.jpeg";

import conference1 from "../assets/conference-1.jpg";
import conference2 from "../assets/conference-2.jpg";
import conference3 from "../assets/conference-3.jpg";
import conference4 from "../assets/conference-4.jpg";
import conference5 from "../assets/conference-5.jpg";

import nursingHostel1 from "../assets/nursing-hostel-1.jpeg";
import nursingHostel2 from "../assets/nursing-hostel-2.jpeg";

const CampusLife = ({ src, title }) => {
  const cardsData = [
    {
      title: "Announcment",
      description: "Academic Schedule updated for Spring and Summer Semesters at NBC",
      src: ImageOne,
      date: "17",
      month: "june",
    },
    {
      title: "Webinars",
      description: "Academic Schedule updated for Spring and Summer Semesters at NBC",
      src: ImageTwo,
      date: "17",
      month: "june",
    },
    {
      title: "Announcments",
      description: "Academic Schedule updated for Spring and Summer Semesters at NBC",
      src: ImageThree,
      date: "17",
      month: "june",
    },
    {
      title: "Announcments",
      description: "Academic Schedule updated for Spring and Summer Semesters at NBC",
      src: ImageFour,
      date: "17",
      month: "june",
    },
  ];

  const facilitiesData = [
    {
      title: "Institute Library",
      image: [Institute1, Institute2, Institute3, Institute4, Institute5],
    },
    {
      title: "Faruqi Auditorium",
      image: [FARUQI1, FARUQI3, FARUQI4, FARUQI5],
    },
    {
      title: "Conference Room",
      image: [conference1, conference2, conference4, conference5],
    },
    {
      title: "Training Wing",
      image: [training1, training2, training3, training4, training5, training6, training7],
    },
    {
      title: "Exam cell",
      image: [examCell],
    },
    {
      title: "College of nursing",
      image: [nursing1, nursing2, nursing3, nursing4],
    },
    {
      title: " Nursing Cadets Hostel",
      image: [nursingHostel1, nursingHostel2],
    },
  ];

  return (
    <div className="campus-life">
      <div className="second-cards-title">
        <h2>FACILITIES AND AMENITIES</h2>
      </div>

      <div className="cards-container" style={{ marginTop: 20 }}>
        {facilitiesData.map((e, index) => (
          <div className="card" key={index}>
            <ImageSlider images={e.image} timer={5000} showArrows={false} imageContainerStyle={{ minHeight: 400 }} />
            {/* <img className="image" src={e.image} alt={`e ${index}`} /> */}
            <a className="link" style={{ textTransform: "uppercase" }}>
              {e.title}
            </a>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default CampusLife;
