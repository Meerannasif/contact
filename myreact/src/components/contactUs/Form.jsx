import React, { useState } from 'react';
import './contactStyle.css';
import img1 from '../../Images/contact_a.png';
import img2 from '../../Images/contact_message.png'
import { useEffect } from 'react';


const Form = () => {
    
  return (
    <div className='form'>
      <form action="">
        <div className='image'> <img src={img1} alt="" /></div>
        
       <center><p>The field is required mark as *</p></center><div className='image2'><img src={img2} alt="" /></div>
        <div className="row box1">
            <div className="col-lg-6 col-md-6 col-sm-12">
                
                < input type="text" placeholder='Name *' required/>
            </div>
          
            <div className="col-lg-6 col-md-6 col-sm-12">
                <input type="text" placeholder='Email *' required />
            </div>
        </div>
        <div className="row box2">
            <div className="col-lg-6 col-md-6 col-sm-12">
                
                < input type="text" placeholder='Number *' required/>
            </div>
          
            <div className="col-lg-6 col-md-6 col-sm-12">
                <input type="text" placeholder=' Your website'  />
            </div>
        </div>
        <div className='row box3'>
            <div className="col-lg-12 col-md-12 col-sm-12">
            <select required>
                <option value="" disabled selected>How can we Help you</option>
                <option value="Option1">Option1</option>
                <option value="Option2">Option2</option>
            </select>
            </div>
        </div>
        <div className='row box4'>
        <div className="col-lg-12 col-md-12 col-sm-12">
            <textarea name="" id="" placeholder='How can we help you?'></textarea>
        </div>
        </div>
      <center>  <div className='checkbox-style'>
      <input type="checkbox"/><a href="" style={{color:'#111',textDecoration:'none'}}>By submitting, i’m agreed to the <span style={{textDecoration:'underLine',display:'inline-block'}}>Terms & Conditons</span></a></div></center>
      <center>
        <div className='btn'>
        <button style={{color:'#fff',backgroundColor:'#147bfa',border:'transparent',padding:'10px',borderRadius:'20px'}} >Send your Request</button>
        </div>
      </center>
      </form>
    </div>

   

  )
}

export default Form
