import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import StickyButton from "../components/StickyButton"
import LaunchingSoon from "../components/LaunchingSoon";
const Layout = () => {

  return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />
        <LaunchingSoon />
        <StickyButton />
        {/* Main Content */}
        <main className="flex-1 pt-24 relative">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
  );
};

export default Layout;