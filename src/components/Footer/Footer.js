import React from "react";
import ContactUs from "../../pages/ContactUs";

const Footer = () => {
  let isFooterToBottom = window.location.pathname.includes("departments/");

  // if (window.innerWidth <= 700)
    isFooterToBottom = false;

  return (
    <div style={isFooterToBottom ? { position: "fixed", width: "100%", bottom: 0 } : {}}>
      <ContactUs />
      <div
        id="footer__global-footer"
        data-ga-action="Global footer"
        style={{
          padding: "4px",
          position: "relative",
          backgroundColor: "#1f457e",
          width: "100%",
          marginLeft: "0px",
        }}
      >
        <div id="global-footer__brand" style={{ textAlign: "center", float: "none", marginLeft: "0px", fontSize: "18px" }}>
          Armed Forces Post Graduate Medical Institute
        </div>

        <div id="global-footer__info">
          <p className="vcard" style={{ textAlign: "center" }}>
            <span aria-hidden="true">©</span>
            <span class="sr-only-text">Copyright </span>
            <span class="fn org" style={{ fontSize: "18px", textAlign: "center" }}>
              AFPGMI
            </span>
            . &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
