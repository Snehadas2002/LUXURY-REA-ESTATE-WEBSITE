import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>ARORA Villas</h4>
          <p>
          Indulge in seamless hospitality with our hotel management website. Effortlessly book accommodations, dining, and personalized services through a stylish and intuitive interface. Experience the pinnacle of hospitality, where every detail is designed for your comfort and convenience.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>6345738838</p>
          <p>das@gmail.com</p>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
