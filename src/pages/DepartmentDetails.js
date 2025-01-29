import React from "react";
import AdmissonHeroImg from "../assets/4.jpg";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import NewsImg1 from "../assets/1.jpg";

const DepartmentDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const getContent = () => {
    if (state?.index === 0) {
      return (
        <div style={{ padding: "0px 30px" }}>
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
        </div>
      );
    } else if (state?.index === 1) {
      return (
        <div style={{ padding: "0px 30px" }}>
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
        </div>
      );
    } else if (state?.index === 2) {
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
    } else if (state?.index === 3) {
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
    } else if (state?.index === 4) {
      return (
        <div style={{ padding: "0px 30px" }}>
          <ul className="ol">
            {state?.data?.map((e, _) => (
              <li style={{}} key={_}>
                {e}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (state?.index === 5) {
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
        <div style={{ padding: "0px 30px" }}>
          <ul className="ol">
            {state?.data?.map((e, _) => (
              <li style={{}} key={_}>
                {e?.name}
              </li>
            ))}
          </ul>
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
