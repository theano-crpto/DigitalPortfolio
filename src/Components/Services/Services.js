import React from 'react'
import './Services.css';
import heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Cards/Card';
const Services = () => {
    return (
        <div className='services'>
            {/* leftside */}
            <div className='awesome'>
            <span>My Awesomes</span>
            <span>Services</span>
            <span>
                Lorem ispum is simply dummy of Printing lorem
                <br/>
                Lorem ispum is simply a dummy of text
            </span>
            <a href='https://drive.google.com/file/d/1r56MYLtH_GxhtHNJVPGlziAnaBUNVoiR/view?usp=sharing'>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur' style={{background:"ABF1FF94"}}></div>
        </div>
            {/* rightside */}
            <div className='cards'>
               <div style={{left:'40rem'}}>
                   <Card
                    emoji={heartemoji}
                    heading={'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                   />
               </div>
               <div style={{top:"18rem", left:"20rem"}}>
                    <Card
                    emoji={Glasses}
                    heading={"Developer"}
                    detail={"Html,Css,Javascript,React"}
                    />
               </div>
               <div style={{top:"25rem", left:"38rem"}}>
                    <Card
                    emoji={Humble}
                    heading={"UI/UX"}
                    detail={"LoremIspumdummytext"}
                    />
               </div>

            </div>
        </div>
    )
}

export default Services
