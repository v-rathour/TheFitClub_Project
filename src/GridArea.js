import React from 'react'
import Image1 from './image/image1.png'
import Image2 from './image/image2.png'
import Image3 from './image/image3.png'
import Image4 from './image/image4.png'
import Tick from './image/tick.png'
import NB from './image/nb.png'
import Nike from './image/nike.png'
import Adidas from './image/adidas.png'

export default function GridArea() {
  return (
    <React.Fragment>
        <div className="Grid-Reason">
            <div className="imag1">
                <img src={Image1} alt="Image1" />
            </div>
            <div className="part2">
                    <div className="image2">
                        <img src={Image2} alt="Image2" />
                    </div>
                    <div className="image3">
                        <img src={Image3} alt="Image3" />
                        <img src={Image4} alt="Image4" />
                    </div>
            </div>
            
            <div className="info-section">
                <h3>SOME REASONS</h3>
                <h1>WHY CHOOSE US?</h1>
                <ul>
                    <li>
                       <img src={Tick} alt="Tick" />
                       <span>OVER 140+ EXPERT COACHS</span>
                    </li>
                    <li>
                       <img src={Tick} alt="Tick" />
                       <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </li>
                    <li>
                       <img src={Tick} alt="Tick" />
                       <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </li>
                    <li>
                      <img src={Tick} alt="Tick" />
                      <span>RELIABLE PARTNERS</span>
                    </li>
                </ul>
                <p>OUR PARTNERS</p>
                <div className="co-operat-brand">
                      <img src={NB} alt="nb" />
                      <img src={Adidas} alt="adidas" />
                      <img src={Nike} alt="nike" />
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
