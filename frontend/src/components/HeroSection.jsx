import React from 'react'

//herosection

const HeroSection = () => {
  return (
    <section className='herosection'>
        <div className="container">
            <div className="banner">
                <div className="largeBox">
                    <h1 className='title'>Delicious</h1>
                </div>
                <div className="combined_boxes">
                   <div className="imageBox">
                    <img src="/hero1.png" alt="hero1" srcset="" />
                   </div>
                   <div className="textAndLogo">
                    <div className="textWithSvg">
                      <h1 className='title'>Food</h1>
                      <h1 className='title dishes_title'>Dishes</h1>
                      <img src="/threelines.svg" alt="three" srcset="" />
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection