import React from "react";
import "./Free.css";
import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

const Free = () => {
  return (
    <div className="free">
      <div className="free-container free-pink">
        <div className="free-content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="free-title">Free NFT for early birds</h2>
          <p className="free-description">
            Sign up today and you'll get a free NFT when we launch
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
       
            <Card className="card1-image" image={super1}
            series="Floop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}>

            </Card>
         
        </div>
        <div className="card2">
       
            <Card className="card2-image"
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
           
        
        </div>
      </div>
    </div>
  );
};

export default Free;
