import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
//
import { TbBrandMiniprogram } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { GiArchiveResearch } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";

const PublicLayout = ({ children }) => {
  const navigate = useNavigate();
  const [viewSidebar, setViewSidebar] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") setViewSidebar(true);
  }, [window.location.pathname]);

  const links = [
    { title: "Our Story", icon: <FaBook />, route: "/about-us" },
    {
      title: "Academic Programs",
      icon: <TbBrandMiniprogram />,
      route: "/academics",
    },
    { title: "Admissions", icon: <FaAddressCard />, route: "/admission" },
    { title: "Faculty", icon: <ImUsers />, route: "/faculty-and-staff" },
    { title: "News & Events", icon: <RiNewspaperLine />, route: "/news" },
    {
      title: "Research & Innovation",
      icon: <GiArchiveResearch />,
      route: "/research",
    },
    { title: "Gallery", icon: <RiGalleryFill />, route: "/gallery" },

    { title: "Contact Us", icon: <BiSolidContact />, route: "/contact-us" },
  ];

  return (
    <div>
      <Header setViewSidebar={setViewSidebar} viewSidebar={viewSidebar} />
      <div className={`main-content-container ${viewSidebar && "main-content-container-open"}`} style={{minHeight:'62vh'}}>
        {children}
        <Outlet />
      </div>
      <Footer />
      {/* <div
        className={`overlay ${!viewSidebar && "overlayHidden"} ${
          viewSidebar && "overlayOpen requires-no-scroll"
        } `}
        onClick={() => setViewSidebar(false)}
        aria-hidden="true"
      />
      <div
        tabIndex="-1"
        className={`drawer ${viewSidebar && "animate"} ${
          !viewSidebar && "hidden"
        } right`}
      >
        <div
          style={{
            position: "fixed",
            cursor: "pointer",
            right: "20px",
            top: "20px",
          }}
          onClick={() => setViewSidebar(false)}
        >
          <ImCross style={{ color: "#fff", fontSize: "20px" }} />
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="menu-link-container">
          {links.map((li) => (
            <div
              className="menu-link"
              key={li.title}
              onClick={() => {
                navigate(li.route);
                setViewSidebar(false);
              }}
            >
              {li.title}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default PublicLayout;
