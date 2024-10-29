import React from 'react';
import './contactStyle.css'

const Hero = () => {
  return (
    <div className='container'>
    <center> 
       <section className='hero-section'>

       <h1>
           Get In <span style={{ backgroundImage: 'linear-gradient(to top, #edf5ff 50%,#ffffff 50%)', color: 'rgb(21, 126, 251)',fontWeight:'bold',fontSize:'50px' }}>Touch</span>
       </h1>
       <p style={{color:'rgb(102, 102, 102)',margin:'20px',fontSize:'20px'}}>We will contact again after receive your request in 24h</p>
       <h2>(+23) 5535 68 68</h2>
       <h4>contact@Itecksolution.com<br />
        58 Howard St, San Francisco, CA 941</h4>

       </section>
    </center>
    </div>
  )
}

export default Hero
