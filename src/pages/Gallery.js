// History.js
import React from "react";
import pk from "../assets/pk.svg";
import ourStoryImg2 from "../assets/ourstory (2).jpeg";

const History = () => {
  return (
    <section className="panel theme--white text-justify px-4 mb-5">
      <header className="section-header text-center mb-3">
        <h2>OUR HISTORY</h2>
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

      <div className="history-section d-flex align-items-center mb-4">
        <div className="history-image-container">
          <img src={ourStoryImg2} alt="Historical Image" className="history-image img-fluid rounded" />
        </div>
        <div className="history-date-container mx-3">
          <h3 className="text-uppercase font-weight-bold">1960s - Establishment of AFPGMI</h3>
        </div>
        <div className="history-description">
          <ul>
            <li>The Army Medical Corps School evolved into the Armed Forces Post Graduate Medical Institute (AFPGMI), an advanced educational institution.</li>
            <li>Focus on modernized medical education and comprehensive postgraduate training.</li>
            <li>Expanded to include faculty members from various disciplines, integrating both military and civilian medical professionals.</li>
          </ul>
        </div>
      </div>

      <div className="history-section d-flex align-items-center mb-4">
        <div className="history-image-container">
          <img src={pk} alt="Pakistan Flag" className="history-image" />
        </div>
        <div className="history-date-container mx-3">
          <h3 className="text-uppercase font-weight-bold">1980s - Growth and Expansion</h3>
        </div>
        <div className="history-description">
          <ul>
            <li>The 1980s saw significant growth in the number of training programs offered.</li>
            <li>AFPGMI became a renowned institution for its research-based postgraduate courses.</li>
          </ul>
        </div>
      </div>

      <div className="history-image-container text-center">
        <img src={ourStoryImg2} alt="Historical Image" className="img-fluid rounded" />
      </div>
    </section>
  );
};

export default History;
