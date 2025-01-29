import React from "react";
import ourStoryImg1 from "../assets/history.jpeg";
import ourStoryImg2 from "../assets/ourstory (2).jpeg";
import ourStoryImg3 from "../assets/ourstory (3).jpeg";
import ourStoryImg4 from "../assets/ourstory (4).jpeg";
import ourStoryImg5 from "../assets/ourstory (5).jpeg";
import ourStoryImg6 from "../assets/ourstory (6).jpeg";
import ourStoryImg7 from "../assets/ourstory (7).jpeg";
import ourStoryImg8 from "../assets/ourstory (8).jpeg";
import ImageSlider from "../components/Slider";

import pk from "../assets/pk.svg";

const AboutUs = () => {
  return (
    <div className="page-template-default page page-id-20180 page-parent">
      <main id="main" role="main">
        <h2 id="main-content" className="sr-only-element" tabindex="-1">
          Main Content
        </h2>
        <section className="panel-collection departments" data-modular-content-collection>
          <header>
            <h1>OUR MISSION</h1>
          </header>
          <section className="panel theme--white" data-type="position-stmt" id="position-stmt-0" data-modular-content data-js="panel" data-index="0" data-width="full">
            <p>To provide medical education & professional development to student officers through quality training programs delivered by dedicated faculty utilizing training aids and best practice teaching methodologies</p>
          </section>

          <section className="panel theme--white" data-type="section" id="excellence-in-research-teaching-and-medical-care" data-modular-content data-js="panel" data-index="7">
            <header>
              <h2 className="center">OUR HISTORY</h2>
            </header>

            <div className="about-us-container">
              <div style={{ display: "flex" }}>
                <div className="about-us-img-container">
                  <img src={pk} style={{ height: "100px" }} />
                </div>
                <div className="about-us-date-container">
                  <ul>
                    <li>1953</li>
                  </ul>
                </div>
              </div>
              <div className="about-us-container-content">
                <ul>
                  <li> Army Medical Corps School, Lahore</li>
                </ul>
              </div>
              <img src={ourStoryImg2} className="about-us-container-content-img" style={{ height: "250px" }} />
            </div>

            <br />

            <div className="about-us-container">
              <div style={{ display: "flex" }}>
                <div className="about-us-img-container">
                  <img src={pk} style={{ height: "100px" }} />
                </div>
                <div className="about-us-date-container">
                  <ul>
                    <li style={{ marginBottom: 0 }}>1957</li>
                    <li>1959</li>
                  </ul>
                </div>
              </div>
              <div className="about-us-container-content">
                <ul>
                  <li style={{ marginBottom: 0 }}>Shifted to Rawalpindi</li>
                  <li>College of Nursing</li>
                </ul>
              </div>
              <ImageSlider imageContainerStyle={{ height: "250px", width: "500px" }} images={[ourStoryImg3, ourStoryImg4, ourStoryImg5]} />
              {/* <img src={ourStoryImg2} className="about-us-container-content-img" style={{ height: "250px" }} /> */}
            </div>

            <br />

            <div className="about-us-container">
              <div style={{ display: "flex" }}>
                <div className="about-us-img-container">
                  <img src={pk} style={{ height: "100px" }} />
                </div>
                <div className="about-us-date-container">
                  <ul>
                    <li> 1960</li>
                  </ul>
                </div>
              </div>
              <div className="about-us-container-content">
                <ul>
                  <li> Armed Forces Medical College</li>
                </ul>
              </div>
              <ImageSlider imageContainerStyle={{ height: "250px", width: "500px" }} images={[ourStoryImg6, ourStoryImg7]} />
            </div>
            <br />

            <div className="about-us-container">
              <div style={{ display: "flex" }}>
                <div className="about-us-img-container">
                  <img src={pk} style={{ height: "100px" }} />
                </div>
                <div className="about-us-date-container">
                  <ul>
                    <li> 1997</li>
                  </ul>
                </div>
              </div>
              <div className="about-us-container-content">
                <ul>
                  <li> Armed Forces Post Graduate Medical Institute</li>
                </ul>
              </div>
              <ImageSlider imageContainerStyle={{ height: "250px", width: "500px" }} images={[ourStoryImg8]} />
            </div>

            {/* <section className="panel theme--white" data-type="image-content" id="who-we-are" data-img-loc="left">
              <section>
                <figure className="landscape">
                  <img src={ourStoryImg1} />
                  <img src={ourStoryImg2} />
                </figure>
                <div className="content" style={{ minHeight: "70vh" }}>
                  <h3>1953 – Army Medical Corps School, Lahore</h3>
                  <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                </div>
              </section>
            </section> */}

            {/* <section className="panel theme--white" data-type="image-content" id="educating-tomorrows-global-citizens" data-img-loc="right">
              <section>
                <div className="content">
                  <h3>1957 – Shifted to Rawalpindi</h3>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum pass</p>
                </div>
                <figure className="landscape">
                  <ImageSlider images={[ourStoryImg3, ourStoryImg4, ourStoryImg5]} />
                </figure>
              </section>
            </section> */}

            {/* <section className="panel theme--white" data-type="image-content" id="creating-knowledge-in-an-environment-of-academic-freedom" data-img-loc="left">
              <section>
                <figure className="landscape">
                  <ImageSlider images={[ourStoryImg6, ourStoryImg7]} />
                </figure>
                <div className="content">
                  <h3>1960 – Armed Forces Medical College</h3>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum pass</p>
                </div>
              </section>
            </section> */}

            {/* <section className="panel theme--white" data-type="image-content" id="educating-tomorrows-global-citizens" data-img-loc="right">
              <section>
                <div className="content">
                  <h3>1997 – Armed Forces Post Graduate Medical Institute</h3>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum pass</p>
                </div>
                <figure className="landscape">
                  <ImageSlider images={[ourStoryImg8]} />
                </figure>
              </section>
            </section> */}
          </section>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
