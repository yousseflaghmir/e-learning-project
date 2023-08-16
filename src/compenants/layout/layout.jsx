import React from "react";
import Footer from "../Footer/footer";
import Header from "../header/header";
import {Outlet} from "react-router-dom"
const layout = () => {
  return (
    <>
      <div style={{background:"var(--black)", overflow:""}}>
        <Header />
        <Outlet/>
      </div>
      <Footer />
    </>
  );
};

export default layout;



/*chof la button dyl lheader rah mabghatch tkhdem lik */