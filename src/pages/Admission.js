import React from "react";
import AdmissionImg1 from "../assets/1.jpg";
import AdmissionImg2 from "../assets/2.jpg";
import AdmissionImg3 from "../assets/3.jpg";
import { useNavigate } from "react-router-dom";
import mSN from "../assets/MSn.jpg";
import MSPH from "../assets/MSPH.jpg";
import MLT from "../assets/MLT.jpg";
import Cardic from "../assets/MSc Cardic384.jpg";
import MIT from "../assets/MIT.jpg";

import PHD from "../assets/PHD.jpeg";
import MPHIL from "../assets/MPHIL.jpg";
import DIPCARD from "../assets/Dip card.jpg";
import MST from "../assets/MST.jpg";
import FCPS from "../assets/FCPS.jpeg";
import CP from "../assets/CP.jpg";

const Admission = () => {
  const contentStyle = { textAlign: "center", fontSize: "1.5625em" };
  const navigate = useNavigate();

  const admissionData = [
    {
      title: " Master of Nursing (MSN)",
      reqTitle:
        "Each candidate must fulfill the following criteria for admission:  ",
      req: [
        "Sixteen years of education in relevant field",
        "Four years of BSN (Generic) or BSN Post RN",
        "Minimum two year of work experience after B.S Nursing Generic/Post RN",
        "Candidate should be medically fit and registered with the Pakistan Nursing Council (PNC)",
      ],
      note: [
        "Candidates will be interviewed by a panel",
        "Candidates applying will be selected on open merit",
      ],
      img: mSN,
    },

    {
      title: "Master of Public Health (MSPH)",
      reqTitle: "Entry Criteria/Admission",
      req: [
        "MBBS/MD/BDS (Registered with PMC)",
        "BS Nursing 4-year program (Registered with PNC)",
        "DVM (registered with PVMC)",
        "Pharm-D/ equivalent (registered with PCP)",
        "BS Physiotherapy (DPT) Or any Equivalent",
        "One-year full time work experience in the public/private healthcare setting/community relevant field",
        "NUMS entry test with minimum 50% of cumulative score",
        "NUMS interview",
      ],
      note: [
        "Candidates will be interviewed by a panel",
        "Candidates applying will be selected on open merit",
      ],
      img: MSPH,
    },
    {
      title: " BS Medical Lab Technology",
      reqTitle:
        "Admission Requirement of Program, A candidate for admission must fulfill the following criteria:  ",
      req: [
        "F.Sc (Pre-Medical Group / MLT) or an equivalent examination of a board of secondary education with minimum 50% aggregate marks",
        "Candidates applying will be selected on open merit basis",
        "Male/Female",
        "Passed NUMS Entry Test",
      ],
      img: MLT,
    },

    {
      title: "BS Cardiac Perfusion Technology",
      reqTitle:
        "Admission Requirement of Program, A candidate for admission must fulfill the following criteria:  ",
      req: [
        "F.Sc. (Pre-Medical Group) or an equivalent examination of a board of secondary education with minimum 50% aggregate marks",
        "Candidates applying will be selected on open merit basis",
        "Male/female",
        "Passed NUMS Entry Test",
      ],
      img: Cardic,
    },

    {
      title: "BS Medical Imaging Technology",
      reqTitle:
        "Admission Requirement of Program, A candidate for admission must fulfill the following criteria:  ",
      req: [
        "F.Sc (Pre-Medical Group) or an equivalent examination of a board of secondary education with minimum 50% aggregate marks",
        "Candidates applying will be selected on open merit basis",
        "Male/female",
        "Passed NUMS Entry Test",
      ],
      img: MIT,
    },

    {
      title: "PhD",
      criteria: {
        title: "Admission / Eligibility Criteria - PhD",
        components: {
          admissionCriteria: {
            title: "Admission Criteria",
            description:
              "Admissions shall be made purely on open merit based on following components:",
            components: [
              "Previous academic performance 25%",
              "Entry test/GAT score 25%",
              "Academic statement of purpose 25%",
              "Interview 25%",
            ],
            note: "However, Federal/Provincial Government of Pakistan may nominate their candidates on merit for Postgraduate studies",
          },
          academicRequirement: {
            title: "Academic Requirement",
            description: [
              "MBBS  or equivalent with first division ",
              "MPhil or equivalent degrees in relevant discipline with minimum CGPA of 3.0 (out of 4.0 in the semester system) or First Division (in the annual system) in the most recent degree",
            ],
          },
          testingRequirement: {
            title: "Testing Requirement",
            description:
              "A graduate admission test (GAT) General / GRE as recognized by HEC with minimum 60% qualifying score.",
          },
          academicStatementOfPurpose: {
            title: "Academic Statement of Purpose",
            description:
              "Each applicant must submit an Academic Statement of Purpose (ASOP). The Academic Statement of Purpose helps the admission committee understand student’s academic objectives and determine whether he/she has the potential to be successful in this program",
            wordLimit: "Approximately 800 to 1000 words (12 point font)",
            desc: "The Statement of Purpose should have four sections, though they dont need to be clearly defined as a section in the document and can take on the more natural feel of a letter",
            sections: [
              "Academic & Professional Preparation",
              "Focused Interest in the Field",
              "Career plans upon completion of the program",
              "Any relevant strengths or weaknesses in background or ability to carry out professional responsibilities",
            ],
          },
          interview: {
            title: "Interview",
            description: [
              "After initial scrutiny of applications by the Admission Office to ensure all documents requirements, etc, Statement of Purpose shall be sent to relevant department where their Departmental Internal Evaluation Committee will review the applications in terms of its scientific viability and faculty research interests and expertise",
              " HoD will send the review report to Admission Office who will attach the report along with all other documents in the applicants’ dossier for the PhD Admission Committee ",
              "Interviews will be conducted by PhD Admission Committee",
            ],
          },
        },
      },
      img: PHD,
    },

    {
      title: "MPhil",
      reqTitle: "Entry Criteria/Admission:  ",
      req: [
        "Sixteen years of education in the relevant discipline",
        "BDS/equivalent duly recognized by the concerned regulatory authority",
        "Valid registration with PMC.",
        "No foreign candidate shall be eligible for admission unless he/she holds a minimum TOEFL score of 500 or IELTS score of 5.50",
        "GAT-General / GRE as recognized by HEC with minimum 50% qualifying",
        "Academic Statement of Purpose",
        "NUMS interview",
        "Merit computation for graduate's programs",
      ],
      percentage: [
        "Previous academic performance 25%",
        "Entry test/GAT score 25% ",
        "Academic statement of purpose 25%",
        "Interview 25%",
      ],
      img: MPHIL,
    },

    {
      title: "Dip Card",
      reqTitle: "Admission Requirement of Program:      ",
      req: [
        "Sixteen years of education (MBBS or equivalent duly recognized by the concerned regulatory authority)",
        "Valid registration of PMC with one-year house job and one-year post-house job experience in the relevant field ",
        "The candidate for graduate programs will be interviewed by the Graduate Admission Committee",
      ],
      img: DIPCARD,
    },
    {
      title: "MS Transfusion Medicine",
      reqTitle: "Entry Criteria/Admission:    ",
      req: [
        {
          name: "Sixteen years of education in the relevant field",
        },
        {
          name: "Must have following qualification:",
          subData: [
            "MBBS/equivalent duly recognized by the concerned regulatory authority",
            "Valid registration with PMDC",
            "GAT (General)/ NUMS entry test with a minimum 50% of cumulative score",
            "GAT will be valid for a period of two years",
            "The candidate for graduate programs will be interviewed by the Graduate Admission Committee",
          ],
        },
        {
          name: " Merit computation for graduate's programs shall be as follows:",
          subData: [
            "Previous Academic Score(s) 25%",
            "GAT Score 50% ",
            "Interview 25%",
          ],
        },
      ],
      img: MST,
    },

    {
      title: " MSc Cardiac Anesthesia",
      reqTitle: "Admission/Registration Regulations:   ",
      req: [
        {
          name: "The candidates applying for admission in the MSc cardiac anaesthesia must fulfill the following eligibility criteria:",
          subData: [
            "FCPS/MS (Anaesthesia) or equivalent",
            "Diploma/MCPS (Anaesthesia)",
            "Registration with PM&DC",
            "NUMS Test/Interview",
          ],
        },
        {
          name: "The candidate for graduate programs will be interviewed by the Graduate Admission Committee",
        },
      ],
      img: CP,
    },

    {
      title: `Fellow of College of Physicians and Surgeons (FCPS) in Sub Specialties (2nd Fellowship)`,
      reqTitle: " Eligibility Criteria: ",
      req: [
        {
          name: "FCPS or equivalent qualification in basic specially recognized by Pakistan Medical and Dental Council (PMDC) and College of Physicians and Surgeons of Pakistan (CPSP)",
        },
      ],
      duration: "3 Years on campus, supervisor-based training",
      location:
        "Armed Forces Post Graduate Medical Institute (AFPGMI), Rawalpindi through affiliated teaching hospitals / institutes",
      awardWinning: "College of Physicians and Surgeons of Pakistan, Karachi",

      strength: " As per available supervisors",
      freq: " Twice every year (January and July)",
      outcomes: "Consultant in respective specialty opsp auctions",
      img: FCPS,
    },
  ];

  return (
    <div className="page-template page-template-landing-page page-template-landing-page-php page page-id-98">
      <main id="main" role="main">
        <header>
          <h1>ADMISSIONS</h1>
        </header>

        <section className="panel-collection" data-modular-content-collection>
          <div>
            <div className="cards-container">
              {admissionData.map((e, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => navigate(`/admission/${index}`, { state: e })}
                  style={{ cursor: "pointer" }}
                >
                  <img className="image" src={e.img} alt={`${index}`} />
                  <a
                    className="link"
                    style={{
                      textTransform:
                        e.title == "PhD" ? "capitalize" : "uppercase",
                    }}
                  >
                    {e.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />

          <br />
        </section>
      </main>
    </div>
  );
};

export default Admission;
