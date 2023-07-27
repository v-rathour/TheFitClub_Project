import React from 'react'
import heroIMg from './image/hero_image (1).png'
import Image2 from './image/image2.png'
import heroImg2 from './image/hero_image_back.png'

export default function RightSection() {
  return (
    <React.Fragment>
        <button id='join'>Join now</button>
        <div className="heroImag">
            <img src={Image2} alt="Image2"  id='newImage'/>
            <img src={heroImg2} alt="heriImag2" id='Style' />
            <div className="Extra">
                <h3>Avalibility For</h3>
                <div>BOYS</div>
                <div>GRILS</div>
                <div>MAN</div>
                <div>WOMAN</div>
            </div>
            <img src={heroIMg} alt="heroIMg" />
            
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo maxime eius, cupiditate iusto fugit tempora iste sequi qui minus! Exercitationem obcaecati expedita mollitia eligendi saepe ipsam rem laudantium magni reprehenderit?</p>
            
        </div>
        
    </React.Fragment>
  )
}
