import React from "react";
import "./Home.css";
import heroImage from "../assets/Rectangle 2.png"


const Home = () => {
  return (
    <div className="home__container">
      <div className="left">
        <p>
          "Unlock your potential as a <span style={{color: "#00487C"}}>Mentor</span> and empower others to
          thrive."
        </p>
        <div className="btn__group">
          <button className="left__btn">
            Get Started as a Mentor
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="13px"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M2.92944 9.4353L16.6526 9.29845M11.5476 2.91125L18.0706 9.43424L11.4162 16.0886"
                stroke="#00A896"
                stroke-width="4"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="right__btn">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="13px"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M2.92944 9.4353L16.6526 9.29845M11.5476 2.91125L18.0706 9.43424L11.4162 16.0886"
                stroke="#00A896"
                stroke-width="4"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <img src={heroImage} alt="hero" />
      </div>
    </div>
  );
};

export default Home;
