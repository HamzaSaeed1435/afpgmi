import React from "react";
import { useNavigate } from "react-router-dom";
import AcademicImg from "../assets/4.jpg";
import MainImg3 from "../assets/3.jpg";
import MainImg1 from "../assets/1.jpg";
const Academics = () => {
  const navigate = useNavigate();
  const contentStyle = { textAlign: "center", fontSize: "1.5625em" };
  const iframeStyle = { display: "none", visibility: "hidden" };
  return (
    <div className="page-template page-template-landing-page page-template-landing-page-php page page-id-95 page-parent">
      <header>
        <h1>ACADEMICS</h1>
      </header>


      {/* <section className="panel" data-type="wysiwyg" id="academics-messaging" data-modular-content data-js="panel" data-index="0" data-width="content">
        <div className="content">
          <p style={contentStyle}>Students at AFPGMI are equipped with the skills, critical thinking abilities, and global perspective necessary to succeed in today's ever-evolving world</p>
        </div>
      </section> */}


      <figure data-text-loc-v="top" data-text-loc-h="left" data-text-display="hover">
        <picture>
          <source media="(max-width: 575px)" />
          <source media="(min-width: 576px)" />

          <img className="academicsHeroImg" alt="" src={AcademicImg} />
        </picture>
      </figure>

      <div className="cards-container" style={{ gridTemplateColumns: "repeat(2, 1fr)", paddingTop: 50, paddingBottom: 50 }}>
        <div className="card" style={{ background: "#f4f4f4" }} onClick={() => navigate("/academics/under-graduate")}>
          <img className="image" src={MainImg1} />
          <div style={{ padding: 20, textAlign: "center" }}>
            <h3 className="link-text">UNDERGRADUATE STUDIES</h3>

          </div>
        </div>
        <div className="card" style={{ background: "#f4f4f4" }} onClick={() => navigate("/academics/post-graduate")}>
          <img className="image" src={MainImg3} />

          <div style={{ padding: 20, textAlign: "center" }}>
            <h3 className="link-text">POSTGRADUATE STUDIES</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
