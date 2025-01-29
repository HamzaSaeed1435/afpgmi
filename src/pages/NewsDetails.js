import React from "react";
import { useLocation } from "react-router-dom";
import NewsImg1 from "../assets/1.jpg";

const NewsDetails = () => {
  const { state } = useLocation();
  return (
    <>
      <div className="page-template page-template-landing-page page-template-landing-page-php page page-id-2250">
        <main id="main" role="main">
          <header>
            <h1>{state?.title}</h1>
          </header>
          <section className="panel" data-type="wysiwyg" id="news-messaging" data-modular-content data-js="panel" data-index="0" data-width="content">
            <div className="content">
              <p>Train students to come out as knowledgeable, disciplined, regimented and well-conversant Officers who by optimally utilizing resources, ensure quality assurance in patient care at the culmination of the courses and can actively promote implementation of the Laws of Medical Sciences in true letter and spirit for the betterment of patient care and safetyI</p>
              <img src={NewsImg1} style={{ height: "50vh", width: "100%" }} />
              <br />
              <br />
              <br />
              <div class="fr-element article-content fr-view mt-[50px] ">
                <span
                  style={{
                    fontFamily: "Source Serif Pro",
                    fontWeight: 400,
                    color: "rgb(46, 45, 41)",
                    fontSize: "120px",
                    display: "block",
                    padding: " 0px 0.05em 0px 0px",
                    marginTop: "-50px",
                    letterSpacing: "normal",
                    float: "left",
                    height: "150px",
                  }}
                >
                  K
                </span>
                <p id="isPasted">
                  <strong>athy Ho tries to see </strong>
                  every new teen on her list within 72 hours of their arrival. For some, it’s too soon, or they’re too sick. But for others, she is a beacon of normalcy. Ho teaches high school inside Lucile Packard Children’s Hospital Stanford (LPCH). “Sometimes I don’t like saying that I’m a teacher,” says Ho, MA ’94. “People get in their minds an idea of what teachers do, and I’m like, ‘That is not what I do. That’s not really what it is here.
                </p>
              </div>
              <br />
              <p>About half of Ho’s students stay for a week or less; others are there for more than a year. LPCH serves some of the nation’s most critically ill patients and performs more open-heart surgeries and kidney transplants than any other children’s hospital in the country. Since 1924, when the hospital school opened—and even in the 27 years that Ho has been at LPCH—patient outcomes have significantly improved. Put simply, the vast majority of even her sickest students will survive. Which means that preparing very ill children to return to school is an increasingly important component of care.</p>
              <header>
                <h1 style={{textAlign: "left", textTransform: "capitalize"}}>{state?.desc}</h1>
              </header>
              <p>About half of Ho’s students stay for a week or less; others are there for more than a year. LPCH serves some of the nation’s most critically ill patients and performs more open-heart surgeries and kidney transplants than any other children’s hospital in the country. Since 1924, when the hospital school opened—and even in the 27 years that Ho has been at LPCH—patient outcomes have significantly improved. Put simply, the vast majority of even her sickest students will survive. Which means that preparing very ill children to return to school is an increasingly important component of care.</p>

            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default NewsDetails;
