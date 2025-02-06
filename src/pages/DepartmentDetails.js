import React from "react";
import AdmissonHeroImg from "../assets/4.jpg";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import NewsImg1 from "../assets/1.jpg";
import exam1 from "../assets/exam/Slide1.JPG";
import exam2 from "../assets/exam/Slide2.JPG";
import picture1 from "../assets/Picture1.png";
import picture2 from "../assets/Picture2.png";
import AuxDepart from "../assets/WhatsApp Image 2025-02-06 at 12.15.07_68549c27.jpg";
import downCell from "../assets/downcell.jpg";
import chochrane from "../assets/chochrane.jpg";
import research from "../assets/research.jpg";
import qame from "../assets/QAME.jpg";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg";
import seven from "../assets/seven.jpg";

import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four4 from "../assets/four.jpg";

import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
import f from "../assets/f.jpg";
import g from "../assets/g.jpg";
import h from "../assets/h.jpg";

const DepartmentDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const getContent = () => {
    const styles = {
      container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "emoji",
      },
      card: {
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        marginBottom: "20px",
        overflow: "hidden",
        transition: "transform 0.3s ease",
      },
      cardHover: {
        transform: "scale(1.02)",
      },
      cardHeader: {
        backgroundColor: "#f4f4f4",
        padding: "15px",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        alignItems: "center",
      },
      headerTitle: {
        fontSize: "30px",
        fontWeight: "bold",
        color: "#002d72cc",
      },
      cardContent: {
        padding: "20px",
      },
      imageContainer: {
        width: "100%",
        height: "250px",
        objectFit: "cover",
      },
      list: {
        paddingLeft: "20px",
        lineHeight: "1.6",
      },
      detailImage: {
        width: "100%",
        marginTop: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      },
    };
    const images = [
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
      picture1,
    ];

    if (state?.index === 0) {
      // return (
      //   <div style={styles.container}>
      //     {/* Courses Overview Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>Courses Overview</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[0]}
      //           alt="Courses Overview"
      //           style={styles.imageContainer}
      //         />
      //         <h2
      //           style={{
      //             textTransform: "uppercase",
      //             fontWeight: 600,
      //             fontSize: "24px",
      //             marginBottom: "15px",
      //             color: "#34495e",
      //           }}
      //         >
      //           Course Details
      //         </h2>
      //         <ul style={styles.list}>
      //           {state?.data?.map((course, index) => (
      //             <li key={index}>
      //               {course.coursesOffered} - {course.duration} - {course.type}
      //             </li>
      //           ))}
      //         </ul>
      //       </div>
      //     </div>

      //     {/* MSc Healthcare Administration */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>MSc (HEALTH CARE ADM)</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[1]}
      //           alt="Healthcare Administration"
      //           style={styles.imageContainer}
      //         />
      //         <h2
      //           style={{
      //             textTransform: "uppercase",
      //             fontWeight: 600,
      //             fontSize: "24px",
      //             marginBottom: "15px",
      //             color: "#34495e",
      //           }}
      //         >
      //           Program Details
      //         </h2>
      //         <ul style={styles.list}>
      //           <li>
      //             Oldest and premier training program for HCAs in the city
      //           </li>
      //           <li>
      //             Important service milestone in career progression of HCAs
      //           </li>
      //           <li>
      //             Aimed to formally train and develop future leadership to meet
      //             modern healthcare administration challenges
      //           </li>
      //           <li>
      //             Main focus of training:
      //             <ul>
      //               {" "}
      //               <li>Enhancement of communication skills</li>
      //               <li>Instilling leadership traits</li>
      //             </ul>
      //           </li>
      //           <li>
      //             Two-year program under NUMS, annual intake (35-40 students)
      //           </li>
      //         </ul>
      //       </div>
      //     </div>

      //     {/* Professional Development Courses */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>
      //           Professional Development Courses
      //         </span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[2]}
      //           alt="Professional Development"
      //           style={styles.imageContainer}
      //         />
      //         <h2
      //           style={{
      //             textTransform: "uppercase",
      //             fontWeight: 600,
      //             fontSize: "24px",
      //             marginBottom: "15px",
      //             color: "#34495e",
      //           }}
      //         >
      //           FOR JUNIOR OFFICERS
      //         </h2>
      //         <div style={{ display: "flex" }}>
      //           <ul style={styles.list}>
      //             <li>HC Project Management</li>
      //             <li>HC Supply Chain Management</li>
      //             <li>HC Financial Management</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>HC HRM & Leadership</li>
      //             <li>HC Inventory Management</li>
      //             <li>Health Informatics</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // );
      return (
        <>
          <div style={styles.container}>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                {/* Main Department Image */}
                <img
                  src={images[0]}
                  alt="Department Image"
                  style={styles.imageContainer}
                />
                {/* Detail Department Image */}
                <img
                  src={one}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={two}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={three}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={four4}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
          </div>
        </>
      );
    } else if (state?.index === 1) {
      // return (
      //   <div style={styles.container}>
      //     {/* Department of Basic & Clinical Sciences */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>
      //           DEPARTMENT OF BASIC & CLINICAL SCIENCES
      //         </span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[0]} // Replace with your image
      //           alt="Basic & Clinical Sciences"
      //           style={styles.imageContainer}
      //         />
      //         <p style={{ textAlign: "justify", marginBottom: "15px" }}>
      //           The Department of Basic & Clinical Sciences provides
      //           comprehensive education and training in core medical sciences.
      //         </p>
      //       </div>
      //     </div>

      //     {/* Department of Allied Health Sciences */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>
      //           DEPARTMENT OF ALLIED HEALTH SCIENCES
      //         </span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[1]} // Replace with your image
      //           alt="Allied Health Sciences"
      //           style={styles.imageContainer}
      //         />
      //         <p style={{ textAlign: "justify", marginBottom: "15px" }}>
      //           This department focuses on providing high-quality training and
      //           education in allied health sciences.
      //         </p>
      //       </div>
      //     </div>

      //     {/* Post Graduate Programs */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>POST GRADUATE PROGRAMS</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[2]} // Replace with your image
      //           alt="Post Graduate Programs"
      //           style={styles.imageContainer}
      //         />
      //         <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
      //           <ul style={styles.list}>
      //             <li>FCPS / MCPS - CPSP | Varies | Specialized </li>
      //             <li>PhD (PATH) - NUMS | Varies | Research</li>
      //             <li>M PHIL - NUMS | 2 years | Research </li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>DIP IN CARDIOLOGY - NUMS | Varies | Specialized</li>
      //             <li>
      //               MS (TRANSFUSION MEDICINE) - NUMS | 2 years | Specialized
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>

      //     {/* Major Specialties - Clinical Sciences */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>
      //           MAJOR SPECIALTIES - 31(CLINICAL SCIENCES)
      //         </span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[3]} // Replace with your image
      //           alt="Clinical Sciences"
      //           style={styles.imageContainer}
      //         />
      //         <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
      //           <ul style={styles.list}>
      //             <li>Medicine</li>
      //             <li>Pediatrics</li>
      //             <li>Radiology</li>
      //             <li>Dermatology</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>Psychiatry</li>
      //             <li>Rehab Med</li>
      //             <li>Nuclear Med</li>
      //             <li>Emergency Med</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>ENT</li>
      //             <li>Family Med</li>
      //             <li>Radio Oncology</li>
      //             <li>Ophthalmology</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>

      //     {/* Pathology Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>PATHOLOGY</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[4]} // Replace with your image
      //           alt="Pathology"
      //           style={styles.imageContainer}
      //         />
      //         <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
      //           <ul style={styles.list}>
      //             <li>Histopathology</li>
      //             <li>Chemical Pathology</li>
      //             <li>Virology</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>Immunology</li>
      //             <li>Hematology</li>
      //             <li>Microbiology</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>

      //     {/* BMS Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>
      //           BMS (BASIC MEDICAL SCIENCES)
      //         </span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[5]} // Replace with your image
      //           alt="Basic Medical Sciences"
      //           style={styles.imageContainer}
      //         />
      //         <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
      //           <ul style={styles.list}>
      //             <li>Anatomy</li>
      //             <li>Physiology</li>
      //             <li>Biochemistry</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>Pharmacology</li>
      //             <li>Community Medicine</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>

      //     {/* Dentistry Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>DENTISTRY</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[6]} // Replace with your image
      //           alt="Dentistry"
      //           style={styles.imageContainer}
      //         />
      //         <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
      //           <ul style={styles.list}>
      //             <li>Oral Maxillofacial Surgery</li>
      //             <li>Prosthodontics</li>
      //             <li>Orthodontics</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>Operative Dentistry</li>
      //             <li>Periodontology</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>

      //     {/* Medicine & Allied Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>MEDICINE & ALLIED</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[7]} // Replace with your image
      //           alt="Medicine & Allied"
      //           style={styles.imageContainer}
      //         />
      //         <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
      //           <ul style={styles.list}>
      //             <li>Cardiology</li>
      //             <li>Pediatric Cardiology</li>
      //             <li>Nephrology</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>Gastroenterology</li>
      //             <li>Intensive Care / Critical Care Medicine</li>
      //             <li>Pulmonology</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>Neurology</li>
      //             <li>Neonatology</li>
      //             <li>Clinical Hematology</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>

      //     {/* Allied Health Sciences Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>ALLIED HEALTH SCIENCES</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[8]} // Replace with your image
      //           alt="Allied Health Sciences"
      //           style={styles.imageContainer}
      //         />
      //         <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
      //           <ul style={styles.list}>
      //             <li>Med Lab Tech (MLT)</li>
      //             <li>Cardiac Perfusion (CP)</li>
      //             <li>Med Imaging Tech (MIT)</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>

      //     {/* Sub Specialties - Surgery & Allied */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>
      //           SUB SPECIALTIES - SURGERY & ALLIED
      //         </span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[9]} // Replace with your image
      //           alt="Surgery & Allied"
      //           style={styles.imageContainer}
      //         />
      //         <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
      //           <ul style={styles.list}>
      //             <li>Cardiac Anaesthesia</li>
      //             <li>Neuro Surgery</li>
      //             <li>Orthopaedic Surgery</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>Cardiac Surgery</li>
      //             <li>Urology</li>
      //             <li>Laparoscopic Surgery</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>Pain Management</li>
      //             <li>Breast Surgery</li>
      //             <li>Vascular Surgery</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // );
      return (
        <>
          <div style={styles.container}>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                {/* Main Department Image */}
                <img
                  src={images[0]}
                  alt="Department Image"
                  style={styles.imageContainer}
                />
                {/* Detail Department Image */}
                <img
                  src={first}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={second}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={third}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={four}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={five}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={six}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={seven}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
          </div>
        </>
      );
    } else if (state?.index === 2) {
      return (
        <div style={styles.container}>
          {/* List Section */}
          <div style={{ ...styles.card, ":hover": styles.cardHover }}>
            <div style={styles.cardHeader}>
              <span style={styles.headerTitle}>Program Details</span>
            </div>
            <div style={styles.cardContent}>
              <img
                src={images[0]} // Replace with your image
                alt="Program Details"
                style={styles.imageContainer}
              />
              <ul style={styles.list}>
                {state?.data?.map((e, _) => (
                  <li key={_} style={{ marginBottom: "10px" }}>
                    {e?.name}
                    {e?.subData ? (
                      <ul
                        style={{ listStyleType: "circle", marginLeft: "30px" }}
                      >
                        {e?.subData?.map((k, __) => (
                          <li key={__}>{k}</li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Masters in Public Health (MSPH) Section */}
          <div style={{ ...styles.card, ":hover": styles.cardHover }}>
            <div style={styles.cardHeader}>
              <span style={styles.headerTitle}>
                MASTERS IN PUBLIC HEALTH (MSPH)
              </span>
            </div>
            <div style={styles.cardContent}>
              <img
                src={images[1]} // Replace with your image
                alt="Masters in Public Health"
                style={styles.imageContainer}
              />
              <p style={{ textAlign: "justify", marginTop: "15px" }}>
                <strong>Two years program, under NUMS</strong>
                <br />
                Once a year (30 Students)
                <br />
                Intensive Curriculum with subjects like Basic Public Health
                Sciences, Essential Managerial and Analytical Skills including
                Project Planning and Evaluation, Epidemiological Investigations,
                Health Systems Analysis and Research, Reproductive and Child
                Health, Environmental and Occupational Health, Disease Control.
              </p>
            </div>
          </div>

          {/* FD Epidemiology & Lab Training Program (FELTP) Section */}
          <div style={{ ...styles.card, ":hover": styles.cardHover }}>
            <div style={styles.cardHeader}>
              <span style={styles.headerTitle}>
                FD EPIDEMIOLOGY & LAB TRAINING PROGRAM (FELTP)
              </span>
            </div>
            <div style={styles.cardContent}>
              <img
                src={images[2]} // Replace with your image
                alt="FD Epidemiology & Lab Training Program"
                style={styles.imageContainer}
              />
              <p style={{ textAlign: "justify", marginTop: "15px" }}>
                <strong>
                  Centre for Disease Control, Atlanta USA certification
                </strong>
                <br />
                National Institute of Health, Islamabad
                <br />
                Two years program
                <br />
                Once a year (2 to 4 Students)
                <br />
                Focuses on Public Health Work, especially Field Epidemiology,
                Operations Research, and Program Evaluation.
              </p>
            </div>
          </div>

          {/* Preventive Health Assistant Course Section */}
          <div style={{ ...styles.card, ":hover": styles.cardHover }}>
            <div style={styles.cardHeader}>
              <span style={styles.headerTitle}>
                PREVENTIVE HEALTH ASSISTANT COURSE
              </span>
            </div>
            <div style={styles.cardContent}>
              <img
                src={images[3]} // Replace with your image
                alt="Preventive Health Assistant Course"
                style={styles.imageContainer}
              />
              <p style={{ textAlign: "justify", marginTop: "15px" }}>
                <strong>Basic Level (23 weeks)</strong>
                <br />
                <strong>Mid Level (39 weeks)</strong>
                <br />
                <strong>Advanced Level (42 weeks)</strong>
              </p>
            </div>
          </div>
        </div>
      );
    } else if (state?.index === 3) {
      return (
        <div style={styles.container}>
          {/* Data List Section */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.headerTitle}>Data Overview</span>
            </div>
            <div style={styles.cardContent}>
              <ul style={styles.list}>
                {state?.data?.map((e, index) => (
                  <li key={index}>
                    {e?.name}
                    {e?.subData ? (
                      <ul
                        style={{ listStyleType: "circle", marginLeft: "20px" }}
                      >
                        {e?.subData?.map((subItem, subIndex) => (
                          <li key={subIndex}>{subItem}</li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Cards Section */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "40px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Image Card 1 */}
            <div style={styles.card}>
              <div style={styles.imageContainer}>
                <img
                  src={exam1}
                  alt="Description 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Image Card 2 */}
            <div style={styles.card}>
              <div style={styles.imageContainer}>
                <img
                  src={exam2}
                  alt="Description 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (state?.index === 4) {
      // return (
      //   <div style={styles.container}>
      //     {/* List Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>List</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <ul style={styles.list}>
      //           {state?.data?.map((e, _) => (
      //             <li
      //               key={_}
      //               style={{ fontSize: "16px", marginBottom: "10px" }}
      //             >
      //               {e}
      //             </li>
      //           ))}
      //         </ul>
      //       </div>
      //     </div>

      //     {/* Cochrane Center Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>COCHRANE CENTER (CEBHP)</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[3]}
      //           alt="Cochrane Center"
      //           style={styles.imageContainer}
      //         />
      //         <p style={{ textAlign: "justify" }}>
      //           <strong>Established at AFPGMI in Oct 2023</strong>
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           To develop guidelines indigenous to AFs through systematic
      //           reviews and meta-analysis.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Collaboration with AKU for training of Master Trainers.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Subscription of GRADEpro software for guideline development.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           400+ HCPs trained since Dec 2023.
      //         </p>
      //       </div>
      //     </div>

      //     {/* Research & Development Cell Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>
      //           RESEARCH & DEVELOPMENT CELL
      //         </span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[4]}
      //           alt="Research & Development Cell"
      //           style={styles.imageContainer}
      //         />
      //         <p style={{ textAlign: "justify" }}>
      //           <strong>
      //             Developed in Sep 2015 as a center of excellence at AFPGMI
      //           </strong>
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           For academic support for trainees in medical, dental, and
      //           nursing services in research projects.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Capacity building of academia by providing comprehensive
      //           research support services to students, faculty, and HCPs across
      //           Army.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Conducts research methodology workshops for various levels of
      //           trainees.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Preparation of dissertation/study projects for all trainees,
      //           including MSc (HCA), Grd Trainees & MSPH students.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Establishment of state-of-the-art research department
      //           incorporating various domains of research and development:
      //         </p>
      //         <ul style={styles.list}>
      //           <li>Cochrane Research</li>
      //           <li>Academic Research</li>
      //           <li>Ops & Mgmt Research</li>
      //           <li>Public Health Research</li>
      //           <li>Nursing Research</li>
      //           <li>Quality Assurance & Med Edn (QAME)</li>
      //         </ul>
      //       </div>
      //     </div>

      //     {/* DEWS Cell Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>DEWS CELL</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[5]}
      //           alt="DEWS Cell"
      //           style={styles.imageContainer}
      //         />
      //         <p style={{ textAlign: "justify" }}>
      //           <strong>Established in Apr 2020</strong>
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Nerve center of Medical Directorate by providing relevant
      //           insights regarding 33 primary DEWS diseases of outbreak
      //           potential for related decision-making.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Active surveillance of disease trends in AFs.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Comparative analysis of AFs disease trends with national and
      //           international trends through weekly and fortnightly DEWS
      //           reports.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Introduction of AI in DEWS app and trauma registries.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           eDEWS Dashboard – Geo-tagging the accurate location of cases to
      //           monitor and curtail spread with smart interventions through GIS
      //           system.
      //         </p>
      //       </div>
      //     </div>

      //     {/* Auxiliary Departments Section */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>AUXILIARY DEPARTMENTS</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <img
      //           src={images[6]}
      //           alt="Auxiliary Departments"
      //           style={styles.imageContainer}
      //         />
      //         <p style={{ textAlign: "justify" }}>
      //           <strong>Established at AFPGMI in Oct 2023</strong>
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           To develop guidelines indigenous to AFs through systematic
      //           reviews and meta-analysis.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Collaboration with AKU for training of Master Trainers.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Development in Sep 2015 as a center of excellence at AFPGMI for
      //           academic support for trainees in medical, dental, and nursing
      //           services in research projects.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Establishment in Apr 2020 to monitor the Covid-19 pandemic in
      //           AFs, with active surveillance of 33 primary DEWS diseases and
      //           comparative analysis with national and international trends.
      //         </p>
      //         <p style={{ textAlign: "justify" }}>
      //           Process of systematic evaluation of all aspects of education
      //           programs by involving all key stakeholders. Focus on curriculum
      //           quality, teaching staff quality, faculty development, and
      //           self-assessment processes.
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // );
      return (
        <>
          <div style={styles.container}>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                {/* Main Department Image */}
                <img
                  src={images[0]}
                  alt="Department Image"
                  style={styles.imageContainer}
                />
                {/* Detail Department Image */}
                <img
                  src={AuxDepart}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                {/* Main Department Image */}
                <img
                  src={images[0]}
                  alt="Department Image"
                  style={styles.imageContainer}
                />
                {/* Detail Department Image */}
                <img
                  src={downCell}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                {/* Main Department Image */}
                {/* <img
                  src={images[0]}
                  alt="Department Image"
                  style={styles.imageContainer}
                /> */}
                {/* Detail Department Image */}
                <img
                  src={chochrane}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                {/* Main Department Image */}
                {/* <img
                  src={images[0]}
                  alt="Department Image"
                  style={styles.imageContainer}
                /> */}
                {/* Detail Department Image */}
                <img
                  src={research}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                {/* Main Department Image */}
                {/* <img
                  src={images[0]}
                  alt="Department Image"
                  style={styles.imageContainer}
                /> */}
                {/* Detail Department Image */}
                <img
                  src={qame}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
          </div>
        </>
      );
    } else if (state?.index === 5) {
      // return (
      //   <div style={styles.container}>
      //     {/* Main Card for List Content */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>List Overview</span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         <ul style={styles.list}>
      //           {state?.data?.map((e, _) => (
      //             <li key={_}>
      //               {e?.name}
      //               {e?.subData ? (
      //                 <ul style={{ listStyleType: "circle", marginLeft: 50 }}>
      //                   {e?.subData?.map((k, __) => (
      //                     <li key={__}>{k}</li>
      //                   ))}
      //                 </ul>
      //               ) : null}
      //             </li>
      //           ))}
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // );

      // return (
      //   <div style={styles.container}>
      //     {/* College of Nursing - Training Programs */}
      //     <div style={{ ...styles.card, ":hover": styles.cardHover }}>
      //       <div style={styles.cardHeader}>
      //         <span style={styles.headerTitle}>
      //           College of Nursing - Training Programs
      //         </span>
      //       </div>
      //       <div style={styles.cardContent}>
      //         {/* Degree Programs Section */}
      //         <img
      //           src={images[3]} // Replace with the appropriate image index
      //           alt="Degree Programs"
      //           style={styles.imageContainer}
      //         />
      //         <h2
      //           style={{
      //             textTransform: "uppercase",
      //             fontWeight: 600,
      //             fontSize: "24px",
      //             marginBottom: "15px",
      //             color: "#34495e",
      //           }}
      //         >
      //           Degree Programs
      //         </h2>
      //         <ul style={styles.list}>
      //           <li>BSc (Nursing) - 4 years, once a year under NUMS</li>
      //           <li>
      //             Post RN BSc - 2 years, once a year (for officers commissioned
      //             before 2011)
      //           </li>
      //           <li>MSN - 2 years, started in 2022, once a year under NUMS</li>
      //         </ul>

      //         {/* Post Basic Specialties Section */}
      //         <img
      //           src={images[4]} // Replace with the appropriate image index
      //           alt="Post Basic Specialties"
      //           style={styles.imageContainer}
      //         />
      //         <h2
      //           style={{
      //             textTransform: "uppercase",
      //             fontWeight: 600,
      //             fontSize: "24px",
      //             marginBottom: "15px",
      //             color: "#34495e",
      //           }}
      //         >
      //           Post Basic Specialties (13 Fields)
      //         </h2>
      //         <div style={{ display: "flex", gap: "20px" }}>
      //           <ul style={styles.list}>
      //             <li>Intensive Care</li>
      //             <li>Mental Health</li>
      //             <li>Nephro/Urology</li>
      //             <li>Anesthesia</li>
      //             <li>BM Transplant</li>
      //             <li>Cardiac ITC</li>
      //             <li>Trauma & Emergency</li>
      //           </ul>
      //           <ul style={styles.list}>
      //             <li>Pediatrics</li>
      //             <li>OT</li>
      //             <li>Oncology</li>
      //             <li>Rehab Med</li>
      //             <li>Surgical Burns</li>
      //             <li>Cardiac Electrophysiology</li>
      //           </ul>
      //         </div>

      //         {/* Military & Diploma Courses Section */}
      //         <img
      //           src={images[5]} // Replace with the appropriate image index
      //           alt="Military & Diploma Courses"
      //           style={styles.imageContainer}
      //         />
      //         <h2
      //           style={{
      //             textTransform: "uppercase",
      //             fontWeight: 600,
      //             fontSize: "24px",
      //             marginBottom: "15px",
      //             color: "#34495e",
      //           }}
      //         >
      //           Military & Diploma Courses
      //         </h2>
      //         <ul style={styles.list}>
      //           <li>Basic Military Training (BMT) - 6 weeks, once a year</li>
      //           <li>Midcareer Course (MCC) - 12 weeks, thrice a year</li>
      //           <li>
      //             Snr AFNS Officers Management Course - 6 weeks, once a year
      //           </li>
      //           <li>Diploma in Midwifery Nursing - 52 weeks, once a year</li>
      //           <li>
      //             Diploma in Post Basic Specialties - 52 weeks, once a year
      //           </li>
      //         </ul>

      //         {/* College of Nursing, AFPGMI Section */}
      //         <img
      //           src={images[6]} // Replace with the appropriate image index
      //           alt="College of Nursing, AFPGMI"
      //           style={styles.imageContainer}
      //         />
      //         <h2
      //           style={{
      //             textTransform: "uppercase",
      //             fontWeight: 600,
      //             fontSize: "24px",
      //             marginBottom: "15px",
      //             color: "#34495e",
      //           }}
      //         >
      //           College of Nursing, AFPGMI
      //         </h2>
      //         <p style={{ textAlign: "justify", marginBottom: "15px" }}>
      //           Established in 1960, the College of Nursing has a long-standing
      //           tradition of excellence in nursing education. Our programs are
      //           designed to nurture compassionate and highly skilled
      //           professionals who uphold the highest standards in patient care.
      //           With a legacy spanning decades, we continue to evolve, adapting
      //           our curriculum to meet modern healthcare demands.
      //         </p>

      //         {/* Affiliations Section */}
      //         <img
      //           src={images[7]} // Replace with the appropriate image index
      //           alt="Affiliations"
      //           style={styles.imageContainer}
      //         />
      //         <h2
      //           style={{
      //             textTransform: "uppercase",
      //             fontWeight: 600,
      //             fontSize: "24px",
      //             marginBottom: "15px",
      //             color: "#34495e",
      //           }}
      //         >
      //           Affiliations
      //         </h2>
      //         <ul style={styles.list}>
      //           <li>
      //             MSN, BSN (Generic) & Post RN BSN degree programs - Affiliated
      //             with NUMS
      //           </li>
      //           <li>
      //             Post Basic Specialized Courses & Midwifery Nursing -
      //             Affiliated with NEBP, Lahore
      //           </li>
      //           <li>
      //             Pre-Enrolment & Registration - Recognized by PNC, Islamabad
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // );
      return (
        <>
          <div style={styles.container}>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                {/* Main Department Image */}
                <img
                  src={images[0]}
                  alt="Department Image"
                  style={styles.imageContainer}
                />
                {/* Detail Department Image */}
                <img
                  src={a}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={b}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={c}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={d}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={e}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={f}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={g}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
            <div style={{ ...styles.card, ":hover": styles.cardHover }}>
              <div style={styles.cardContent}>
                <img
                  src={h}
                  alt="Department Detail"
                  style={styles.detailImage}
                />
              </div>
            </div>
          </div>
        </>
      );
    } else if (state?.index === 6) {
      return (
        <div style={styles.container}>
          {/* Main Card for List Content */}
          <div style={{ ...styles.card, ":hover": styles.cardHover }}>
            <div style={styles.cardHeader}>
              <span style={styles.headerTitle}>List Overview</span>
            </div>
            <div style={styles.cardContent}>
              <ul style={styles.list}>
                {state?.data?.map((e, _) => (
                  <li key={_}>
                    {e?.name}
                    {e?.subData ? (
                      <ul style={{ listStyleType: "circle", marginLeft: 50 }}>
                        {e?.subData?.map((k, __) => (
                          <li key={__}>{k}</li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (state?.index === 7) {
      return (
        <div style={styles.container}>
          {/* College of Nursing - Training Programs */}
          <div style={{ ...styles.card, ":hover": styles.cardHover }}>
            <div style={styles.cardHeader}>
              <span style={styles.headerTitle}>
                College of Nursing - Training Programs
              </span>
            </div>
            <div style={styles.cardContent}>
              {/* Degree Programs Section */}
              <img
                src={images[3]} // Replace with the appropriate image index
                alt="Degree Programs"
                style={styles.imageContainer}
              />
              <h2
                style={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "24px",
                  marginBottom: "15px",
                  color: "#34495e",
                }}
              >
                Degree Programs
              </h2>
              <ul style={styles.list}>
                <li>BSc (Nursing) - 4 years, once a year under NUMS</li>
                <li>
                  Post RN BSc - 2 years, once a year (for officers commissioned
                  before 2011)
                </li>
                <li>MSN - 2 years, started in 2022, once a year under NUMS</li>
              </ul>

              {/* Post Basic Specialties Section */}
              <img
                src={images[4]} // Replace with the appropriate image index
                alt="Post Basic Specialties"
                style={styles.imageContainer}
              />
              <h2
                style={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "24px",
                  marginBottom: "15px",
                  color: "#34495e",
                }}
              >
                Post Basic Specialties (13 Fields)
              </h2>
              <div style={{ display: "flex", gap: "20px" }}>
                <ul style={styles.list}>
                  <li>Intensive Care</li>
                  <li>Mental Health</li>
                  <li>Nephro/Urology</li>
                  <li>Anesthesia</li>
                  <li>BM Transplant</li>
                  <li>Cardiac ITC</li>
                  <li>Trauma & Emergency</li>
                </ul>
                <ul style={styles.list}>
                  <li>Pediatrics</li>
                  <li>OT</li>
                  <li>Oncology</li>
                  <li>Rehab Med</li>
                  <li>Surgical Burns</li>
                  <li>Cardiac Electrophysiology</li>
                </ul>
              </div>

              {/* Military & Diploma Courses Section */}
              <img
                src={images[5]} // Replace with the appropriate image index
                alt="Military & Diploma Courses"
                style={styles.imageContainer}
              />
              <h2
                style={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "24px",
                  marginBottom: "15px",
                  color: "#34495e",
                }}
              >
                Military & Diploma Courses
              </h2>
              <ul style={styles.list}>
                <li>Basic Military Training (BMT) - 6 weeks, once a year</li>
                <li>Midcareer Course (MCC) - 12 weeks, thrice a year</li>
                <li>
                  Snr AFNS Officers Management Course - 6 weeks, once a year
                </li>
                <li>Diploma in Midwifery Nursing - 52 weeks, once a year</li>
                <li>
                  Diploma in Post Basic Specialties - 52 weeks, once a year
                </li>
              </ul>

              {/* College of Nursing, AFPGMI Section */}
              <img
                src={images[6]} // Replace with the appropriate image index
                alt="College of Nursing, AFPGMI"
                style={styles.imageContainer}
              />
              <h2
                style={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "24px",
                  marginBottom: "15px",
                  color: "#34495e",
                }}
              >
                College of Nursing, AFPGMI
              </h2>
              <p style={{ textAlign: "justify", marginBottom: "15px" }}>
                Established in 1960, the College of Nursing has a long-standing
                tradition of excellence in nursing education. Our programs are
                designed to nurture compassionate and highly skilled
                professionals who uphold the highest standards in patient care.
                With a legacy spanning decades, we continue to evolve, adapting
                our curriculum to meet modern healthcare demands.
              </p>

              {/* Affiliations Section */}
              <img
                src={images[7]} // Replace with the appropriate image index
                alt="Affiliations"
                style={styles.imageContainer}
              />
              <h2
                style={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "24px",
                  marginBottom: "15px",
                  color: "#34495e",
                }}
              >
                Affiliations
              </h2>
              <ul style={styles.list}>
                <li>
                  MSN, BSN (Generic) & Post RN BSN degree programs - Affiliated
                  with NUMS
                </li>
                <li>
                  Post Basic Specialized Courses & Midwifery Nursing -
                  Affiliated with NEBP, Lahore
                </li>
                <li>
                  Pre-Enrolment & Registration - Recognized by PNC, Islamabad
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  };

  const isTitleBold =
    state?.name === "Quality Assurance in Medical Education Department (QAME)";

  return (
    <div className="admission-details">
      <header>
        <h1
          style={{
            textTransform: "uppercase",
            fontWeight: isTitleBold ? 800 : 600,
            fontSize: "28px",
            color: "#002d72cc",
          }}
        >
          {" "}
          {state?.name}
        </h1>
      </header>

      <div style={{ position: "relative", marginTop: "15px" }}>
        {getContent()}
        {/* <img src={NewsImg1} className="img-overlay-container-img" /> */}
      </div>
    </div>
  );
};

export default DepartmentDetails;
