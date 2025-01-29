import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import cardOneImg from "../assets/1.jpg";
import cardTwoImg from "../assets/2.jpg";

const ResearchDepartments = () => {
  return (
    <div>
      <div className="mainTitle">  
        <h1>Research </h1>
      </div>
      <div className="researchDepartments">
        <div className="firstCards cardOne">
          <img src={cardOneImg} />
          <h2>
            Research Experience for <br /> Undergraduates 2024
          </h2>
          <p>
            The Aero/Astro Research Experience for Undergraduates (Aero/Astro
            REU) program is designed to give undergraduates the chance to work
            with faculty and their research groups on advanced research projects
            over the summer. Students who are accepted into the program will
            receive a stipend for their full-time research work.
            <br />
            <br />
            Full-time means devoting 35+ hours/week for 10 consecutive weeks,
            i.e., it is the student's primary activity that quarter. Program
            start date will be June 24 2024 program end date will be August 30
            2024 with the REU poster session being on the final week.
          </p>
          <button>APPLY HERE</button>
        </div>

        <div className="secondCards cardTwo">
          <img src={cardTwoImg} />
          <h2>AI makes a rendezvous in space</h2>
          <p>
            Uniting the complex mathematics of trajectory optimization with the
            powers of generative AI, aerospace engineers at  hope to put
            self-driving spacecraft within reach.
          </p>
          <button>
            Read More <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchDepartments;
