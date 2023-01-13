import React from 'react'
import './CSS/Home.css'
import { useNavigate } from "react-router-dom";


export default function Home() {
    let navigate = useNavigate();
    const loginselect = (event: any) => {
        const boxes = document.getElementsByClassName(
          'loginprompt',
        ) as HTMLCollectionOf<HTMLElement>;
        if (boxes.length > 0) {
            if(boxes[0].style.display === 'block'){
                boxes[0].style.display = 'none';
            }
            else{
                boxes[0].style.display = 'block';
            }
        }
    };
    
    const logpro = (event: any) => {    
        // {state: send}
        navigate( "/pos");
    };
  return (
    <div className='home'>
        <div className='home-sec-1'>
            <p className='label' >Point of Sale</p>
            <div className='nav-cont' >
                <p className='nav-item' > Product </p>
                <p className='nav-item' > Price </p>
                <p className='nav-item' > About Us </p>
                <p className='nav-item-ls' onClick={loginselect} > Login / SignUp </p>
            </div>
            <div className='loginprompt'>
                <div className='internal'>
                    <div className='paddin'></div>
                    <input className='inputem' type='email' placeholder="Email"></input>
                    <input className='inputem' type='password' placeholder="Password"></input>
                    <div className='login' onClick={logpro}>Login</div>
                </div>
            </div>
            <h1 className='tagline-1' >Digitize Your Bussiness</h1>
            <h1 className='tagline-2' >Through Online POS</h1>
        
        </div>
    
    </div>
  )
}