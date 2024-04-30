import { Outlet } from "react-router-dom";
import Footer from "./components/App/Footer";
import Header from "./components/App/Header";

import { Scrollbars } from "react-custom-scrollbars";

function CustomVerticalThumb({ style, ...props }) {
  const thumbStyle = {
    backgroundColor: "#0073fa",
    width: "8px",
    borderRadius: "4px",
    Bottom: "0px",
    zIndex: 999,
  };

  return <div style={{ ...style, ...thumbStyle }} {...props} />;
}

export default function Template() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
    
  );
}
