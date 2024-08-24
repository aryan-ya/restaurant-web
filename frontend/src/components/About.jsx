import React from 'react'

import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
//about

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consectetur veritatis ad natus hic nesciunt tempora ullam repudiandae neque quia, repellat nihil? Cum tempora velit quas cupiditate ea dolorem consectetur libero enim saepe, sapiente, aliquid placeat eligendi in! Illo laborum aut quidem repellat dolor velit ratione eius consectetur possimus aliquid?
          </p>
         <Link to={"/"}>Explore Menu
         <span><HiOutlineArrowNarrowRight /></span>
         </Link>
        </div>
        <div className="banner">
            <img src="about.png" alt="about" />
          </div>
      </div>
    </section>
  )
}

export default About