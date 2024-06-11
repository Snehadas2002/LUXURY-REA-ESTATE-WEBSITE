import React from "react";
import { Link } from "react-router-dom";

const Regions = () => {
  return (
    <>
      <section id="regions">
        <h1>OUR REGIONS</h1>

        <div className="region_container">
          <Link to="/mountainregion" style={{ textDecoration: "none" }}>
            <div className="card">
              <img src="/region1.jpg" alt="mountains" />
              <h2>Mountains</h2>
              <p>
                <span>90</span> Properties
              </p>
            </div>
          </Link>
          <Link to="/Seaside" style={{ textDecoration: "none" }}>
            <div className="card">
              <img src="/region2.jpg" alt="coastline" />
              <h2>Coastline</h2>
              <p>
                <span>52</span> Properties
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Regions;
