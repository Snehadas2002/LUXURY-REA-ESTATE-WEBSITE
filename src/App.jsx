import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Villas from "./components/Villa/Villas";
import SingleVilla from "./components/Villa/SingleVilla";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Mountain from "./subcomponents/Mountain";
import Seaside from "./subcomponents/Seaside";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/villa/:id" element={<SingleVilla />} />
          <Route path="/mountainregion" element={<Mountain />} />
          <Route path="/Seaside" element={<Seaside />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
