import React from 'react'
import image from"../assets/home.png"
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
         <div className='content'>
            <p className='subTitle'>LAUNCHING SOON</p>
            <h1 className='title'>An NFT like no other</h1>
            <p className='description'> Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live.</p>
            <button>Sign Up</button>
         </div>
         <div className='image-container'>
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

export default Home
