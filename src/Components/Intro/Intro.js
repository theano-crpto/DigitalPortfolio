import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import boy from '../../img/boy.png'
import FloatingDiv from '../Floating/FloatingDiv';

const Intro = () => {
    return (
        <div className='intro'>
           <div className='i-left'>
                <div className='i-name' >
                    <span>Hi! I AM</span>
                    <span>Sagar Kumar</span>
                    <span>I am Computer science Graduate of 2022 batch,
                        I am looking for Trainee Developer Roles
                    </span>
                </div>   
                <button className='button i-button'>
                    Hire me
                </button>
                <div className='i-icons'>
                    <a href='https://github.com/theano-crpto'>
                    <img src={Github} alt="Github"></img>
                    </a>
                    <a href='https://www.linkedin.com/in/sagar-gupta-8b2660172'>
                    <img src={Linkedin} alt="LinkedIn"></img>
                    </a>
                    <a href='https://www.instagram.com/beingsagar11/'>
                    <img src={instagram} alt="Instagram"></img>
                    </a>
                        
                    
                        

                </div>
            </div> 
           <div className='i-right'>
               <img src={Vector1} alt='first img'></img>
               <img src={Vector2} alt='second img'></img>
               <img src={boy} alt='boy img'></img>
               <img src={glassesimoji} alt='glassesimoji'></img>
               <div style={{top:'-4%', left:'68%'}}>
                   <FloatingDiv image={Crown} txt1='Web' txt2='developer'/>
               </div>
               <div style={{top:'25rem', left:'6rem'}}>
                   <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
               </div>
               {/* blur divs */}
               <div className='blur' style={{background: "rgb(236 210 255)"}}>

               </div>
           </div>
        </div>
    )
}

export default Intro
