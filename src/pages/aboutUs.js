import React from "react";
import ourStoryImg2 from "../assets/ourstory (2).jpeg";
import pk from "../assets/pk.svg";
import "../css/about.css"; // Import the CSS file
import History from "./history"; // Import the History component
const AboutUs = () => {
  return (
    <div className="page-template-default page page-id-20180 page-parent">
      <main id="main" role="main">
        <h2 id="main-content" className="sr-only-element" tabIndex="-1">
          Main Content
        </h2>

        {/* Header Section */}
        <header className="section-header text-center mb-5">
          <h1 className="text-uppercase font-weight-bold">ARMED FORCES POST GRADUATE MEDICAL INSTITUTE</h1>
        </header>

        {/* About AFPGMI */}
        <section className="panel theme--white text-justify px-4 mb-5">
          <p>
            AFPGMI is a premier postgraduate medical institute of Pakistan Army committed to fostering a holistic learning experience that transcends traditional exams. It serves as an alma mater for healthcare professionals from both military and civilian cadres, dedicated to providing career training across various disciplines within AMC, ADC, and AFNS.
          </p>
          <p>
            AFPGMI stands as a beacon of research, epitomizing the pursuit of knowledge grounded in robust evidence and methodological rigor. It plays a pivotal role in reshaping research methodologies and nurturing a culture of critical appraisal, steering the learning trajectory toward greater reliability and relevance.
          </p>
        </section>

        {/* Key Points */}
        <section className="panel theme--white text-justify px-4 mb-5">
          <h2 className="text-center">KEY HIGHLIGHTS OF AFPGMI</h2>
          <ul className="list-none">
            <li>2nd largest Clinical Training Institute after CPSP</li>
            <li>62 clinical specialties</li>
            <li>40 Training Hospitals/Institutes</li>
            <li>307 Departments</li>
            <li>MSc (Healthcare Adm) - Oldest program in the country, adopted from Baylor University/US Army in 1981</li>
            <li>78 x Exams conducted every year at 12 x National & 6 x Global Centers</li>
            <li>College of Nursing offering training in 13 x Sub-Specialties (largest in the country)</li>
          </ul>
        </section>

        {/* Mission Section */}
        <section className="panel theme--white text-justify px-4 mb-5">
          <header className="section-header text-center mb-3">
            <h2>OUR MISSION</h2>
          </header>
          <p className="text-center">
          To provide med edn and professional dev to student offrs through quality trg progms del by dedicated faculty utilizing best prac teaching methodologies. 
          </p>
        </section>


            {/* Mission Section */}
            <section className="panel theme--white text-justify px-4 mb-5">
          <header className="section-header text-center mb-3">
            <h2>OUR VISION
            </h2>
          </header>
          <p className="text-center">
          Train students to come out as knowledgeable, disciplined, regimented and well-conversant offrs who by optimally utilizing resources, ensure qual assurance in patient care and can actively prom implementation of the Laws of Med Sciences for the betterment of patient care and safety 
          </p>
        </section>

        {/* History Section */}
        {/* <section className="panel theme--white text-justify px-4 mb-5">
          <header className="section-header text-center mb-3">
            <h2>Our History</h2>
          </header>
          <div className="history-section d-flex align-items-center mb-4">
            <div className="history-image-container">
              <img src={pk} alt="Pakistan Flag" className="history-image" />
            </div>
            <div className="history-date-container mx-3">
              <h3 className="text-uppercase font-weight-bold">1953</h3>
            </div>
            <div className="history-description">
              <ul>
                <li>Army Medical Corps School, Lahore</li>
              </ul>
            </div>
          </div>

          <div className="history-image-container text-center">
            <img src={ourStoryImg2} alt="Historical Image" className="img-fluid rounded" />
          </div>
        </section> */}

           {/* Including the History component */}
           <History />
      </main>
    </div>
  );
};

export default AboutUs;
