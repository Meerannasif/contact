import React from 'react'
import img1 from'../../Images/facebook (1).svg';
import img2 from '../../Images/instagram.svg';
import img3 from '../../Images/twitter.svg'
const Footer = () => {
  return (
    <div>
        <center className="footer">
      <div className='row' style={{margin:'60px 80px',textAlign:'left'}}>
        
        <div className="col-lg-3 col-md-6 col-sm-12 foot">
       
         <h1 style={{fontSize:'14px'}}>Iteck - 1st eCommerce Dashboard</h1> 
         <p style={{fontSize:'14px'}}>Over 25 years working in IT services developing software applications and mobile apps for clients all over the world. For your very specific industry,
         we have highly-tailored IT solutions.</p>
        
          <div className="footer-img">
    
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
                <img src={img1} alt="" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <img src={img2} alt="" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <img src={img3} alt="" />
            </div>
        </div>
</div> 
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 foot">
            <h1 style={{fontSize:'14px'}}>Information</h1>
            <p style={{display:'inline-block',fontSize:'14px'}}>223 Thatcher Road St, Brookly,<br />
             Manhattan, NY 10463, US<br />
             +031 5689 89 98<br />
             contact@Itecksolution.co</p>
          
            
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 foot">
            <h1 style={{fontSize:'14px'}}>Useful Links</h1>
            <p style={{fontSize:'14px'}}>Home<br />
             About Iteck<br />
             Projects<br />
             product<br />
             Blog<br />
             Contact</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 foot">
            <h1 style={{fontSize:'14px'}}>
            Resource
            </h1>
            <p style={{fontSize:'14px'}}>
            Online Documentation<br></br>
            Roadmap <br />
            Intergrations <br />
            FAQs <br />
            Help Center <br />
            </p>
        </div>
        
      </div>
      </center>
    </div>
  )
}

export default Footer
