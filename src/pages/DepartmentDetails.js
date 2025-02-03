import React from "react";
import AdmissonHeroImg from "../assets/4.jpg";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import NewsImg1 from "../assets/1.jpg";
import exam1 from "../assets/exam/Slide1.JPG";
import exam2 from "../assets/exam/Slide2.JPG";

const DepartmentDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const getContent = () => {
    if (state?.index === 0) {
      return (
        <div style={{ padding: "0px 30px", marginBottom: "50px"}}>
          <table className="table-highlight">
            <thead>
              <tr>
                <th>Courses Offered</th>
                <th>Duration</th>
                <th>Frequency</th>
                <th>Type of Program</th>
              </tr>
            </thead>
            <tbody>
              {state?.data?.map((e, _) => (
                <tr key={_}>
                  <td style={{ width: 300 }}>{e.coursesOffered}</td>
                  <td>{e.duration}</td>
                  <td>{e.freq}</td>
                  <td>{e.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "30px", padding: "0px 30px" }}>
          {/* <h1 style="text-transform: uppercase; font-weight: 600; font-size: 28px;"> DEPARTMENT OF MANAGEMENT SCIENCES</h1> */}
          <h2 style={{ textTransform: "uppercase", fontWeight: 600, fontSize: "28px" }}>MSc (HEALTH CARE ADM)</h2>
            <ul>
              <li>Oldest and premier training program for HCAs in the city</li>
              <li>Important service milestone in the career progression of HCAs</li>
              <li>Aimed to formally train and develop future leadership to meet modern healthcare administration challenges</li>
              <li>Main focus of training:
                <ul>
                  <li>Enhancement of communication skills</li>
                  <li>Instilling leadership traits</li>
                </ul>
              </li>
              <li>Two-year program, under NUMS, once a year (35 - 40 Students)</li>
            </ul>
            <h2 style={{ textTransform: "uppercase", fontWeight: 600, fontSize: "28px" }}>PROFESSIONAL DEVELOPMENT COURSES FOR JUNIOR OFFICERS</h2>
            <ul>
              <li>HC Project Management</li>
              <li>HC Supply Chain Management</li>
              <li>HC Financial Management</li>
              <li>HC HRM & Leadership</li>
              <li>HC Inventory Management</li>
              <li>Health Informatics</li>
            </ul>
            <h2 style={{ textTransform: "uppercase", fontWeight: 600, fontSize: "28px" }}>Training Details:</h2>
            <ul>
              <li>First course was conducted in October 2023</li>
              <li>One course per month</li>
              <li>Three courses conducted till now</li>
            </ul>
          </div>
        </div>
      );
    } 
    else if (state?.index === 1) {
      return (
        <div style={{ padding: "0px 15px", marginBottom: "50px" }}>
          {/* Major Specialties - Clinical Sciences */}
          <div style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
              DEPARTMENT OF BASIC & CLINICAL SCIENCES
            </h2>
            <p style={{ textAlign: "justify" }}>
              The Department of Basic & Clinical Sciences provides comprehensive education and training in core medical sciences.
            </p>
          </div>

          <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
              DEPARTMENT OF ALLIED HEALTH SCIENCES
            </h2>
            <p style={{ textAlign: "justify" }}>
              This department focuses on providing high-quality training and education in allied health sciences.
            </p>
             
          <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
              POST GRADUATE PROGRAMS
            </h2>
    
            {/* Table for Post Graduate Programs */}
            <table className="table-highlight" style={{ width: "100%", marginBottom: "30px" }}>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Frequency</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FCPS / MCPS - CPSP</td>
                  <td>Varies</td>
                  <td>Once a year</td>
                  <td>Specialized</td>
                </tr>
                <tr>
                  <td>PhD (PATH) - NUMS</td>
                  <td>Varies</td>
                  <td>Once a year</td>
                  <td>Research</td>
                </tr>
                <tr>
                  <td>M PHIL - NUMS (Chemical Pathology, Oral Pathology)</td>
                  <td>2 years</td>
                  <td>Once a year</td>
                  <td>Research</td>
                </tr>
                <tr>
                  <td>DIP IN CARDIOLOGY - NUMS</td>
                  <td>Varies</td>
                  <td>Once a year</td>
                  <td>Specialized</td>
                </tr>
                <tr>
                  <td>MS (Transfusion Medicine) - NUMS</td>
                  <td>2 years</td>
                  <td>Once a year</td>
                  <td>Specialized</td>
                </tr>
              </tbody>
            </table>
   
          </div>
    
          <div style={{ marginTop: "40px" }}>
            <h4 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
              MAJOR SPECIALITIES - 31 (CLINICAL SCIENCES)
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Medicine</li>
                  <li>Pediatrics</li>
                  <li>Radiology</li>
                  <li>Dermatology</li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Psychiatry</li>
                  <li>Rehab Med</li>
                  <li>Nuclear Med</li>
                  <li>Emergency Med</li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>ENT</li>
                  <li>Family Med</li>
                  <li>Radio Oncology</li>
                  <li>Ophthalmology</li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Anaesthesia</li>
                  <li>Gynae/Obs</li>
                  <li>Gen Surgery</li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* Pathology Section */}
          <div style={{ marginTop: "40px" }}>
            <h4 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
              PATHOLOGY
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Histopathology</li>
                  <li>Chemical Pathology</li>
                  <li>Virology</li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Immunology</li>
                  <li>Hematology</li>
                  <li>Microbiology</li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* BMS Section */}
          <div style={{ marginTop: "40px" }}>
            <h4 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
              BMS (Basic Medical Sciences)
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Anatomy</li>
                  <li>Physiology</li>
                  <li>Biochemistry</li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Pharmacology</li>
                  <li>Community Medicine</li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* Dentistry Section */}
          <div style={{ marginTop: "40px" }}>
            <h4 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
              DENTISTRY
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Oral Maxillofacial Surgery</li>
                  <li>Prosthodontics</li>
                  <li>Orthodontics</li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Operative Dentistry</li>
                  <li>Periodontology</li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* Medicine & Allied Section */}
          <div style={{ marginTop: "40px" }}>
            <h4 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
              MEDICINE & ALLIED
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Cardiology</li>
                  <li>Pediatric Cardiology</li>
                  <li>Nephrology</li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Gastroenterology</li>
                  <li>Intensive Care / Critical Care Medicine</li>
                  <li>Pulmonology</li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Neurology</li>
                  <li>Neonatology</li>
                  <li>Clinical Hematology</li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* Allied Health Sciences Section */}
          <div style={{ marginTop: "40px" }}>
            <h4 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
              ALLIED HEALTH SCIENCES
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Med Lab Tech (MLT)</li>
                  <li>Cardiac Perfusion (CP)</li>
                  <li>Med Imaging Tech (MIT)</li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* Post Graduate Programs */}
          <div style={{ marginTop: "40px" }}>
            <h4 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
              POST GRADUATE PROGRAMS
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>FCPS / MCPS - CPSP</li>
                  <li>PhD (PATH) - NUMS</li>
                  <li>M PHIL - NUMS</li>
                  <li>DIP IN CARDIOLOGY - NUMS</li>
                  <li>MS (TRANSFUSION MEDICINE) - NUMS</li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* Sub Specialities */}
          <div style={{ marginTop: "40px" }}>
            <h4 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
              SUB SPECIALITIES - 31 (SURGERY & ALLIED)
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Cardiac Anaesthesia</li>
                  <li>Neuro Surgery</li>
                  <li>Orthopaedic Surgery</li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Cardiac Surgery</li>
                  <li>Urology</li>
                  <li>Laparoscopic Surgery</li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
                  <li>Pain Management</li>
                  <li>Breast Surgery</li>
                  <li>Vascular Surgery</li>
                </ul>
              </div>
            </div>
          </div>

                   {/* Media Query to add padding only for larger screens */}
                   <style jsx>{`
            @media (min-width: 768px) {
              div {
                padding-left: 10px;
              }
            }
          `}</style>
        </div>
      );
    }
    

    else if (state?.index === 2) {
      return (
        <div style={{ padding: "0px 30px", marginBottom: "50px" }}>
          <ul className="ol">
            {state?.data?.map((e, _) => (
              <li key={_} style={{ fontSize: "16px", marginBottom: "10px" }}>
                {e?.name}
                {e?.subData ? (
                  <ul style={{ listStyleType: "circle", marginLeft: 50 }} className="ol">
                    {e?.subData?.map((k, __) => (
                      <li key={__}>{k}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
    
          {/* New Content */}
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
              MASTERS IN PUBLIC HEALTH (MSPH)
            </h2>
            <p style={{ textAlign: "justify" }}>
              <strong>Two years program, under NUMS</strong><br />
              Once a year (30 Students)<br />
              Intensive Curriculum with subjects like Basic Public Health Sciences, Essential Managerial and Analytical Skills including Project Planning and Evaluation, Epidemiological Investigations, Health Systems Analysis and Research, Reproductive and Child Health, Environmental and Occupational Health, Disease Control.
            </p>
          </div>
    
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
              FD EPIDEMIOLOGY & LAB TRAINING PROGRAM (FELTP)
            </h2>
            <p style={{ textAlign: "justify" }}>
              <strong>Centre for Disease Control, Atlanta USA certification</strong><br />
              National Institute of Health, Islamabad<br />
              Two years program<br />
              Once a year (2 to 4 Students)<br />
              Focuses on Public Health Work, especially Field Epidemiology, Operations Research, and Program Evaluation.
            </p>
          </div>
    
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
              PREVENTIVE HEALTH ASSISTANT COURSE
            </h2>
            <p style={{ textAlign: "justify" }}>
              <strong>Basic Level (23 weeks)</strong><br />
              <strong>Mid Level (39 weeks)</strong><br />
              <strong>Advanced Level (42 weeks)</strong>
            </p>
          </div>
    
          {/* Media Query to add padding only for larger screens */}
          <style jsx>{`
            @media (min-width: 768px) {
              div {
                padding-left: 10px;
              }
            }
          `}</style>
        </div>
      );
    }
    
     else if (state?.index === 3) {
      return (
<div style={{ padding: "0px 30px", marginBottom: "50px" }}>
  <ul className="ol">
    {state?.data?.map((e, _) => (
      <li key={_}>
        {e?.name}
        {e?.subData ? (
          <ul style={{ listStyleType: "circle", marginLeft: 50 }} className="ol">
            {e?.subData?.map((k, __) => (
              <li key={__}>{k}</li>
            ))}
          </ul>
        ) : null}
      </li>
    ))}
  </ul>

  <div
    style={{
      display: "flex",
      gap: "30px",
      marginTop: "40px",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: "20px",
      maxWidth: "100%",
    }}
  >
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        width: "100%",
        maxWidth: "500px",
        height: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
        marginBottom: "20px", // For spacing on smaller screens
      }}
    >
      <img
        src={exam1}
        alt="Description1"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        width: "100%",
        maxWidth: "500px",
        height: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
        marginBottom: "20px", // For spacing on smaller screens
      }}
    >
      <img
        src={exam2}
        alt="Description2"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  </div>
</div>

      );
    } 
    if (state?.index === 4) {
      return (
        <div style={{ padding: "0px 30px", marginBottom: "50px" }}>
          <ul className="ol">
            {state?.data?.map((e, _) => (
              <li key={_} style={{ fontSize: "16px", marginBottom: "10px" }}>
                {e}
              </li>
            ))}
          </ul>
    
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
              COCHRANE CENTER (CEBHP)
            </h2>
            <p style={{ textAlign: "justify" }}>
              <strong>Established at AFPGMI in Oct 2023</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              To develop guidelines indigenous to AFs through systematic reviews and meta-analysis.
            </p>
            <p style={{ textAlign: "justify" }}>
              Collaboration with AKU for training of Master Trainers.
            </p>
            <p style={{ textAlign: "justify" }}>
              Subscription of GRADEpro software for guideline development.
            </p>
            <p style={{ textAlign: "justify" }}>
              400+ HCPs trained since Dec 2023.
            </p>
          </div>
    
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
              RESEARCH & DEVELOPMENT CELL
            </h2>
            <p style={{ textAlign: "justify" }}>
              <strong>Developed in Sep 2015 as a center of excellence at AFPGMI</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              For academic support for trainees in medical, dental, and nursing services in research projects.
            </p>
            <p style={{ textAlign: "justify" }}>
              Capacity building of academia by providing comprehensive research support services to students, faculty, and HCPs across Army.
            </p>
            <p style={{ textAlign: "justify" }}>
              Conducts research methodology workshops for various levels of trainees.
            </p>
            <p style={{ textAlign: "justify" }}>
              Preparation of dissertation/study projects for all trainees, including MSc (HCA), Grd Trainees & MSPH students.
            </p>
            <p style={{ textAlign: "justify" }}>
              Establishment of state-of-the-art research department incorporating various domains of research and development:
            </p>
            <ul style={{ textAlign: "justify" }}>
              <li>Cochrane Research</li>
              <li>Academic Research</li>
              <li>Ops & Mgmt Research</li>
              <li>Public Health Research</li>
              <li>Nursing Research</li>
              <li>Quality Assurance & Med Edn (QAME)</li>
            </ul>
          </div>
    
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
              DEWS CELL
            </h2>
            <p style={{ textAlign: "justify" }}>
              <strong>Established in Apr 2020</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              Nerve center of Medical Directorate by providing relevant insights regarding 33 primary DEWS diseases of outbreak potential for related decision-making.
            </p>
            <p style={{ textAlign: "justify" }}>
              Active surveillance of disease trends in AFs.
            </p>
            <p style={{ textAlign: "justify" }}>
              Comparative analysis of AFs disease trends with national and international trends through weekly and fortnightly DEWS reports.
            </p>
            <p style={{ textAlign: "justify" }}>
              Introduction of AI in DEWS app and trauma registries.
            </p>
            <p style={{ textAlign: "justify" }}>
              eDEWS Dashboard – Geo-tagging the accurate location of cases to monitor and curtail spread with smart interventions through GIS system.
            </p>
          </div>
    
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
              AUXILIARY DEPARTMENTS
            </h2>
            <p style={{ textAlign: "justify" }}>
              <strong>Established at AFPGMI in Oct 2023</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              To develop guidelines indigenous to AFs through systematic reviews and meta-analysis.
            </p>
            <p style={{ textAlign: "justify" }}>
              Collaboration with AKU for training of Master Trainers.
            </p>
            <p style={{ textAlign: "justify" }}>
              Development in Sep 2015 as a center of excellence at AFPGMI for academic support for trainees in medical, dental, and nursing services in research projects.
            </p>
            <p style={{ textAlign: "justify" }}>
              Establishment in Apr 2020 to monitor the Covid-19 pandemic in AFs, with active surveillance of 33 primary DEWS diseases and comparative analysis with national and international trends.
            </p>
            <p style={{ textAlign: "justify" }}>
              Process of systematic evaluation of all aspects of education programs by involving all key stakeholders. Focus on curriculum quality, teaching staff quality, faculty development, and self-assessment processes.
            </p>
          </div>
                {/* Media Query to add padding only for larger screens */}
                <style jsx>{`
            @media (min-width: 768px) {
              div {
                padding-left: 10px;
              }
            }
          `}</style>
        </div>
      );
    }
    
   
    
     else if (state?.index === 5) {
      return (
        <div style={{ padding: "0px 30px" }}>
          <ul className="ol" style={{ columnCount: 1 }}>
            {state?.data?.map((e, _) => (
              <li key={_}>
                {e?.name}
                {e?.subData ? (
                  <ul style={{ listStyleType: "circle", marginLeft: 50 }} className="ol">
                    {e?.subData?.map((k, __) => (
                      <li key={__}>{k}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (state?.index === 6) {
      return (
        <div style={{ padding: "0px 30px" }}>
          <ul className="ol">
            {state?.data?.map((e, _) => (
              <li style={{}} key={_}>
                {e?.name}
                {e?.subData ? (
                  <ul style={{ listStyleType: "circle", marginLeft: 50 }} className="ol">
                    {e?.subData?.map((k, __) => (
                      <li key={__}>{k}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (state?.index === 7) {
      return (
        <div style={{ padding: "0px 30px", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "15px", textTransform: "uppercase", color: "#333" }}>
            College of Nursing - Training Programs
          </h2>
          
          <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#444" }}>Degree Programs</h3>
          <ul>
            <li>BSc (Nursing) - 4 years, once a year under NUMS</li>
            <li>Post RN BSc - 2 years, once a year (for officers commissioned before 2011)</li>
            <li>MSN - 2 years, started in 2022, once a year under NUMS</li>
          </ul>
          
          <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#444" }}>Post Basic Specialties (13 Fields)</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
            <ul>
              <li>Intensive Care</li>
              <li>Mental Health</li>
              <li>Nephro/Urology</li>
              <li>Anesthesia</li>
              <li>BM Transplant</li>
              <li>Cardiac ITC</li>
              <li>Trauma & Emergency</li>
            </ul>
            <ul>
              <li>Pediatrics</li>
              <li>OT</li>
              <li>Oncology</li>
              <li>Rehab Med</li>
              <li>Surgical Burns</li>
              <li>Cardiac Electrophysiology</li>
            </ul>
          </div>
          
          <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#444" }}>Military & Diploma Courses</h3>
          <ul>
            <li>Basic Military Training (BMT) - 6 weeks, once a year</li>
            <li>Midcareer Course (MCC) - 12 weeks, thrice a year</li>
            <li>Snr AFNS Officers Management Course - 6 weeks, once a year</li>
            <li>Diploma in Midwifery Nursing - 52 weeks, once a year</li>
            <li>Diploma in Post Basic Specialties - 52 weeks, once a year</li>
          </ul>
          
          <h2 style={{ fontSize: "26px", fontWeight: "bold", marginTop: "30px", textTransform: "uppercase", color: "#333" }}>
            College of Nursing, AFPGMI
          </h2>
          <p style={{ textAlign: "justify" }}>
            Established in 1960, the College of Nursing has a long-standing tradition of excellence in nursing education.
            Our programs are designed to nurture compassionate and highly skilled professionals who uphold the highest standards
            in patient care. With a legacy spanning decades, we continue to evolve, adapting our curriculum to meet modern healthcare demands.
          </p>
          
          <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#444" }}>Affiliations</h3>
          <ul>
            <li>MSN, BSN (Generic) & Post RN BSN degree programs - Affiliated with NUMS</li>
            <li>Post Basic Specialized Courses & Midwifery Nursing - Affiliated with NEBP, Lahore</li>
            <li>Pre-Enrolment & Registration - Recognized by PNC, Islamabad</li>
          </ul>

                         {/* Media Query to add padding only for larger screens */}
                         <style jsx>{`
            @media (min-width: 768px) {
              div {
                padding-left: 10px;
              }
            }
          `}</style>
        </div>
      );
    }
    
  };

  const isTitleBold = state?.name === "Quality Assurance in Medical Education Department (QAME)";

  return (
    <div className="admission-details">
      <header>
        <h1 style={{ textTransform: "uppercase", fontWeight: isTitleBold ? 800 : 600, fontSize: "28px" }}> {state?.name}</h1>
      </header>

      <div style={{ position: "relative", marginTop: "15px",  }}>
        {getContent()}
        {/* <img src={NewsImg1} className="img-overlay-container-img" /> */}
      </div>
    </div>
  );
};

export default DepartmentDetails;
