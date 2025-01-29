import React from "react";
import AdmissonHeroImg from "../assets/4.jpg";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import NewsImg1 from "../assets/1.jpg";

const AcedmicsDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const title = state?.title;

  const isNumbered = title == "major-specialties" || title == "sub-specialties"

  const getContent = () => {
    if (title === "MASTERS IN PUBLIC HEALTH (MSPH)" || title==="BS ALLIED HEALTH SCIENCES") {
      const formatted = [...state?.data];
      formatted.shift();

      // formatted
      return (
        <>
          <ul style={{ columnCount: 2 }} className="ol">
            <li style={{}}>{formatted[0]}</li>
          </ul>
          <ul style={{ listStyleType: "circle", marginLeft: 50 }} className="ol">
            {formatted?.map((e, i) => (i == 0 ? null : <li>{e}</li>))}
          </ul>
        </>
      );
    }

    return (
      <ul style={{ columnCount: 2, listStyleType: isNumbered ?  "numbered" :"initial" }} className="ol">
        {state?.data?.map((e, i) => (i == 0 ? null : <li style={{}}>{e}</li>))}
      </ul>
    );
  };

  return (
    <div className="admission-details">
      <header>
        <h1 style={{ textTransform: "uppercase" }}> {title}</h1>
      </header>
      <br />

      <div style={{ position: "relative", marginTop: 20 }}>
        <div className="img-overlay-container" style={{ width: title ==="sub-specialties" ? "80%" : "70%" }}>
          {getContent()}
        </div>
        <img src={NewsImg1} className="img-overlay-container-img" style={title == "sub-specialties" ? {height: "100vh"} :{height: "90vh"}} />
      </div>
    </div>
  );
};

export default AcedmicsDetails;
