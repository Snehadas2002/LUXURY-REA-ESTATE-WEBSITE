import React, { useEffect, useState } from "react";
import { villas } from "../villas";
import { Link } from "react-router-dom";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBath, FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";

function mountainregion() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let result = await fetch("http://localhost:8080/villas/category/seaside");
      result = await result.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Error fetching Data", error);
    }
  };
  console.log(data);
  return (
    <>
      <div className="page" id="allVillas">
        <h1>HOTELS</h1>
        <p>{data.length} Properties</p>
        <div className="villasContainer">
          {data.map((element) => {
            return (
              <Link
                to={`/villa/${element.id}`}
                className="card"
                key={element.id}
              >
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
                <div className="specifications">
                  <div className="spec">
                    <IoIosPeople />
                    <span>{element.guests}</span>
                    Guests
                  </div>
                  <div className="spec">
                    <FaBed />
                    <span>{element.bedrooms}</span>
                    Bedrooms
                  </div>
                  <div className="spec">
                    <BiArea />
                    <span>{element.squaremeter}</span>
                    Area
                  </div>
                  <div className="spec">
                    <FaBath />
                    <span>{element.bathrooms}</span>
                    Bathrooms
                  </div>
                </div>
                <div className="badge">
                  From <span>€{element.dailyrent} / Day </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default mountainregion;
