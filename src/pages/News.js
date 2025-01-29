import React from "react";
import NewsImg1 from "../assets/1.jpg";
import NewsImg2 from "../assets/2.jpg";
import { useNavigate } from "react-router-dom";

const News = () => {
  const contentTextStyle = { textAlign: "center", fontSize: "1.5625em" };
  const navigate = useNavigate();
  const news = [
    {
      title: "UNIVERSITY AFFAIRS ",
      desc: "alum, business school dean Jonathan Levin named president",
      img: NewsImg1,
    },
    {
      title: "SOCIAL SCIENCES",
      desc: "How to avoid a conflict spiral ",
      img: NewsImg2,
    },
    {
      title: "MEDICINE",
      desc: "Generative AI develops potential antibiotics",
      img: NewsImg1,
    },
    {
      title: "SCIENCE & TECHNOLOGY ",
      desc: "What does a just environmental future look like?",
      img: NewsImg2,
    },
    {
      title: "TEACHING & STUDENTS",
      desc: "alum, business school dean Jonathan Levin named president",
      img: NewsImg1,
    },
  ];

  return (
    <div className="page-template page-template-landing-page page-template-landing-page-php page page-id-2250">
      <main id="main" role="main">
        <h2 id="main-content" className="sr-only-element" tabindex="-1">
          Main Content
        </h2>
        <header>
          <h1>NEWS & EVENTS</h1>
        </header>

        <section className="panel-collection" data-modular-content-collection>
          <section className="panel" data-type="wysiwyg" id="news-messaging" data-modular-content data-js="panel" data-index="0" data-width="content">
            <div className="content">
              <p style={contentTextStyle}>Stories about people, research, and innovation across the Institute</p>
            </div>
          </section>

          <section className="panel theme--white" data-type="section" id="recent-news-from--university" data-modular-content data-js="panel" data-index="3">
            <section className="panel" data-type="posts" id="stories" data-width="full" data-posts-per-row="4" data-featured-post="none">
              <div className="grid-container">
                {news.map((n, i) => (
                  <article style={{ cursor: "pointer" }} onClick={() => navigate(`/news/${i}`, { state: n })} key={i}>
                    <figure className="landscape">
                      <a aria-hidden="true" tabindex="-1">
                        <picture data-anchor-v="center" data-anchor-h="center">
                          <img role="presentation" alt="" src={n.img} />
                        </picture>
                      </a>
                    </figure>
                    <div className="content">
                      <div className="post-meta">
                        <p className="post-category">{n.title}</p>
                      </div>
                      <h3>
                        <a>{n.desc}</a>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default News;
