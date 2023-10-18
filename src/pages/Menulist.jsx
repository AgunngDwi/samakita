import React from "react";
import NavbarMain from "../component/NavbarMain";
import Footer from "../component/Footer";
import ContentMenu from "../component/MenuList/ContentMenu";

export const Menulist = ({ btnVis }) => {
  return (
    <div>
      <NavbarMain btnVis={true} />
      <ContentMenu />
      <Footer />
    </div>
  );
};
