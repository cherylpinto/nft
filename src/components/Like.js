import React from 'react'
import "./Like.css"
import eth1 from "../assets/eth1.png"
import eth2 from "../assets/eth2.png"
const Like = () => {
  return (
    <div className='like'>
      <div className='like-container'>
        <div className='like-content'>

          <div className='like-image'>
          <img src={eth1} alt="eth1"></img>
          </div>

          <h2 className="like-title">An NFT like no other</h2>
          <p className="like-description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="like-description">
           These NFTs are designed to be unique, offering unparalleled artistic value and exclusivity for collectors.
           Be part of an exclusive drop that redefines NFT creativity. Sign up now and secure your spot for our launch on 11/22!
          </p>

        </div>
        <div className='like-content'>

          <div className='like-image'>
          <img src={eth2} alt="eth2"></img>
          </div>

          <h2 className="like-title">An NFT like no other</h2>
          <p className="like-description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="like-description">
          These NFTs are designed to be unique, offering unparalleled artistic value and exclusivity for collectors.
          Be part of an exclusive drop that redefines NFT creativity. Sign up now and secure your spot for our launch on 11/22!
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Like
