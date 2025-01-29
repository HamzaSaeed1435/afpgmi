import React from "react";
import AdmissonHeroImg from "../assets/4.jpg";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const AdmissonSubDetails = () => {
  const { id, _id } = useParams();
  const { state } = useLocation();

  return (
    <div className="admission-details">
      <header>
        {/* <h1 style={{ textTransform: "capitalize" }}> {id.replace("-", " ")} Acedemics</h1> */}
        <h1 style={{ textTransform: "capitalize" }}> {_id}</h1>
      </header>
      <div className="details">
        <p className="first-para">Provides you with the principles and techniques necessary for success and leadership in the conception, design, implementation, and operation of aerospace and related engineering systems.</p>
        <h2>What You'll Study</h2>
        <p className="second-para">The mission of the undergraduate program in Aeronautics and Astronautics Engineering is to provide students with the principles and techniques necessary for success and leadership in the conception, design, implementation, and operation of aerospace and related engineering systems.</p>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AdmissonSubDetails;
