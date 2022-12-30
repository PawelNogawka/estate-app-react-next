import React from "react";

import Head from "next/head";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <header className="header">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="footer section-padding">@RentPurpose 2022</footer>
      </div>
    </>
  );
};

export default Layout;
