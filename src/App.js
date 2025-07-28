import React, { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const content = useRoutes(routes);

  // Disable right-click globally
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <React.Fragment>
      <ScrollToTop />
      {content}
    </React.Fragment>
  );
};

export default App;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
