import React from 'react'
import image from"../assets/signup.png"
import "./Signup.css"

const Signup = () => {
  return (
    <div className='signup'>
        <div className='signup-container'>
         <div className='signup-content'>
            <p className='signup-subTitle'>LAUNCHING SOON</p>
            <h1 className='signup-title'>An NFT like no other</h1>
            <p className='signup-description'> Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live.</p>
            <button>Sign Up</button>
         </div>
         <div className='signup-image-container'>
            <div className='image'>
                <img src={image}alt="home"></img>
            </div>
         <div className="ellipse-container ellipse-pink">
         </div>
        </div>
         </div>
        
    </div>
  )
}

export default Signup
