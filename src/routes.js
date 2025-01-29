import PublicLayout from "./components/layout/PublicLayout";
import Admission from "./pages/Admission";
import AcedmiceDetails from "./pages/AcedmiceDetails";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import FacultyAndStaff from "./pages/FacultyAndStaff";
import News from "./pages/News";
import Research from "./pages/Research";
import AboutUs from "./pages/aboutUs";
import Academics from "./pages/acedemics";
import LandingScreen from "./pages/landingScreen";
import StaffUser from "./pages/staffUser";
import AcademicsDetails from "./pages/acedemicsDetails";
import Gallery from "./pages/Gallery";
import CampusLife from "./pages/CampusLife";
import Departments from "./pages/Departments";
import ResearchDepartments from "./pages/ResearchDepartments";
import MainGallery from "./pages/MainGallery";
import AdmissonSubDetails from "./pages/AcedmicsSubDetails";
import NewsDetails from "./pages/NewsDetails";
import AdmissionDetails from "./pages/AdmissionDetails";
import DepartmentDetails from "./pages/DepartmentDetails";
const routes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <LandingScreen /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/academics", element: <Academics /> },
      { path: "/academics/:id", element: <AcademicsDetails /> },
      { path: "/academics/:id/details", element: <AcedmiceDetails /> },
      // { path: "/academics/:id/sub-details/:_id", element: <AdmissonSubDetails /> },

      { path: "/admission", element: <Admission /> },
      { path: "/admission/:id", element: <AdmissionDetails /> },

      { path: "/faculty-and-staff", element: <FacultyAndStaff /> },
      { path: "/events", element: <Events /> },
      { path: "/news", element: <News /> },
      { path: "/news/:id", element: <NewsDetails /> },

      { path: "/research", element: <Research /> },
      { path: "/contact-us", element: <ContactUs /> },
      // { path: "/person-Information", element: <PersonInformation /> },
      { path: "/gallery/:id", element: <Gallery /> },
      { path: "/gallery", element: <MainGallery /> },
      { path: "/campus-life", element: <CampusLife /> },
      { path: "/departments", element: <Departments /> },
      { path: "/departments/:id", element: <DepartmentDetails /> },
      { path: "/research-departments", element: <ResearchDepartments /> },
    ],
  },

  {
    path: "*",
    element: <PublicLayout />,
    children: [{ path: "*", element: <p>Page Not Found</p> }],
  },
];

export default routes;
