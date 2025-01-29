import React, { useEffect, useState, useRef } from "react";
import MainImg1 from "../assets/1.jpg";
import MainImg2 from "../assets/2.jpg";
import MainImg3 from "../assets/3.jpg";
import MainImg4 from "../assets/4.jpg";
import messageImg from "../assets/messageImg.jpg";
import { useNavigate } from "react-router-dom";
import AnnouncementMarquee from "../components/AnnouncementMarquee";
import MainImage5 from "../assets/main-screen.jpeg"
const LandingScreen = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(0);
  const images = [MainImg4, MainImg3, MainImg2, MainImg1, MainImage5];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((e) => (e == images.length - 1 ? 0 : e + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <header className="Header" role="banner">
        <section className="panel-collection" data-modular-content-collection>
          <section className="panel theme--choco" data-type="splash-image" id="splash-screen" data-modular-content data-js="panel" data-index="0" data-scroll-type="parallax" data-logo-loc-v="middle" data-logo-loc-h="center" data-ga-category="Splash Panel">
            <p className={`afpgmi`}>{index === 1 ? " Armed Forces Post Graduate Medical Institute" : "AFPGMI"}</p>

            <div className="carousel-container">
              {images.map((image, idx) => (
                <img key={idx} className={`bg-img ${idx === index ? "active" : ""}`} role="presentation" alt="" src={image} style={{ width: "-webkit-fill-available", height: "100vh" }} />
              ))}
            </div>

            {offset === 0 && (
              <div className="marquee-container">
                <AnnouncementMarquee />
              </div>
            )}
          </section>
        </section>
      </header>

      <main id="main" role="main">
        <div className="cards-container" style={{ gridTemplateColumns: "repeat(2, 1fr)", paddingTop: 50, paddingBottom: 50 }}>
          <div className="card" style={{ background: "#f4f4f4" }}>
            <div style={{ padding: 20, minHeight: "35vh", textAlign: "center" }}>
              <h3 style={{textTransform:"uppercase"}}>Our Vision</h3>
              <p>Train students to come out as knowledgeable, disciplined, regimented and well-conversant Officers who by optimally utilizing resources, ensure quality assurance in patient care at the culmination of the courses and can actively promote implementation of the Laws of Medical Sciences in true letter and spirit for the betterment of patient care and safety</p>
            </div>
          </div>
          <div className="card" style={{ background: "#f4f4f4" }}>
            <div style={{ padding: 20, minHeight: "35vh", textAlign: "center" }}>
            <h3 style={{textTransform:"uppercase"}}>Our Mission</h3>

              {/* <img src={messageImg} style={{ float: "right", width: 250, paddingLeft: 20 }} /> */}
              {/* <h3>COMMANDANT'S MESSAGE</h3> */}
              <p>
              To provide medical education & professional development to student officers through quality training programs delivered by dedicated faculty utilizing training aids and best practice teaching methodologies
              </p>
              {/* <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingScreen;
