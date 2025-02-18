import React from "react";
import FacStaffImg from "../assets/4.jpg";
import PersonImg1 from "../assets/ProfileImg1.jpg";
import PersonImg2 from "../assets/ProfileImg2.jpg";
import woman from "../assets/woman.png";
import Resume from "../assets/CV - Brig Muhammad Tanvir Ahmad Qureshi, Dy Comdt.pdf";
const peopleData = [
  {
    name: "Dr Syed Adil Hussanain",
    qualification: "Commandant",
    gender: "male",
  },
  {
    name: "Dr Tanveer Ahmed Qureshi",
    qualification: "Deputy Commandant/ Controller Exam",
    gender: "male",
  },
  {
    name: "Dr Ayesha Abubakar Mitha",
    qualification: "Director Training",
    gender: "female",
  },
  {
    name: "Dr Muhammad Mubashir",
    qualification: "Administration Officer",
    gender: "male",
  },
  {
    name: "Dr Jamal Munsif",
    qualification: "Account Officer",
    gender: "male",
  },

  {
    name: "Dr Qaiser Ali jami",
    qualification: "HoD College of Nursing",
    gender: "male",
  },
  {
    name: "Dr Alia Rehman",
    qualification: "Deputy Controller Exam",
    gender: "female",
  },
  {
    name: "Dr Izza Baddar ",
    qualification: " Head of Department College of Nursing ",
    gender: "female",
  },
  {
    name: "Dr Salahuddin Masood",
    qualification: "HoD Public Health Department",
    gender: "male",
  },
  {
    name: "Dr Shamaila Mohsin",
    qualification: "OIC DEWs /CMC Cell",
    gender: "female",
  },
  {
    name: "Dr Syed Imran Bhukari",
    qualification: "Staff Officer",
    gender: "male",
  },
  {
    name: "Dr Sana Neamat",
    qualification: "Officer Incharge Allied Health Sciences",
    gender: "female",
  },

  // Pediatrics
  // {
  //   name: "Dr Zeeshan Ahmed",
  //   qualification: "Pediatrics",
  //   unit: "CMH Rwp",
  //   gender: "male",
  // },
  // { name: "Dr Saeed Zaman", qualification: "Pediatrics", gender: "male" },
  // { name: "Dr Shahid Mahmud", qualification: "Pediatrics", gender: "male" },
  // { name: "Dr Shamama Hasan", qualification: "Pediatrics", gender: "female" },
  // { name: "Dr Shakeel Ahmed", qualification: "Pediatrics", gender: "male" },
  // { name: "Dr Farooq Ikram", qualification: "Pediatrics", gender: "male" },
  // { name: "Dr Kanwal Arif", qualification: "Pediatrics", gender: "female" },

  // BMS (Anatomy)
  // { name: "Dr Abdullah Qamar", qualification: "BMS (Anatomy)", gender: "male" },
  // {
  //   name: "Dr Shabnam Hamid",
  //   qualification: "BMS (Anatomy)",
  //   gender: "female",
  // },
  // {
  //   name: "Dr Khadija Qamar",
  //   qualification: "BMS (Anatomy)",
  //   gender: "female",
  // },
  // {
  //   name: "Dr Muhammad Rizwan Bahir Kayani",
  //   qualification: "BMS (Anatomy)",
  //   gender: "male",
  // },

  // BMS (Pharma)
  // {
  //   name: "Dr Kulsoom Farhat",
  //   qualification: "BMS (Pharma)",
  //   gender: "female",
  // },

  // Forensic Medicine
  // {
  //   name: "Dr Safdar Hussain",
  //   qualification: "Forensic Medicine",
  //   gender: "male",
  // },

  // Physiology
  // { name: "Dr Ambreen Ahmed", qualification: "Physiology", gender: "female" },
  // { name: "Dr Amina Nadeem", qualification: "Physiology", gender: "female" },
  // {
  //   name: "Dr Muhammad Alamghir Khan",
  //   qualification: "Physiology",
  //   gender: "male",
  // },

  // Bio Chemistry
  // { name: "Dr Amir Rasheed", qualification: "Bio Chemistry", gender: "male" },

  // Gynecology / Obstetrics
  // {
  //   name: "Dr Tehreem Yazdani",
  //   qualification: "Gynecology / Obstetrics",
  //   unit: "PEMH Rwp",
  //   gender: "female",
  // },
  // {
  //   name: "Dr Viqar - Un - Nisa Ashraf",
  //   qualification: "Gynecology / Obstetrics",
  //   gender: "female",
  // },
  // {
  //   name: "Dr Asfa Siraj",
  //   qualification: "Gynecology / Obstetrics",
  //   gender: "female",
  // },
  // {
  //   name: "Dr Umiarah Yaqub",
  //   qualification: "Gynecology / Obstetrics",
  //   gender: "female",
  // },

  // Prosthodontics
  // {
  //   name: "Dr Mubshir Sharif",
  //   qualification: "Prosthodontics",
  //   gender: "male",
  // },

  // OMFS
  // { name: "Dr Adnan Babar", qualification: "OMFS", gender: "male" },
  // { name: "Dr Muhammad Ishaq", qualification: "OMFS", gender: "male" },

  // Anesthesia
  {
    name: "Dr Anjum Anwar Qadri",
    qualification: "Anesthesia",
    gender: "male",
  },
  { name: "Dr Syed Majid Waseem", qualification: "Anesthesia", gender: "male" },
  { name: "Dr Abdullah Noor", qualification: "Anesthesia", gender: "male" },
  { name: "Dr Khalid Buland", qualification: "Anesthesia", gender: "male" },
  { name: "Dr Mudassar Iqbal", qualification: "Anesthesia", gender: "male" },
  {
    name: "Dr Ahmed Mujadid Khan Burki",
    qualification: "Anesthesia",
    gender: "male",
  },
  {
    name: "Dr Ameer Yasser Zahid",
    qualification: "Anesthesia",
    gender: "male",
  },
  {
    name: "Dr Syed Ali Mahar Rizvi",
    qualification: "Anesthesia",
    gender: "male",
  },
  //BMS (Bio-Chemistry)
  {
    name: "Dr Amir Rashid",
    qualification: "Bio-Chemistry",
    gender: "male",
  },
  //BMS (Bio-pysiology)
  {
    name: "Dr Muhammad Alamgir Khan",
    qualification: "Bio-Pysiology",
    gender: "male",
  },
  // Community Medicine
  {
    name: "Dr Shamaila Mohsin",
    qualification: "Community Medicine",
    gender: "female",
  },
  {
    name: "Dr Syed Fawad Mashadi",
    qualification: "Community Medicine",
    gender: "male",
  },

  // Dermatology
  {
    name: "Dr Aisha Akhtar",
    qualification: "Dermatology",
    gender: "female",
  },
  {
    name: "Dr Nadia Iftikhar",
    qualification: "Dermatology",
    gender: "female",
  },
  {
    name: "Dr Qamar Ud Din Khan",
    qualification: "Dermatology",
    unit: "AFIP Rwp",
    gender: "male",
  },

  // ENT
  {
    name: "Dr Farhan Akbar",
    qualification: "Entomology",
    gender: "male",
  },
  { name: "Dr Naeem Riaz Bhalli", qualification: "Entomology", gender: "male" },
  {
    name: "Dr Asad Shabir Bukhari",
    qualification: "Entomology",
    gender: "male",
  },
  // Emergency Medicine
  {
    name: "Dr Muhammad Faheem Ur Rehman",
    qualification: "Emergency Medicine",
    unit: "PEMH/CMH Rwp",
    gender: "male",
  },

  {
    name: "Syeda Fatimah Zareen",
    qualification: "Emergency Medicine",
    gender: "female",
  },

  // Family Medicine
  {
    name: "Dr Sadaf Nawaz",
    qualification: "Family Medicine",
    gender: "female",
  },
  //Gynae
  { name: "Dr Asifa Siraj", qualification: "Gynae", gender: "female" },
  { name: "Dr Viqar Ashraf", qualification: "Gynae", gender: "male" },

  // Medicine
  { name: "Dr Khurram Haq Nawaz", qualification: "Medicine", gender: "male" },

  {
    name: "Dr Attia Khaliq",
    qualification: "Medicine",
    gender: "female",
  },
  { name: "Dr Muhammad Imran", qualification: "Medicine", gender: "male" },
  { name: "Dr Muhammad Yasir", qualification: "Medicine", gender: "male" },
  {
    name: "Dr Malik Nadeem Azam Khan",
    qualification: "Medicine",
    gender: "male",
  },
  { name: "Dr Ghulam Abbas Niazi", qualification: "Medicine", gender: "male" },
  { name: "Dr Amer Fakhar", qualification: "Medicine", gender: "male" },
  { name: "Dr Sohail Sabir", qualification: "Medicine", gender: "male" },
  { name: "Dr Abdul Rehman Arshad", qualification: "Medicine", gender: "male" },
  { name: "Dr Ghulam Abbas", qualification: "Medicine", gender: "male" },

  // Ophthalmology
  {
    name: "Dr Waqar Muzaffar",
    qualification: "Ophthalmology",
    gender: "male",
  },
  {
    name: "Dr Aisha Fawad",
    qualification: "Ophthalmology",
    gender: "female",
  },
  {
    name: "Dr Syed Abid Hussan Naqvi",
    qualification: "Ophthalmology",
    gender: "male",
  },

  //Paerds
  {
    name: "Dr Arshad Khushdil",
    qualification: "Paerds",
    gender: "male",
  },
  {
    name: "Dr Asma Razzaq",
    qualification: "Paerds",
    gender: "female",
  },
  {
    name: "Dr Shakeel Ahmad Chaudary",
    qualification: "Paerds",
    gender: "male",
  },
  {
    name: "Dr Shamama hasan",
    qualification: "Paerds",
    gender: "female",
  },
  // Pathology
  {
    name: "Dr Syed Adeel Hussain Gardezi",
    qualification: "Pathology",
    gender: "male",
  },
  {
    name: "Dr Muhammad Qaiser Alam Khan",
    qualification: "Pathology",
    gender: "male",
  },
  {
    name: "Dr Rafia Mahmood",
    qualification: "Pathology",
    gender: "female",
  },
  { name: "Dr Manzar Bozdar", qualification: "Pathology", gender: "male" },
  {
    name: "Dr Sikandar Hayat Khan",
    qualification: "Pathology",
    gender: "male",
  },
  {
    name: "Dr Muhammad Usman Rathore",
    qualification: "Pathology",
    gender: "male",
  },
  // Nuclear Medicine
  {
    name: "Dr Mehdi Raza",
    qualification: "Nuclear Medicine",
    gender: "male",
  },
  // Psychiatry
  {
    name: "Dr Ahmed Sohaib Tabassum",
    qualification: "Psychiatry",
    gender: "male",
  },
  {
    name: "Dr Abid Aftab",
    qualification: "Psychiatry",
    gender: "male",
  },
  // Radiology
  { name: "Dr Rizwan Bilal", qualification: "Radiology", gender: "male" },
  {
    name: "Dr Raza Rahim Hyder",
    qualification: "Radiology",
    unit: "AFIRI Rwp",
    gender: "male",
  },
  { name: "Dr Ghulam Abbas", qualification: "Radiology", gender: "male" },
  {
    name: "Dr Syed Farrukh Nadeem",
    qualification: "Radiology",
    gender: "male",
  },

  //Radio Oncology
  { name: "Dr Salman Arif", qualification: "Radio Oncology", gender: "male" },

  // Rehab Medicine
  { name: "Dr Nadeem Ahmed", qualification: "Rehab Medicine", gender: "male" },
  { name: "Dr Mahmood Ahmed", qualification: "Rehab Medicine", gender: "male" },
  // Surgery

  { name: "Dr Waseem Ahmad Khan", qualification: "Surgery", gender: "male" },
  {
    name: "Dr Syed Mukarram Hussain",
    qualification: "Surgery",
    gender: "male",
  },

  {
    name: "Dr Syeda Rifaat Qammar Naqvi",
    qualification: "Surgery",
    gender: "female",
  },
  { name: "Dr Imran Ashraf", qualification: "Surgery", gender: "male" },
  {
    name: "Dr Tayyaba Mushtaq Khan",
    qualification: "Surgery",
    gender: "female",
  },
  { name: "Dr Bilal Saeed", qualification: "Surgery", gender: "male" },
  { name: "Dr Nasir Mahmood Wattoo", qualification: "Surgery", gender: "male" },
  { name: "Habib Ur Rehman", qualification: "Surgery", gender: "male" },
  {
    name: "Dr Muhammad Saleem Akhtar",
    qualification: "Surgery",
    gender: "male",
  },
  {
    name: "Dr Muhammad Shoaib Khan",
    qualification: "Surgery",
    gender: "male",
  },
  { name: "Dr Shahid Mehmood Khan", qualification: "Surgery", gender: "male" },
  //Oral Maxillofacial
  {
    name: "Dr Safiullah Khan",
    qualification: "Oral Maxillofacial",
    gender: "male",
  },
  {
    name: "Dr Idress Khan",
    qualification: "Oral Maxillofacial",
    gender: "male",
  },
  {
    name: "Dr Adnan Baber",
    qualification: "Oral Maxillofacial",
    gender: "male",
  },
  //Periodontology
  {
    name: "Dr Muhammad Sharjeel Ashraf",
    qualification: "Periodontology",
    gender: "male",
  },
  // Orthodontics
  {
    name: "Dr Abdullah Jan",
    qualification: "Orthodontics",
    unit: "AFID Rwp",
    gender: "male",
  },
  // Operative Dentistry
  {
    name: "Dr Nadeem Ahmed Rana",
    qualification: "Operative Dentistry",
    gender: "male",
  },
  {
    name: "Dr Hafiz Rabbi ul Ehsan",
    qualification: "Operative Dentistry",
    gender: "male",
  },
];

const FacultyAndStaff = () => {
  const downloadPdf = async (
    url = "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    fileName = "file"
  ) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `${fileName}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

  return (
    <div className="page-template page-template-sidebar-page page-template-sidebar-page-php page page-id-8780">
      <main id="main" role="main">
        <header style={{ padding: "0" }}>
          <section className="panel-DRlection" data-modular-content-DRlection>
            <section
              // className="panel theme--choco"
              data-type="section-bg"
              id="gateway-for-faculty-staff"
              data-modular-content
              data-js="panel"
              data-index="1"
              data-pad-top="sm"
              data-pad-bottom="sm"
            >
              <div className="header-text" style={{ paddingTop: 50 }}>
                <h2 className="faculty-title desc">
                  GATEWAY FOR FACULTY & STAFF
                </h2>
                <p style={{ fontSize: 22, boxShadow: "none", color: "black" }}>
                  Faculty at AFPGMI plays a pivotal role in shaping future of
                  medical education by instilling values of critical thinking,
                  inclusivity and lifelong learning among its students
                </p>
              </div>

              <div
                // className="img-container"
                data-img-anchor-v="top"
                data-img-anchor-h="center"
                data-gradient="bottom"
              >
                <img
                  // className="facultyImg"
                  role="presentation"
                  alt=""
                  src={FacStaffImg}
                  style={{ height: "100vh", width: "100%" }}
                />
              </div>
              <br />
            </section>
          </section>
        </header>
        <section>
          <div className="accordion">
            {peopleData.map((user, index) => (
              <div
                className="card"
                key={index}
                // onClick={
                //   index === 0 ? () => window.open(Resume, "_blank") : () => {}
                // }
              >
                <div
                  style={{ backgroundDRor: "#fff", alignItems: "center" }}
                  className="card-content"
                >
                  <img
                    src={user?.gender === "female" ? woman : PersonImg1}
                    alt="Person"
                  />
                  <h3>{user.name}</h3>
                  <p>{user.qualification}</p>
                  <div className="info">
                    <p>{user.unit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
        </section>
      </main>
    </div>
  );
};

export default FacultyAndStaff;
