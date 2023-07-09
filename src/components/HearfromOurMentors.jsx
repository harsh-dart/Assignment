import React from "react";
import "./HearfromOurMentors.css";
import maliniImage from "../assets/Photo2.png";
import archanaImage from "../assets/Photo3.png";
import deepakImage from "../assets/Photo4.png";

const HearfromOurMentors = () => {
  return (
    <div className="hearfromOurMentors__parent__container">
      <div className="hearfromOurMentors__container">
        <h1>Hear from Our Mentors</h1>
        <div className="hearfromOurMentors__card__container">
          <div className="hearfromOurMentors__card">
            <div className="hearfromOurMentors__card__author">
              <img src={maliniImage} alt="malini" />
              <div>
                <p className="mentor__name">Malini sindhu</p>
                <p className="mentor__address">chennai , INDIA</p>
              </div>
            </div>
            <p className="mentor__comment">
              "Being a mentor on Mentor Hub has been an incredibly rewarding
              experience. I've had the opportunity to share my knowledge and
              guide aspiring professionals in their career journeys.”
            </p>
          </div>
          <div className="hearfromOurMentors__card">
            <div className="hearfromOurMentors__card__author">
              <img src={archanaImage} alt="archana" />
              <div>
                <p className="mentor__name">Archana Nair</p>
                <p className="mentor__address">kerala , INDIA</p>
              </div>
            </div>
            <p className="mentor__comment">
              "Mentor Hub has exceeded my expectations. The platform's
              user-friendly design and comprehensive profile customization
              options have allowed me to showcase my expertise and build
              credibility with mentees”.
            </p>
          </div>
          <div className="hearfromOurMentors__card">
            <div className="hearfromOurMentors__card__author">
              <img src={deepakImage} alt="deepak" />
              <div>
                <p className="mentor__name">Deepak Dinesh</p>
                <p className="mentor__address">chennai , INDIA</p>
              </div>
            </div>
            <p className="mentor__comment">
              "As a mentor on Mentor Hub, I've been able to connect with mentees
              from around the world, bridging geographical boundaries. The
              platform's robust search functionality and categorization have
              made it easy for mentees to find me based on their specific
              needs.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearfromOurMentors;
