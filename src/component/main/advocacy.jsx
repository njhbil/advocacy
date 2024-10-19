import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Sdgs from "../foto/sdgs.png";
import Mhs from "../foto/mhs.png";
import Support from "../foto/support.png";
import Motivation from "../foto/motivation.png";
import Boost from "../foto/boost.png";
import "./advocacy.css";
import styled from "styled-components";

const AnimatedText = styled.h4`
  transition: color 0.5s ease, transform 0.5s ease;

  &:hover {
    color: #fff000;
    transform: scale(1.35);
  }
`;

const AnimatedTextst = styled.h5`
  transition: color 0.5s ease, transform 0.5s ease;

  &:hover {
    color: #ff0000;
    transform: scale(1.15);
  }
`;

const AnimatedTexts = styled.h1`
  transition: color 0.5s ease;

  &:hover {
    color: #00ffff;
  }
`;

const AnimatedImages = styled.img`
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

function Advo() {
  return (
    <div style={{ backgroundColor: "#3c3d37" }}>
      <div className="gel" style={{ margin: 0, padding: 0, gap: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,128C480,149,549,203,617,218.7C685.7,235,754,213,823,181.3C891.4,149,960,107,1029,90.7C1097.1,75,1166,85,1234,96C1302.9,107,1371,117,1406,122.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div>
        <AnimatedText>
              <strong>MBS</strong>
            </AnimatedText>
        </div>
      </div>
      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-inner justify-content-center align-items-center text-center">
          <div className="carousel-item active">
            
            <AnimatedTexts>SDGs</AnimatedTexts>
            <AnimatedImages src={Sdgs} alt="sdgs" style={{ height: "400px" }} />
          </div>
          <div className="carousel-item">
            
            <AnimatedTexts>Undergraduate</AnimatedTexts>
            <AnimatedImages src={Mhs} alt="mhs" style={{ height: "400px" }} />
            <p style={{ color: "white" }}>
              <strong>Society 5.0</strong>
            </p>
          </div>
          <div className="carousel-item">
            
            <AnimatedTexts>Innovation</AnimatedTexts>
            <AnimatedTextst className="justify-text  m-4">
              Smart Education Program <br />
              <br /> Smart Healthcare System <br />
              <br />
              Smart City for Sustainable Living <br />
              <br />
              Smart Agriculture for Food Security <br />
              <br />
              Sustainable Business Practices with AI and Big Data.
            </AnimatedTextst>
          </div>
          <div className="carousel-item">
            
            <AnimatedTexts>Motivation</AnimatedTexts>
            <AnimatedImages
              src={Motivation}
              alt="motivation"
              style={{ height: "400px" }}
            />
            <p style={{ color: "white" }}>
              <strong>Society 5.0</strong>
            </p>
          </div>
          <div className="carousel-item">
            
            <AnimatedTexts>Boost</AnimatedTexts>
            <AnimatedImages src={Boost} alt="boost" style={{ height: "400px" }} />
            <p style={{ color: "white" }}>
              <strong>Society 5.0</strong>
            </p>
          </div>
          <div className="carousel-item">
            
            <AnimatedTexts>Support</AnimatedTexts>
            <AnimatedImages
              src={Support}
              alt="support"
              style={{ height: "400px" }}
            />
            <p style={{ color: "white" }}>
              <strong>Society 5.0</strong>
            </p>
          </div>
          <div className="carousel-item">
            <h1 style={{ color: "white", margin: "5rem 0" }}>
              <strong>THANK YOU</strong>
              <br />
              <br />
            </h1>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Advo;
