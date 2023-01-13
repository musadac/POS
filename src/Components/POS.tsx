import React from 'react'
import './CSS/POS.css'
import { useNavigate } from "react-router-dom";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export default function POS() {
    return (
      <div className='home'>
        <div className='home-sec-1'>
            <p className='label' >Point of Sale</p>
            <div className='nav-cont' >
                <p className='nav-item-ls'  > Cheema Atta Chaki and Store PWD </p>
            </div>
            <div className='pos'>
                <div className='inputspos'>
                    <div className = 'upperint'>
                        <p className='ret'>Itemcode:</p>
                        <input className='inputemt' type='text' placeholder="Itemcode"></input>
                        <p className='ret'>Description:</p>
                        <input className='inputemt' type='text' placeholder="Description"></input>
                        <p className='ret'>Quantity:</p>
                        <input className='inputemq' type='text' placeholder="Quantity"></input>
                        <p className='ret'>Multi-Quantity:</p>
                        <input className='inputemc' type='checkbox' placeholder="Quantity"></input>
                    </div>
                    <div className="lowerint">
                        <p className='ret'>Amount:&nbsp;</p>
                        <input className='inputemt' type='text' placeholder="Rs"></input>
                        <p className='rslower'>2000 RS</p>
                        <p className='tokengen' style={{"width":"150px"}} > Print </p>
                        <p className='tokengen' style={{"width":"50px"}} > % </p>
                        <p className='tokengen'  > Generate Token </p>
                        <p className='tokengen'  > Refund </p>
                    </div>
                </div>
                <div className='addons'>
                    <div className='add'>
                        <AddShoppingCartOutlinedIcon className='icco' />
                    </div>
                    
                </div>
                <div className='itemsdet'>

                </div>
            </div>
        </div>
      </div>
    )
  }