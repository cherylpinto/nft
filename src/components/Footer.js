import React from 'react'
import "./Footer.css"
import logo from "../assets/logo (1).png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
    const links = [
      {
        title: "About",
        data: ["About", "Terms", "Legal"],
      },
      {
        title: "NFT",
        data: ["OpenSea", "Maker", "Learn"],
      },
      {
        title: "Contact",
        data: ["Press", "Support"],
      },
      {
        title: "Social",
        data: ["Twiiter", "Instagram"],
      },
    ];
    const socialLink = [
      <BsFacebook />,
      <BsTwitter />,
      <BsInstagram />,
      <FaTiktok />,
    ];
    return (
      <footer>
        <div className="upper">
          <div className="brand-container">
            <div className="brand">
              <img src={logo} alt="logo" />
            </div>
            <p>Exclusive NFT Collection</p>
            <ul className='footer-ul-brand'>
              {socialLink.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
          <div className="footer-links">
            {links.map(({ title, data }, index) => {
              return (
                <div className="footer-link" key={index}>
                  <h4 className='footer-link-title'>{title}</h4>
                  <ul>
                    {data.map((link, index2) => (
                      <li key={index2}>{link}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lower">
          <span>&copy; Copyright 2025 NFT</span>
          <span>Launching August 2025</span>
        </div>
      </footer>
    );
  }

export default Footer
