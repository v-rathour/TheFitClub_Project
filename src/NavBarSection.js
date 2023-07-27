import React from 'react'
import LogoImage from './image/logo (1).png'

export default function Navbar() {

  return (
    <React.Fragment>
      <div className="HeroNav">
          <div className="logo">
            <img src={LogoImage} alt="" />
          </div>
          
          <ul className="list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Programs</a></li>
              <li>
                  <a href="#">Why us</a>
              </li>
              <li><a href="#">Testimonials</a></li>
          </ul>
      </div>
    </React.Fragment>
  )
}
