import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen container mx-auto px-8">
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
