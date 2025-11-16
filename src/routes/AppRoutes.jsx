import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Layout from "../layouts/Layout";

// Pages
import Home from "../pages/Home";
import Services from "../pages/Services";
import Courses from "../pages/Courses"; // renamed from Academy to Courses for clarity
import Contact from "../pages/Contact";
import About from "../pages/About";
import HireForm from "../pages/HireForm";
import DetailedCourse from "../pages/DetailedCourse"; 
// import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* All main pages wrapped in Layout (Header + Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<DetailedCourse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-request" element={<HireForm />} />

        </Route>

        {/* 404 Page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
