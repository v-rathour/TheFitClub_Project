import React from 'react'
import Navbar from './NavBarSection'
import ClubIntro from './ClubIntro'
import RightSection from './RightSection'
import Heading from './Heading'
import Feacture from './Feacture'
import dumbell from './image/dumbell.png'
import Runing from './image/runing.png'
import Flame from './image/flame.svg'
import Heart from './image/heartHealth.svg'
import GridArea from './GridArea'
import CardSection from './CardSection'
import Testimonils from './Testimonils'
import LevelComponent from './LevelComponent'
import Footer from './Footer'

export default function App() {

  return(
    <React.Fragment>
        <div className="hero">
            <div className="left-h">
                <Navbar/>
                <ClubIntro/>
            </div>
            <div className="right-h">
               <RightSection/>
            </div>
        </div>

        <div className="facality">
           <Heading text1="EXPLORE OUR" 
                    text2="PROGRAMS"
                    text3="TO SHAPE YOU"
           />
           <div className="Feacture-con">
                <Feacture 
                      image={dumbell}
                      About="Strength Training"
                      information='In this program, you are trained to improve your strength through many exercises.'

                  
                />
                <Feacture 
                      image={Runing}
                      About="Cardio Training"
                      information='In this program, you are trained to do sequential moves in range of 20 until 30 minutes.'
                      
                  
                />
                <Feacture 
                      image={Flame}
                      About="Fat Burning"
                      information='This program is suitable for you who wants to get rid of your fat and lose their weight.'
                      
                  
                />
                <Feacture 
                      image={Heart}
                      About="Health Fitness"
                      information='This programs is designed for those who exercises only for their body fitness not body building.'
                      
                  
                />
           </div>
        </div>
        
        <div className="grid_block">
            <GridArea />
        </div>

        <div className="Start-Journey">
            <Heading text1="READY TO START" 
                        text2="YOUR JOURNEY"
                        text3="NOW WITHUS"
            />
            <div className="Price-card">
                  <div className="Card1">
                        <CardSection
                             plan="BASIC"
                             doller="25"
                             hour="2"
                        />
                  </div>
                  <div className="Card2">
                        <CardSection
                             plan="PREMIUM"
                             doller="30"
                             hour="5"
                        />
                  </div>
                  <div className="Card3">
                        <CardSection
                             plan="PRO"
                             doller="45"
                             hour="8"
                        />
                  </div>
            </div>
        </div>

        <div className="About_us">
            <Testimonils/>
        </div>

        <div className="levelsection">
            <LevelComponent/>
        </div>

        <hr id='partition'/>

        <div className="footerSection">
            <Footer/>
        </div>

    </React.Fragment>
  )
}
