import React from 'react'
import dumbell from './image/dumbell.png'
import Tick from './image/tick.png'

export default function CardSection(props) {
  return (
    <React.Fragment>
        <section id='price-section'>
            <div id='PriceLogo'>
                <img src={dumbell} alt="" />
            </div>
            <span>{props.plan} PLAN</span>
            <h1>
               <span>$</span> {props.doller}
            </h1>

            <ul>
                <li>
                    <img src={Tick} alt="Tick" />
                    <span> {props.hour} hours of excercises</span> 
                    
                </li>
                <li>
                    <img src={Tick} alt="Tick" />
                    Free consultaion to coaches
                </li>
                <li>
                    <img src={Tick} alt="Tick" />
                    Access to The Community
                </li>
            </ul>
            <p>
                See more benefit
               <i class="fa-solid fa-arrow-right"></i>
            </p>
            <button>Join now</button>

        </section>
    </React.Fragment>
  )
}
