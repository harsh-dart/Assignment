import React from "react";
import "./MentorshipAreas.css";

const MentorshipAreas = () => {
  return (
    <div className="mentorshipAreas__parent__container">
      <div className="mentorshipAreas__container">
        <h1>Explore Diverse Mentorship Areas</h1>
        <div className="mentorshipAreas__content__container">
          <div className="mentorshipAreas__content">
            <h2>Business and Entrepreneurship</h2>
            <p className="content__para">
              Dive into the world of business and entrepreneurship. Our mentors
              in this area can provide valuable insights on topics like business
              strategy, marketing, finance, startups, leadership, and innovation
            </p>
            <p className="readmore">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M1.92944 8.93536L15.6526 8.79851M10.5476 2.41132L17.0706 8.9343L10.4162 15.5887"
                  stroke="#00A896"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
          <div className="mentorshipAreas__content">
            <h2>Arts and Creativity</h2>
            <p className="content__para">
              Unleash your creative potential with our mentors in the arts and
              creativity. Whether you're passionate about visual arts, writing,
              music, photography, or performing arts, our mentors can provide
              you with the necessary guidance and inspiration.
            </p>
            <p className="readmore">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M1.92944 8.93536L15.6526 8.79851M10.5476 2.41132L17.0706 8.9343L10.4162 15.5887"
                  stroke="#00A896"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
          <div className="mentorshipAreas__content">
            <h2>Technology</h2>
            <p className="content__para">
              Enhance your skills in the ever-evolving field of technology. Our
              technology mentors can guide you in areas such as software
              development, web design, data science, cybersecurity, artificial
              intelligence, and more
            </p>
            <p className="readmore">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M1.92944 8.93536L15.6526 8.79851M10.5476 2.41132L17.0706 8.9343L10.4162 15.5887"
                  stroke="#00A896"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>
        <button>
          Find Your Mentor
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M1.92944 8.93536L15.6526 8.79851M10.5476 2.41132L17.0706 8.9343L10.4162 15.5887"
              stroke="#00A896"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MentorshipAreas;
