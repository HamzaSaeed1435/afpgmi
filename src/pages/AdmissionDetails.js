import React from "react";
import { useLocation } from "react-router-dom";
import NewsImg1 from "../assets/1.jpg";

const AdmissionDetails = () => {
  const { state } = useLocation();
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="img-overlay-container admission-details-overlay admission-details-card-overlay">
          <h3>{state?.title}</h3>
          <br />
          <div style={{ minHeight: "40vh" }}>
            {state?.reqTitle && (
              <p style={{ fontSize: "22px" }}>
                <b>{state?.reqTitle} </b>
              </p>
            )}
            {state?.req ? (
              <ul>
                {state?.req?.map((e) => (
                  <li key={e?.nmae || e}>
                    {e?.name || e}
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
            ) : null}

            {state?.title === "PhD" && (
              <div>
                <p style={{ fontSize: "22px" }}>
                  <b>{state?.criteria?.title}: </b>
                </p>
                <p style={{ fontSize: "16px" }}>{state?.criteria?.components?.admissionCriteria?.description}</p>
                <ul>
                  {state?.criteria?.components?.admissionCriteria?.components?.map((e) => (
                    <li key={e} style={{ margin: "0px" }}>
                      {e}
                    </li>
                  ))}
                </ul>

                <p style={{ fontSize: "18px" }}>
                  <b>Note: </b> {state?.criteria?.components?.admissionCriteria?.note}
                </p>
              </div>
            )}
          </div>
        </div>

        <img src={NewsImg1} style={{  width: "100%" }} />
      </div>
      <br />

      {state?.title === "PhD" && (
        <div className="page-template page-template-landing-page page-template-landing-page-php page page-id-2250">
          <main id="main" role="main">
            <section className="panel" data-type="wysiwyg" id="news-messaging" data-modular-content data-js="panel" data-index="0" data-width="content">
              <div className="content">
                <h3>{state?.criteria?.components?.academicRequirement?.title}</h3>
                <ol>
                  {state?.criteria?.components?.academicRequirement?.description?.map((e) => (
                    <li>{e}</li>
                  ))}
                </ol>
              </div>

              <div className="content">
                <h3>{state?.criteria?.components?.testingRequirement?.title}</h3>
                <p>{state?.criteria?.components?.testingRequirement?.description}</p>
              </div>

              <div className="content">
                <h3>{state?.criteria?.components?.academicStatementOfPurpose?.title}</h3>
                <p>{state?.criteria?.components?.academicStatementOfPurpose?.description}</p>

                <p>
                  <b>Words Limit: </b>
                  {state?.criteria?.components?.academicStatementOfPurpose?.wordLimit}
                </p>
                <p>{state?.criteria?.components?.academicStatementOfPurpose?.desc}</p>
                <ol>
                  {state?.criteria?.components?.academicStatementOfPurpose?.sections?.map((e) => (
                    <li>{e}</li>
                  ))}
                </ol>
              </div>

              <div className="content">
                <h3>{state?.criteria?.components?.interview?.title}</h3>
                <ol>
                  {state?.criteria?.components?.interview?.description?.map((e) => (
                    <li>{e}</li>
                  ))}
                </ol>
              </div>
            </section>
          </main>
        </div>
      )}
      {state?.title === "MPhil" && (
        <div className="page-template page-template-landing-page page-template-landing-page-php page page-id-2250">
          <main id="main" role="main">
            <section className="panel" data-type="wysiwyg" id="news-messaging" data-modular-content data-js="panel" data-index="0" data-width="content">
              <div className="content">
                <h3>Compnents Percentage:</h3>
                <ol>
                  {state?.percentage?.map((e) => (
                    <li key={e}> {e}</li>
                  ))}
                </ol>
              </div>
            </section>
          </main>
        </div>
      )}

      {state?.title === "Fellow of College of Physicians and Surgeons (FCPS) in Sub Specialties (2nd Fellowship)" && (
        <div className="page-template page-template-landing-page page-template-landing-page-php page page-id-2250">
          <main id="main" role="main">
            <section className="panel" data-type="wysiwyg" id="news-messaging" data-modular-content data-js="panel" data-index="0" data-width="content">
              <div className="content">
                <h3>Duration:</h3>
                <p>{state?.duration}</p>
              </div>
              <div className="content">
                <h3>Location:</h3>
                <p>{state?.location}</p>
              </div>
              <div className="content">
                <h3>Degree Awarding Institute:</h3>
                <p>{state?.awardWinning}</p>
              </div>

              <div className="content">
                <h3>Course Strength:</h3>
                <p>{state?.strength}</p>
              </div>
              <div className="content">
                <h3>Frequency:</h3>
                <p>{state?.freq}</p>
              </div>
              <div className="content">
                <h3>Learning Outcomes:</h3>
                <p>{state?.outcomes}</p>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default AdmissionDetails;
