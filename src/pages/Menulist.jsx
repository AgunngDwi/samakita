import React from "react";
import NavbarMain from "../component/NavbarMain";
import Footer from "../component/Footer";

export const Menulist = ({ btnVis }) => {
  return (
    <div>
      <NavbarMain btnVis={true} />
      <Footer />
    </div>
  );
};
