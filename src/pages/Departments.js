import React from "react";
import { useNavigate } from "react-router-dom";
import DepartmentsHeroImg1 from "../assets/1.jpg";
import DepartmentsHeroImg2 from "../assets/2.jpg";
import DepartmentsHeroImg3 from "../assets/3.jpg";
import DepartmentsHeroImg4 from "../assets/4.jpg";
import DepartmentsHeroImg5 from "../assets/1.jpg";
import DepartmentsHeroImg6 from "../assets/3.jpg";

const Departments = () => {
  const navigate = useNavigate();

  const departmentsData = [
    {
      name: "DEPARTMENT OF MANAGEMENT SCIENCES",
      image: DepartmentsHeroImg1,
      data: [
        { coursesOffered: "MSc Health Care Administration", duration: "104 Weeks", freq: "Once an year", type: "Degree(NUMS)" },
        { coursesOffered: "Senior Army Dental Officers Course ", duration: "16 Weeks", freq: "Once an year", type: "Certificate(NUMS)" },
        { coursesOffered: "Mid Career Course", duration: "12  Weeks", freq: "Thrice an year", type: "Certificate(NUMS)" },
        { coursesOffered: "Professional Development Courses for Junior Officers", duration: "02  Weeks", freq: "Once in two months", type: "Certificate(NUMS)" },
        { coursesOffered: "Sports Medicine Course", duration: "12  Weeks", freq: "As & when required", type: "Certificate(NUMS)" },
      ],
    },
    {
      name: "DEPARTMENT OF CLINICAL & BASIC SCIENCES",
      image: DepartmentsHeroImg2,

      data: [
        { coursesOffered: "MCPS/ FCPS-II", duration: "3 - 4 years", freq: "Twice a year", type: "Degree (CPSP)" },
        { coursesOffered: "BS Program (MLT, MIT, CPT)", duration: "4 years", freq: "Once an year", type: "Degree (NUMS)" },
        { coursesOffered: "MSc in Cardiac Anaesthesia", duration: "-", freq: "Once an year", type: "Degree (NUMS)" },
        { coursesOffered: "MS in Transfusion Medicine", duration: "-", freq: "Once an year", type: "Degree (NUMS)" },
        { coursesOffered: "PhD Pathology", duration: "-", freq: "Once an year", type: "Degree (NUMS)" },

        { coursesOffered: "Clinical Fellowship in Otology & Audio-Vestibular Rehabilitation", duration: "-", freq: "Once an year", type: "Degree (NUMS)" },
        { coursesOffered: "M Phil (Chemical & Oral Pathology, Microbiology) ", duration: "-", freq: "Once an year", type: "Certificate (NUMS)" },
        { coursesOffered: "Diploma in Cardiology", duration: "-", freq: "Once an year", type: "Diploma (NUMS)" },
      ],
    },
    { name: "MASTERS OF SCIENCE IN PUBLIC HEALTH (MSPH)", image: DepartmentsHeroImg3, data: [{ name: "Started at AFPGMI from 2001 with UHS" }, { name: "Affiliated with NUMS in 2016" }, { name: "Presently - 2 batches undergoing training" }, { name: "Intensive Curriculum includes", subData: ["Basic Public Health Sciences", "Essential Managerial and Analytical Skills including Project Planning and Evaluation", "Epidemiological Investigations", "Health System Analysis and Research", "Reproductive and Child Health", "Environment and Occupational Health", "Disease Control"] }] },
    {
      name: "EXAM DEPARTMENT",
      image: DepartmentsHeroImg4,
      data: [{ name: "78 x Exams conducted every year" }, { name: "6 x Global Centres" }, { name: "12 x National Centres" }],
    },
    { name: "COCHRANE (CEBHP)", image: DepartmentsHeroImg5, data: ["Established at AFPGMI in October 2023", "To develop guidelines indigenous to Armed Forces through systematic reviews and meta-analysis", "Collaboration with AKU for training of Master trainers both Specialists and Health Care Administrators", "Subscription of GRADE-pro software for guideline development", "400 Health Care Professionals trained since December 2023"] },
    {
      name: "RESEARCH & DEVELOPMENT CELL",
      image: DepartmentsHeroImg4,
      data: [
        {
          name: "Developed in September 2015 as a center of excellence at AFPGMI for academic support for trainees of medical, dental and nursing services in research projects",
        },
        {
          name: "Capacity building of academia by providing comprehensive research support services to students, faculty and Health Care Professionals across Army",
          subData: ["Conduct of research methodology workshop for various level of trainees", "Preparation of dissertation/ study projects of all trainees including MSc & MSPH students"],
        },
        {
          name: "Establishment of state-of-the-art research department incorporating various domains of research and development",
          subData: ["Cochrane Research", "Academic Research", "Operation & Management Research", "Public Health Research", "Nursing Research"],
        },
        {
          name: "Quality Assurance & Medical Education (QAME)",
        },
      ],
    },
    {
      name: "Quality Assurance in Medical Education Department (QAME)",
      image: DepartmentsHeroImg6,
      data: [
        {
          name: "Scope",
          subData: ["Process of system evaluation of all aspects of education program by involving all key stakeholders", "Focuses on quality of curriculum and assessment, quality of teaching staff, faculty development and self assessment processes"],
        },
        {
          name: "Composition of Committee",
          subData: ["QAME Head", "Training Officer", "Assistant Professor of Management Sciences", "Research Officer", "Assistant Manager, NUMS Affairs", "Clerical Staff"],
        },
      ],
    },
    {
      name: "College of Nursing",
      image: DepartmentsHeroImg1,
      data: [
        {
          name: "MSN, BSN (Generic) & Post RN BSN Degree Program affiliated with NUMS ",
        },
        {
          name: "Post Basic Specialized Courses & Midwfery Nursing Affiliated with NEBP, Lahore ",
        },
        {
          name: "Pre-enrolment & registration recognized with PNC, Islamabad.",
        },
      ],
    },
  ];

  return (
    <div className="departments">
      <header>
        <h1>ACADEMIC DEPARTMENTS</h1>
      </header>
      <div className="cards-container" style={{ marginTop: 20 }}>
        {departmentsData.map((department, index) => (
          <div className="card" key={index} onClick={() => navigate(`/departments/${index}`, { state: { ...department, index } })}>
            <img className="image" src={department.image} alt={`Department ${index}`} />
            <a
              className="link"
              style={{ textTransform: "uppercase" }}
              // href="#"
            >
              {department.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
