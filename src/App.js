import React from "react";
import { useRoutes } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "./routes";
const App = () => {
  const content = useRoutes(routes);

  return (
    <React.Fragment>
      <ScrollToTop />
      {content}
    </React.Fragment>
  );
};

export default App;

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
