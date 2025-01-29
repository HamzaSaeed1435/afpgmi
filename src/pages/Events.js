import React from "react";

const Events = () => {
  const paraStyle = { textAlign: "center", fonstSize: "1.5625" };

  return (
    <div className="page-template page-template-landing-page page-template-landing-page-php page page-id-2274">
      <main id="main" role="main">
        <h2 id="main-content" className="sr-only-element" tabindex="-1">
          Main Content
        </h2>
        <header>
          <h1>Upcoming Events</h1>
        </header>

        <section className="panel-collection" data-modular-content-collection>
          <section className="panel" data-type="wysiwyg" id="messaging-statement" data-modular-content data-js="panel" data-index="0" data-width="full">
            <div className="content">
              <p style={paraStyle}>Explore opportunities to engage with people, ideas, art, and education across campus.</p>
              <p style={paraStyle}></p>
            </div>
          </section>

          <section className="panel theme--white" data-type="section"  data-modular-content data-js="panel" data-index="3">
            <section className="panel" data-type="localist" id="localist-1" data-width="full">
              <div className="panel__content localist-widget">
                <div id="localist-widget-6803070" className="localist-widget"></div>
              </div>
            </section>

          </section>
        </section>
      </main>
    </div>
  );
};

export default Events;
