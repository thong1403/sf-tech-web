import React from "react";
import Navbar from "./../navbar/Navbar";
import Footer from "../footer/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../aboutUs/AboutUs";
import ContactUs from "../contactUs/ContactUs";
import Industries from "../Industries/Industries";
import HomePage from "./../homePage/HomePage";
import './Home.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="router-page">
        <Routes>
          <Route path="/sf-tech-web" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Industries" element={<Industries />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
