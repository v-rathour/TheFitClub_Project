import React from 'react'
import Calori from './image/calories.png'

export default function ClubIntro() {

  return (
   <React.Fragment>
      <div className="start-section">
           <div className="Feature">
               <div></div>
               <span>THE BEST FITNESS CLUB IN THE TOWN</span>
           </div>
           <h1><span>SHAPE</span> YOUR IDEAL BODY</h1>
           <p>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
           <div className="avaliblity">
               <div className="expert">
                  <h3>+140</h3>
                  <span>EXPERT COACHES</span>
               </div>
               <div className="member">
                  <h3>+978</h3>
                  <span>MEMBERS JOINED</span>
               </div>
               <div className="program">
                  <h3>+140</h3>
                  <span>FITNESS PROGRAMS</span>
               </div>
           </div>
           <div className="But_Sec">
              <button>
                 Get Started
              </button>
              <button>
                Learn More
              </button>
           </div>
           <div className="calories_block">
             <div className="calori">
               <img src={Calori} alt="" />
             </div>
             <div><span>Calories</span><br /><span>220 Kcal</span></div>
           </div>
      </div>
   </React.Fragment>
  )
}
