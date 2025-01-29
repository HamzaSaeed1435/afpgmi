import React from "react";
import ResearchDishImg from "../assets/dish-andrew.jpg";

const Research = () => {

  const data = [
    {
      name: "RESEARCH & DEVELOPMENT",
      // image: DepartmentsHeroImg4,
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
  ];

  return (
    <div className="page-template page-template-landing-page page-template-landing-page-php page page-id-102">
      <main id="main" role="main">
        <h2 id="main-content" className="sr-only-element" tabindex="-1">
          Main Content
        </h2>
        <header>
          <h1>RESEARCH</h1>
        </header>

        <section className="panel-collection" data-modular-content-collection>
          <section className="panel" data-type="wysiwyg" id="positioning-statement" data-modular-content data-js="panel" data-index="0" data-width="content">
            <div className="content">
            </div>
          </section>

          {/* <section className="panel" data-type="hero-image" id="research-hero-image" data-modular-content data-js="panel" data-index="1" data-width="full">
            <figure data-text-loc-v="top" data-text-loc-h="left" data-text-display="hover">
              <picture>
                <source media="(max-width: 575px)" />
                <source media="(min-width: 576px)" />

                <img alt="" src={ResearchDishImg} />
              </picture>
            </figure>
          </section> */}

          <section className="panel" data-type="highlights" id="where-research-happens" data-width="full" data-posts-per-row="2">
            <div className="grid-container">
              {data.map((e) => (
                <section className="highlight" style={{ border: "1px solid black" }}>
                  <figure className="landscape">
                    <picture>
                      <img role="presentation" alt="SLAC National Accelerator Laboratory" src={ResearchDishImg} />
                    </picture>
                  </figure>
                  <div className="" style={{ padding: "10px 20px" }}>
                    <h3 style={{ textAlign: "center" }}>{e.name}</h3>
                    {e?.data?.map((e, _) => (
                      <li style={{}} key={_}>
                        {e?.name}
                      </li>
                    ))}
                  </div>
                </section>

                //
              ))}
              {/* <section className="highlight">
                <figure className="landscape">
                  <picture>
                    <img role="presentation" alt="SLAC National Accelerator Laboratory" src={ResearchDishImg} />
                  </picture>
                </figure>
                <h3>SLAC National Accelerator Laboratory</h3>
                <p>SLAC is a U.S. Department of Energy national laboratory operated by , conducting research in chemistry, materials and energy sciences, bioscience, fusion energy science, high-energy physics, cosmology and other fields.</p>
                <p>
                  <a class="jump-link">
                    SLAC National Accelerator Laboratory
                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                  </a>
                </p>
              </section>
              <section className="highlight">
                <figure className="landscape">
                  <picture>
                    <img role="presentation" alt="" src={ResearchDishImg} />
                  </picture>
                </figure>
                <h3>Hoover Institution</h3>
                <p>The Hoover Institution, devoted to the study of domestic and international affairs, was founded in 1919 by Herbert Hoover, a member of pioneer className of 1895 and the 31st U.S. president.</p>
                <p>
                  <a class="jump-link">
                    Hoover Institution
                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                  </a>
                </p>
              </section>
              <section className="highlight">
                <figure className="landscape">
                  <picture>
                    <img role="presentation" alt="Two graduate students chat during a coffee break at the O&#039;Donohue Family  Educational Farm" src={ResearchDishImg} />
                  </picture>
                </figure>
                <h3> Woods Institute for the Environment</h3>
                <p>Working toward a future in which societies meet people’s needs for water, food and health while protecting and nurturing the planet.</p>
                <p>
                  <a class="jump-link">
                    Woods Institute
                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                  </a>
                </p>
              </section>
              <section className="highlight">
                <figure className="landscape">
                  <picture>
                    <img role="presentation" alt="" src={ResearchDishImg} />
                  </picture>
                </figure>
                <h3> Humanities Center</h3>
                <p>Advancing research into the historical, philosophical, literary, artistic, and cultural dimensions of the human experience.</p>
                <p>
                  <a class="jump-link">
                    Humanities Center
                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                  </a>
                </p>
              </section>
              <section className="highlight">
                <figure className="landscape">
                  <picture>
                    <img role="presentation" alt="" src={ResearchDishImg} />
                  </picture>
                </figure>
                <h3> Bio-X</h3>
                <p>Biomedical and life science researchers, clinicians, engineers, physicists and computational scientists come together to unlock the secrets of the human body.</p>
                <p>
                  <a class="jump-link">
                    Bio-X
                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                  </a>
                </p>
              </section>
              <section className="highlight">
                <figure className="landscape">
                  <picture>
                    <img role="presentation" alt='Former U.S. President Barack Obama delivers the keynote address at "Challenges to Democracy in the Digital Information Realm," a symposium co-hosted by the  Cyber Policy Center and the ObamaFoundation .' src={ResearchDishImg} />
                  </picture>
                </figure>
                <h3>Freeman Spogli Institute for International Studies (FSI)</h3>
                <p>Understanding problems, policies and processes that cross borders and affect lives around the world.</p>
                <p>
                  <a class="jump-link">
                    Freeman Spogli Institute
                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                  </a>
                </p>
              </section> */}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Research;
