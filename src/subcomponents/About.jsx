import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
          Imagine a digital sanctuary where hospitality meets seamless efficiency—a hotel management website crafted to redefine the essence of hospitality. With elegant design and intuitive functionality, this virtual gateway invites guests into a world of unparalleled comfort and convenience. From the moment visitors arrive, they are greeted by a captivating interface that seamlessly guides them through a tailored journey, effortlessly booking their dream accommodations, dining experiences, and personalized services with a few clicks.
          </p>
         
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
