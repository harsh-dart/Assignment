import React from "react";
import heroImage from "../assets/Photo1.png";
import "./JoinOurCommunityMentors.css";

const JoinOurCommunityMentors = () => {
  return (
    <div className="joinOurCommunityMentors__parent__container">
      <div className="joinOurCommunityMentors__container">
        <div className="joinOurCommunityMentors__left">
          <img src={heroImage} alt="hero" />
        </div>
        <div className="joinOurCommunityMentors__right">
          <h1>Join Our Community of Mentors</h1>
          <p>
            Becoming a mentor on Mentor Hub is quick and easy. Follow these
            simple steps to get started.
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
      </div>
    </div>
  );
};

export default JoinOurCommunityMentors;
