import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";
import "./Release.css"
const Release = () => {
  return (
    <div className="releases">
      <div className="release-orange">
        <div className="release-content">
          <h2 className="release-title">Initial Release 4/11</h2>
          <p className="release-description">
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">OpenSea</a>
          </p>
          <p className="release-description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="release-description">50% of proceeds go to charity.</p>
          <a href="#" className="release-link">
            Check them out <BsArrowRight className="release-link"/>
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
        </div>
      </div>
      <div className="release-green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
        <div className="release-content">
          <h2 className="release-title">Initial Release 4/11</h2>
          <p className="release-description">
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">OpenSea</a>
          </p>
          <p className="release-description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="release-description">50% of proceeds go to charity.</p>
          <a href="#" className="release-link">
            Check them out <BsArrowRight className="release-link"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Release
