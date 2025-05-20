import React, { useEffect, useState, useRef } from "react";
import MainImg1 from "../assets/1.jpg";
import MainImg2 from "../assets/2.jpg";
import MainImg3 from "../assets/3.jpg";
import MainImg4 from "../assets/4.jpg";
import messageImg from "../assets/DSC_12921.jpg";
import { useNavigate } from "react-router-dom";
import AnnouncementMarquee from "../components/AnnouncementMarquee";
import MainImage5 from "../assets/main-screen.jpeg"
const LandingScreen = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(0);
  const images = [MainImg4, MainImg3, MainImg2, MainImg1, MainImage5];
  const [isLoaded, setIsLoaded] = useState(false)
  // const [messageImg, setMessageImg] = useState(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
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

      <main
      id="main"
      role="main"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "64px 16px",
        background: "linear-gradient(to bottom, #f8fafc, #ffffff)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
          alignItems: "center",
        }}
      >
        {/* Vision Card */}
        <div
          style={{
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
            transition: "all 0.4s ease",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "white",
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            opacity: isLoaded ? 1 : 0,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 45, 114, 0.15)"
            e.currentTarget.style.transform = "translateY(-5px)"
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.08)"
            e.currentTarget.style.transform = "translateY(0)"
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #002d72, #004299)",
              padding: "20px",
              textAlign: "center",
              color: "white",
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 70%)",
              }}
            ></div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: 0,
                position: "relative",
              }}
            >
              Our Vision
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
              textAlign: "center",
              background: "linear-gradient(to bottom, #ffffff, #f8fafc)",
            }}
          >
            <p
              style={{
                lineHeight: "1.8",
                color: "#334155",
                margin: 0,
                fontSize: "1.05rem",
              }}
            >
              Train students to come out as knowledgeable, disciplined, regimented and well-conversant Officers who by
              optimally utilizing resources, ensure quality assurance in patient care at the culmination of the courses
              and can actively promote implementation of the Laws of Medical Sciences in true letter and spirit for the
              betterment of patient care and safety
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transform: isLoaded ? "scale(1)" : "scale(0.9)",
            opacity: isLoaded ? 1 : 0,
            transition: "all 0.6s ease",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "320px",
              height: "320px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Decorative rings */}
            <div
              style={{
                position: "absolute",
                width: "340px",
                height: "340px",
                borderRadius: "50%",
                border: "2px dashed rgba(0, 45, 114, 0.3)",
                animation: "spin 60s linear infinite",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "380px",
                height: "380px",
                borderRadius: "50%",
                border: "1px solid rgba(0, 45, 114, 0.15)",
              }}
            ></div>

            {/* Main image container */}
            <div
              style={{
                width: "300px",
                height: "350px",
                borderRadius: "20px",
                border: "4px solid #002d72",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0, 45, 114, 0.25)",
                position: "relative",
                zIndex: 2,
              }}
            >
              <img
                src={messageImg || "/placeholder.svg"}
                alt="Medical Education"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                }}
              />
            </div>

            {/* Decorative elements */}
            <div
              // style={{
              //   position: "absolute",
              //   top: "-15px",
              //   left: "50%",
              //   transform: "translateX(-50%)",
              //   width: "80px",
              //   height: "30px",
              //   background: "#002d72",
              //   borderRadius: "15px",
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              //   zIndex: 3,
              // }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "white",
                  marginRight: "8px",
                }}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "white",
                  marginRight: "8px",
                }}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "white",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div
          style={{
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
            transition: "all 0.4s ease",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "white",
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            opacity: isLoaded ? 1 : 0,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 45, 114, 0.15)"
            e.currentTarget.style.transform = "translateY(-5px)"
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.08)"
            e.currentTarget.style.transform = "translateY(0)"
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #002d72, #004299)",
              padding: "20px",
              textAlign: "center",
              color: "white",
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 70%)",
              }}
            ></div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: 0,
                position: "relative",
              }}
            >
              Our Mission
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
              textAlign: "center",
              background: "linear-gradient(to bottom, #ffffff, #f8fafc)",
            }}
          >
            <p
              style={{
                lineHeight: "1.8",
                color: "#334155",
                margin: 0,
                fontSize: "1.05rem",
              }}
            >
              To provide medical education & professional development to student officers through quality training
              programs delivered by dedicated faculty utilizing training aids and best practice teaching methodologies
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
    </div>
  );
};

export default LandingScreen;
