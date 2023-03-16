import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";



const ScrollToTop= ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
