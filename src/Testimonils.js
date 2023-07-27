import React from 'react'
import TImage from './image/t-image1.png'
export default function Testimonils() {

  return (
    <React.Fragment>
        <div className="testimonial">
            <div className="Say_about">
                <span>TESTIMONIALS</span>
                <h2>WHAT THEY</h2>
                <h1>SAY ABOUT US</h1>
                <p>I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!
                </p>
                <div id='last-part'><span>MATHEW HENDRICKSON</span>-ENTREPRENEUR</div>
            </div>
            <div className="honor-img">
                <img src={TImage} alt="" />
            </div>
        </div>
    </React.Fragment>
  )
}
