import React from "react";
import FacStaffImg from "../assets/4.jpg";
import PersonImg1 from "../assets/ProfileImg1.jpg";
import PersonImg2 from "../assets/ProfileImg2.jpg";
import woman from "../assets/woman.png";
import Resume from "../assets/CV - Brig Muhammad Tanvir Ahmad Qureshi, Dy Comdt.pdf"
const peopleData = [
  { name: "Dr Muhammad Tanvir Ahmad Qureshi", qualification: "Acting Commandant", gender: "male" },
  { name: "Dr Nafeesa Khan", qualification: "Instructor Class A", gender: "female" },
  { name: "Dr Masud Ahmed", qualification: "Assistant Commandant", gender: "male" },
  { name: "Dr Muhammad Afzal Naz", qualification: "Instructor Class A/ Controller Exam Cell", gender: "male" },
  { name: "Dr Qaiser Ali Jami ", qualification: "Administration Officer/ Chief Research Officer ", gender: "male" },


  { name: "Dr Shahzad Iqbal", qualification: "Training Officer ", gender: "male" },
  { name: "Dr Asma Iftikhar", qualification: "Instructor Class A", gender: "female" },
  { name: "Dr Nausheen Bakht ", qualification: " Head of Department College of Nursing ", gender: "female" },
  { name: "Dr Saira Maroof", qualification: "Officer Incharge CMC", gender: "male" },

    // Medicine
    { name: "Dr Shazia Nisar", qualification: "Medicine", unit: "PEMH Rwp", gender: "female" },
    { name: "Dr Amer Fakhr", qualification: "Medicine", gender: "male" },
    { name: "Dr Muhammad Yasir", qualification: "Medicine", gender: "male" },
    { name: "Dr Muhammad Imran", qualification: "Medicine", gender: "male" },
    { name: "Dr Khalid Mehmood Raja", qualification: "Medicine", gender: "male" },
    { name: "Dr Muhammad Imran", qualification: "Medicine", gender: "male" },
    { name: "Dr Syed Anees Ahmed Gardazi", qualification: "Medicine", unit: "PEMH Rwp", gender: "male" },
    { name: "Dr Imran Ahmad", qualification: "Medicine", gender: "male" },
    { name: "Dr Muhammad Amir", qualification: "Medicine", gender: "male" },
    { name: "Dr Abdul Rashid", qualification: "Medicine", gender: "male" },
    { name: "Dr Ghulam Abbas Niazi", qualification: "Medicine", gender: "male" },
    { name: "Dr Asad Zaman Khan", qualification: "Medicine", gender: "male" },
    { name: "Dr Abdul Rehman Arshad", qualification: "Medicine", gender: "male" },

    // Emergency Medicine
    { name: "Dr Faheem Ur Rehman", qualification: "Emergency Medicine", unit: "PEMH/CMH Rwp", gender: "male" },
    { name: "Dr Tamkeen Pervez", qualification: "Emergency Medicine", gender: "female" },

    // Family Medicine
    { name: "Dr Sadaf Nawaz", qualification: "Family Medicine", unit: "PEMH Rwp", gender: "female" },

    // Psychiatry
    { name: "Dr Ahmed Sohaib Tabassum", qualification: "Psychiatry", unit: "AFIMH Rwp", gender: "male" },
    { name: "Dr Sohail Ali", qualification: "Psychiatry", unit: "AFIMH Rwp", gender: "male" },
    { name: "Dr Abid Aftab", qualification: "Psychiatry", unit: "AFIMH Rwp", gender: "male" },
    { name: "Dr Ata Ullah", qualification: "Psychiatry", unit: "AFIMH Rwp", gender: "male" },
    { name: "Dr Muhammad Sheraz Malik", qualification: "Psychiatry", unit: "AFIMH Rwp", gender: "male" },

    // Dermatology
    { name: "Dr Arfan ul Bari", qualification: "Dermatology", unit: "PEMH Rwp", gender: "male" },
    { name: "Dr Qamar Ud Din Khan", qualification: "Dermatology", unit: "AFIP Rwp", gender: "male" },
    { name: "Dr Aisha Akhtar", qualification: "Dermatology", gender: "female" },
    { name: "Dr Nadia Iftikhar", qualification: "Dermatology", gender: "female" },
    { name: "Dr Moizza Tahir", qualification: "Dermatology", gender: "female" },
    { name: "Dr Bushra Muzaffar Khan", qualification: "Dermatology", gender: "female" },
    { name: "Dr Sakina Sadiq Malik", qualification: "Dermatology", gender: "female" },
    { name: "Dr Ayesha Anwar", qualification: "Dermatology", gender: "female" },
    { name: "Dr Sadia Malik", qualification: "Dermatology", gender: "female" },
    { name: "Dr Uzma Bashir", qualification: "Dermatology", gender: "female" },

    // Pediatrics
    { name: "Dr Zeeshan Ahmed", qualification: "Pediatrics", unit: "CMH Rwp", gender: "male" },
    { name: "Dr Saeed Zaman", qualification: "Pediatrics", gender: "male" },
    { name: "Dr Shahid Mahmud", qualification: "Pediatrics", gender: "male" },
    { name: "Dr Shamama Hasan", qualification: "Pediatrics", gender: "female" },
    { name: "Dr Shakeel Ahmed", qualification: "Pediatrics", gender: "male" },
    { name: "Dr Farooq Ikram", qualification: "Pediatrics", gender: "male" },
    { name: "Dr Kanwal Arif", qualification: "Pediatrics", gender: "female" },

    // Pathology
    { name: "Dr Eijaz Ghani", qualification: "Pathology", unit: "AFIP Rwp", gender: "male" },
    { name: "Dr Irfan Ali Mirza", qualification: "Pathology", gender: "male" },
    { name: "Dr Hamid Saeed Mirza", qualification: "Pathology", gender: "male" },
    { name: "Dr Muhammad Qasier Alam Khan", qualification: "Pathology", gender: "male" },
    { name: "Dr Mehdi Raza", qualification: "Pathology", gender: "male" },
    { name: "Dr Muhammad Younas", qualification: "Pathology", gender: "male" },
    { name: "Dr Sajida Shaheen", qualification: "Pathology", gender: "female" },
    { name: "Dr Asma Hayat", qualification: "Pathology", gender: "female" },
    { name: "Dr Sikandar Hayat Khan", qualification: "Pathology", gender: "male" },
    { name: "Dr Sakeenah Hussain Naqvi", qualification: "Pathology", gender: "female" },
    { name: "Dr Syed Adeel Hussain Gardezi", qualification: "Pathology", gender: "male" },
    { name: "Dr Adil Arif", qualification: "Pathology", gender: "male" },
    { name: "Dr Asif Ali", qualification: "Pathology", gender: "male" },
    { name: "Dr Manzar Bozdar", qualification: "Pathology", gender: "male" },
    { name: "Dr Bushra Parveen", qualification: "Pathology", gender: "female" },
    { name: "Dr Muhammad Usman Rathore", qualification: "Pathology", gender: "male" },
    { name: "Dr Muhammad Roshan", qualification: "Pathology", gender: "male" },
    { name: "Dr Muhammad Ali Rathore", qualification: "Pathology", gender: "male" },
    { name: "Dr Omair Riaz", qualification: "Pathology", gender: "male" },
    { name: "Dr Muhammad Anwar", qualification: "Pathology", gender: "male" },
    { name: "Dr Rafia Mahmood", qualification: "Pathology", gender: "female" },
    { name: "Dr Ayesha Khurshid", qualification: "Pathology", gender: "female" },
    { name: "Dr Aysha Khan", qualification: "Pathology", gender: "female" },
    { name: "Dr Saadiya Mushtaq", qualification: "Pathology", gender: "female" },
    { name: "Dr Umair Aslam Shahzad Khan", qualification: "Pathology", gender: "male" },
    { name: "Dr Muhammad Hussain", qualification: "Pathology", gender: "male" },
    { name: "Dr Naveed Khan", qualification: "Pathology", gender: "male" },
    { name: "Dr Rabia Sajjad", qualification: "Pathology", gender: "female" },
    { name: "Dr Anam Imtiaz", qualification: "Pathology", gender: "female" },
    { name: "Dr Maria Mushtaq Gill", qualification: "Pathology", gender: "female" },
    { name: "Dr Syeda Samia Shafaat", qualification: "Pathology", gender: "female" },
    { name: "Dr Mustajab Alam", qualification: "Pathology", gender: "male" },

    // Nuclear Medicine
    { name: "Dr Zaigham Salim Dar", qualification: "Nuclear Medicine", gender: "male" },
    { name: "Dr Rebecca Sharoon", qualification: "Nuclear Medicine", gender: "female" },

    // Community Medicine
    { name: "Dr Syed Fawad Mashadi", qualification: "Community Medicine", unit: "AM College Rwp", gender: "male" },
    { name: "Dr Aliya Hisam", qualification: "Community Medicine", gender: "female" },

    // BMS (Anatomy)
    { name: "Dr Abdullah Qamar", qualification: "BMS (Anatomy)", gender: "male" },
    { name: "Dr Shabnam Hamid", qualification: "BMS (Anatomy)", gender: "female" },
    { name: "Dr Khadija Qamar", qualification: "BMS (Anatomy)", gender: "female" },
    { name: "Dr Muhammad Rizwan Bahir Kayani", qualification: "BMS (Anatomy)", gender: "male" },

    // BMS (Pharma)
    { name: "Dr Kulsoom Farhat", qualification: "BMS (Pharma)", gender: "female" },

    // Forensic Medicine
    { name: "Dr Safdar Hussain", qualification: "Forensic Medicine", gender: "male" },

    // Physiology
    { name: "Dr Ambreen Ahmed", qualification: "Physiology", gender: "female" },
    { name: "Dr Amina Nadeem", qualification: "Physiology", gender: "female" },
    { name: "Dr Muhammad Alamghir Khan", qualification: "Physiology", gender: "male" },

    // Bio Chemistry
    { name: "Dr Amir Rasheed", qualification: "Bio Chemistry", gender: "male" },

    // Surgery
    { name: "Dr Sohail Ilyas", qualification: "Surgery", unit: "CMH Rwp", gender: "male" },
    { name: "Dr Waseem Ahmad Khan", qualification: "Surgery", gender: "male" },
    { name: "Dr Muhammad Qasim Butt", qualification: "Surgery", gender: "male" },
    { name: "Dr Syed Mukarram Hussain", qualification: "Surgery", gender: "male" },
    { name: "Dr Imran Ashraf", qualification: "Surgery", gender: "male" },
    { name: "Dr Syeda Rifaat Qammar Naqvi", qualification: "Surgery", gender: "female" },
    { name: "Dr Nasir Mahmud Wattoo", qualification: "Surgery", gender: "male" },
    { name: "Dr Muhammad Ayub Ashraf", qualification: "Surgery", gender: "male" },
    { name: "Dr Khurram Sarfraz", qualification: "Surgery", gender: "male" },
    { name: "Dr Jamil Salamat Ullah", qualification: "Surgery", gender: "male" },
    { name: "Dr Naveed Ahmed", qualification: "Surgery", gender: "male" },
    { name: "Dr Bilal Saeed", qualification: "Surgery", gender: "male" },
    { name: "Dr Majid Aziz", qualification: "Surgery", gender: "male" },
    { name: "Dr Shahid Mehmood Khan", qualification: "Surgery", gender: "male" },
    { name: "Dr Muhammad Saleem Akhtar", qualification: "Surgery", gender: "male" },

    // Anesthesia
    { name: "Dr Fayyaz Hussain", qualification: "Anesthesia", unit: "CMH Rwp", gender: "male" },
    { name: "Dr Ghulam Sabir", qualification: "Anesthesia", gender: "male" },
    { name: "Dr Khalid Buland", qualification: "Anesthesia", gender: "male" },
    { name: "Dr Ameer Yasser Zaid", qualification: "Anesthesia", gender: "male" },
    { name: "Dr Humayum Munir", qualification: "Anesthesia", gender: "male" },
    { name: "Dr Qasim Ali Shah", qualification: "Anesthesia", gender: "male" },
    { name: "Dr Muhammad Rashid Iqbal", qualification: "Anesthesia", gender: "male" },

    // ENT
    { name: "Dr Maqbool Raza, TI (M)", qualification: "Entomology", unit: "CMH Rwp", gender: "male" },
    { name: "Dr Shakeel Ahmed", qualification: "Entomology", gender: "male" },
    { name: "Dr Dr Faisal Manzoor", qualification: "Entomology", gender: "male" },
    { name: "Dr Kamran Zamurrad Khan", qualification: "Entomology", gender: "male" },

    // Gynecology / Obstetrics
    { name: "Dr Tehreem Yazdani", qualification: "Gynecology / Obstetrics", unit: "PEMH Rwp", gender: "female" },
    { name: "Dr Viqar - Un - Nisa Ashraf", qualification: "Gynecology / Obstetrics", gender: "female" },
    { name: "Dr Asfa Siraj", qualification: "Gynecology / Obstetrics", gender: "female" },
    { name: "Dr Umiarah Yaqub", qualification: "Gynecology / Obstetrics", gender: "female" },

    // Radiology
    { name: "Dr Raza Rahim Hyder", qualification: "Radiology", unit: "AFIRI Rwp", gender: "male" },
    { name: "Dr Nisar Ahmed", qualification: "Radiology", gender: "male" },
    { name: "Dr Sara Iffat Zaffr", qualification: "Radiology", gender: "female" },
    { name: "Dr Koukab Javed", qualification: "Radiology", gender: "female" },
    { name: "Dr Rizwan Bilal", qualification: "Radiology", gender: "male" },
    { name: "Dr Muhammad Zeeshan Ali", qualification: "Radiology", gender: "male" },
    { name: "Dr Ghulam Abbas", qualification: "Radiology", gender: "male" },
    { name: "Dr Sara Khan", qualification: "Radiology", gender: "female" },
    { name: "Dr Saima Rauf", qualification: "Radiology", gender: "female" },
    { name: "Dr Khawaja Muhammad Bakar Hassan", qualification: "Radiology", gender: "male" },
    { name: "Dr Aliya Halim", qualification: "Radiology", gender: "female" },
    { name: "Dr Mubashrah Aziz", qualification: "Radiology", gender: "female" },
    { name: "Dr Humairah Saleem", qualification: "Radiology", gender: "female" },

    // Rehab Medicine
    { name: "Dr Muhammad Farooq Azam Rathore", qualification: "Rehab Medicine", unit: "AFIRM Rwp", gender: "male" },
    { name: "Dr Nadeem Ahmed", qualification: "Rehab Medicine", gender: "male" },
    { name: "Dr Noreen Akhtar", qualification: "Rehab Medicine", gender: "female" },
    { name: "Dr Mahmood Ahmed", qualification: "Rehab Medicine", gender: "male" },
    { name: "Dr Omer Jamshed khan", qualification: "Rehab Medicine", gender: "male" },

    // Ophthalmology
    { name: "Dr Waqar Muzaffar", qualification: "Ophthalmology", unit: "AFIO Rwp", gender: "male" },
    { name: "Dr Shagufta Parveen", qualification: "Ophthalmology", gender: "female" },
    { name: "Dr Zulfiqar Ud Din Syed", qualification: "Ophthalmology", gender: "male" },
    { name: "Dr Abid Hussan Naqvi", qualification: "Ophthalmology", gender: "male" },
    { name: "Dr Javed Ahmed", qualification: "Ophthalmology", gender: "male" },
    { name: "Dr Ubaid Ullah yasin", qualification: "Ophthalmology", gender: "male" },
    { name: "Dr Dr Ameer Arain", qualification: "Ophthalmology", gender: "male" },
    { name: "Dr Ayesha Fawad", qualification: "Ophthalmology", gender: "female" },

    // Orthodontics
    { name: "Dr Abdullah Jan", qualification: "Orthodontics", unit: "AFID Rwp", gender: "male" },

    // Prosthodontics
    { name: "Dr Mubshir Sharif", qualification: "Prosthodontics", gender: "male" },

    // Operative Dentistry
    { name: "Dr Nadeem Ahmed Rana", qualification: "Operative Dentistry", gender: "male" },
    { name: "Dr Syed Muzammil Hussain", qualification: "Operative Dentistry", gender: "male" },

    // OMFS
    { name: "Dr Adnan Babar", qualification: "OMFS", gender: "male" },
    { name: "Dr Muhammad Ishaq", qualification: "OMFS", gender: "male" }
];

const FacultyAndStaff = () => {
  const downloadPdf = async (url = "https://www.clickdimensions.com/links/TestPDFfile.pdf", fileName = "file") => {
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
                <h2 className="faculty-title desc">GATEWAY FOR FACULTY & STAFF</h2>
                <p style={{ fontSize: 22, boxShadow: "none", color: "black" }}>Faculty at AFPGMI plays a pivotal role in shaping future of medical education by instilling values of critical thinking, inclusivity and lifelong learning among its students</p>
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
              <div className="card" key={index} onClick={index === 0 ? () => window.open(Resume, "_blank") : () => {}}>
                <div style={{ backgroundDRor: "#fff", alignItems: "center" }} className="card-content">
                  <img src={user?.gender === "female" ? woman : PersonImg1} alt="Person" />
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
