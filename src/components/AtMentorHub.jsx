import React from "react";
import heroImage from "../assets/Photo.jpg"
import "./AtMentorHub.css";

const AtMentorHub = () => {
  return (
    <div className="about__container">
      <div className="about__left">
        <h1>At Mentor Hub</h1>
        <p>
          we believe in the power of mentorship. We provide a platform where
          passionate individuals like you can share your expertise and make a
          positive impact on others. Whether you're an experienced professional,
          an industry expert, or a seasoned entrepreneur, Mentor Hub offers you
          the opportunity to connect with mentees, guide them on their journey,
          and shape their future.
        </p>
        <button>
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
      <div className="about__right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default AtMentorHub;
