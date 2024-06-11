import React from "react";
import AboutComponentMini from "../../subcomponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Step into a realm of digital hospitality where elegance meets efficiency. Our hotel management website seamlessly blends stylish design with intuitive functionality, offering guests a streamlined experience from booking to check-out. With just a few clicks, visitors can reserve accommodations, arrange dining experiences, and access personalized services, all guided by a captivating interface. Immerse yourself in the epitome of hospitality, where every detail is crafted to ensure a memorable stay.</p>
         
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
