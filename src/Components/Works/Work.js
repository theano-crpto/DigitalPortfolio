import React from 'react'
import './Work.css'
import fiver from "../../img/fiverr.png";
import Upwork from "../../img/Upwork.png";
import Facebook from "../../img/Facebook.png";
import Shopify from "../../img/Shopify.png"; 
import amazon from "../../img/amazon.png";

const Work = () => {
    return (
        <div className='Works'>
            <div className='awesome'>
                <span>Works for All these </span>
                <span>Brands&Clients</span>
                <span>
                    Lorem ispum is simply dummy text of printing of printing lorem
                    <br/>
                    Ispum is simply dummy text of printing lorem
                    <br/>
                    Ispum is simply dummy text of printing lorem
                    <br/>
                    Ispum is simply dummy text of printing lorem
                </span>

                <button className='button s-button'>Hire me</button>
                <div className='blur s-blur1' style={{background:"ABF1FF94"}} ></div>
            </div>
                <div className='w-right'>
                    <div className='w-mainCirlce'>
                     <div className='w-secCircle'>
                        <img src={Upwork}/>
                     </div>   
                     <div className='w-secCircle'>
                        <img src={fiver}/>
                     </div> 
                     <div className='w-secCircle'>
                        <img src={Shopify}/>
                     </div> 
                     <div className='w-secCircle'>
                        <img src={Facebook}/>
                     </div> 
                     <div className='w-secCircle'>
                        <img src={amazon}/>
                     </div> 
                    </div>
                      <div className='w-backCircle blueCircle'></div>  
                      <div className='w-backCircle yellowCircle'></div> 
                </div>
           
        </div>
    )
}

export default Work
