import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { FaCalendarAlt, FaRegClosedCaptioning } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { TbBrandMiniprogram } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { MdEmojiEvents } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { GiArchiveResearch } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";
import { FcDepartment } from "react-icons/fc";
import { FaRegLifeRing } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import "./styles.css";

const Header = ({ viewSidebar, setViewSidebar }) => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [menuSpring, menuApi] = useSpring(() => ({
    from: { position: "absolute", right: "-200px" },
  }));
  const [menuItemsSpring, menuItemsApi] = useSpring(() => ({
    from: { position: "absolute", right: "0px" },
  }));
  useEffect(() => {
    if (window.location.pathname === "/") setOffset(1);
  }, [window.location.pathname]);

  const menuItems = [
    { title: "Home", icon: <AiOutlineMenu />, route: "/" },
    { title: "Our Story", icon: <FaBook />, route: "/about-us" },
    { title: "Departments", icon: <FcDepartment />, route: "/departments" },
    { title: "Academic Programs", icon: <TbBrandMiniprogram />, route: "/academics" },
    { title: "Admissions", icon: <FaAddressCard />, route: "/admission" },
    { title: "Faculty", icon: <ImUsers />, route: "/faculty-and-staff" },
    // { title: "News & Events", icon: <RiNewspaperLine />, route: "/news" },
    { title: "Research & Innovation", icon: <GiArchiveResearch />, route: "/research" },
    { title: "Campus Life", icon: <FaRegLifeRing />, route: "/campus-life" },
    { title: "Gallery", icon: <RiGalleryFill />, route: "/gallery" },
    // { title: "Contact Us", icon: <BiSolidContact />, route: "/contact-us" },
  ];

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      if (offset > 30) setViewSidebar(false);
      else setViewSidebar(true);
    }
  }, [offset, window.location.pathname]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      if (offset > 0) {
        menuApi.start({
          from: { position: "absolute", right: "-100px" },
          to: { position: "absolute", right: "0px" },
        });
      } else {
        menuApi.start({
          from: { position: "absolute", right: "-100px" },
          to: { position: "absolute", right: "0px" },
        });
      }
    } else {
      menuApi.start({
        from: { position: "absolute", right: "-100px" },
        to: { position: "absolute", right: "0px" },
      });
    }
  }, [offset !== 0, window.location.pathname]);

  useEffect(() => {
    if (viewSidebar) {
      menuItemsApi.start({
        from: { position: "absolute", right: "-100px" },
        to: { position: "absolute", right: "0px" },
      });
    } else {
      menuItemsApi.start({
        from: { position: "absolute", right: "0px" },
        to: { position: "absolute", right: "-300px" },
      });
      // if (offset > 0) {
      //   menuItemsApi.start({
      //     from: { position: "absolute", right: "-100px" },
      //     to: { position: "absolute", right: "0px" },
      //   });
      // } else {
      //   menuItemsApi.start({
      //     from: { position: "absolute", right: "0px" },
      //     to: { position: "absolute", right: "0px" },
      //   });
      // }
    }
  }, [viewSidebar]);

  return (
    <div style={{ position: "absolute", zIndex: 999999999999 }}>
      <animated.div
        style={{
          background: "rgba(213,220,232,.8)",
          padding: "14px 20px",
          ...menuSpring,
          position: "fixed",
          cursor: "pointer",
          zIndex: 99999999,
          top: "2px",
        }}
        onClick={() => setViewSidebar((e) => !e)}
      >
        {viewSidebar ? <ImCross style={{ color: "#002d72" }} /> : <AiOutlineMenu style={{ color: "#002d72" }} />}
      </animated.div>

      <animated.div style={{ ...menuItemsSpring, position: "fixed", top: 80 }}>
        {menuItems.map((item) => (
          <div
            key={item.title}
            className={`active-menu-item ${window.location.pathname == item.route && "active-sub-menu-item-active "}  `}
            onClick={() => {
              if (item.title === "Menu") setViewSidebar((e) => !e);
              else {
                navigate(item.route);
                setViewSidebar(false);
              }
            }}
          >
            {item.icon} {item.title}
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default Header;
