import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AcademicsDetailsImg from "../assets/1.jpg";

const AcademicsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = {
    "under-graduate": ["BS ALLIED HEALTH SCIENCES", "4 x years BS Program under NUMS", "Medical Laboratory Technology", "Cardiac Perfusion Technology", "Medical Imaging Technology"],
    "post-graduate": ["MASTERS IN PUBLIC HEALTH (MSPH)", "Two years program, under NUMS", "Intensive Curriculum", "Basic Public Health Sciences ", "Essential Managerial and Analytical Skills including Project Planning and Evaluation", "Epidemiological Investigations", "Health System Analysis and Research", "Reproductive and Child Health ", "Environment and Occupational Health ", "Disease Control"],
    "major-specialties": ["Medicine", "Paediatrics", "Rehabilitation Medicine", "Psychiatry", "Dermatology", "Community Medicine", "Pathology", "Nuclear Medicine", "General Surgery", "Anaesthesia", "Gynaecology / Obstetrics", "Ophthalmology", "Diagnostic Radiology", "Radiotherapy", "Otorhinolaryngology", "Medicine", "Dentistry"],
    "sub-specialties": ["Cardiology", "Nephrology", "Medical Oncology", "Gastroenterology", "Neurology", "Neonatology", "Pulmonology", "Intensive Care Medicine", "Cardiothoracic Anaesthesia", "Traumatology", "Paediatric Surgery", "Burn / Plastic Surgery", "Neuro Surgery", "Cardiac Surgery", "Thoracic Surgery", "Orthopaedic Surgery", "Vitreo - Retinal Surgery", "Oculoplastic Surgery", "Laparoscopic Surgery", "PhD  -  NUMS", "M Phil -  NUMS ", "Diploma in Cardiology -  NUMS", "MASTERS OF NURSING (MSN) ", "Cardiology", "Urology"],
  };

  return (
    <div className="departments">
      <header>
        <h1 style={{ textTransform: "uppercase" }}> {id.replace("-", "")} STUDIES</h1>
      </header>

      {id === "post-graduate" ? (
        <div className="cards-container" style={{ marginTop: 20 }}>
          {["MASTERS IN PUBLIC HEALTH (MSPH)", "major-specialties", "sub-specialties"].map((e, l) => (
            <div className="card" style={{ cursor: "pointer", textAlign: "center" }} onClick={() => navigate(`/academics/${id}/details`, { state: { data: l == 0 ? data["post-graduate"] : data[e], title: e } })}>
              <article style={{ width: "100%" }}>
                <img src={AcademicsDetailsImg} style={{}} />
                <div className="content">
                  <div className="post-meta">
                    <h3 className="post-category" style={{ textTransform: "uppercase" }}>
                      {l === 0 ? data[id][0] : e}
                    </h3>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      ) : (
        <div className="cards-container" style={{ marginTop: 20 }}>
          <div className="card" style={{ cursor: "pointer", textAlign: "center" }} onClick={() => navigate(`/academics/${id}/details`, { state: { data: data[id], title: data[id][0] } })}>
            <article style={{ width: "100%" }}>
              <img src={AcademicsDetailsImg} style={{}} />
              <div className="content">
                <div className="post-meta">
                  <h3 className="post-category" style={{ textTransform: "uppercase" }}>
                    {data[id][0]}
                  </h3>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicsDetails;
