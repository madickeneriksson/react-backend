import React from 'react'
import MenuIcon from '../components/MenuIcon'

const InfoSection: React.FC = () => {
  return (
    
    <div className="info">
         <div className="container">
   
        <div className="info-box">
        <MenuIcon icon="fa-regular fa-phone" link={''} quantity={0} hideOnMobile={false} />
            <h5>Customer Support</h5>
            <p>Village did removed enjoyed explain talking.</p>      
        </div>
        <div className="info-box">
        <MenuIcon icon="fa-light fa-credit-card-front" link={''} quantity={0} hideOnMobile={false} />
            <h5>Secured Payment</h5>
            <p>Village did removed enjoyed  explain talking.</p>      
        </div>  
        <div className="info-box">
        <MenuIcon icon="fa-light fa-truck" link={''} quantity={0} hideOnMobile={false} />
            <h5>Free Home Delivery</h5>
            <p>Village did removed enjoyed  explain talking.</p>      
        </div>  
        <div className="info-box">
        <MenuIcon icon="fa-light fa-truck" link={''} quantity={0} hideOnMobile={false} />
            <h5>30 Day Reuters</h5>
            <p>Village did removed enjoyed explain talking.</p>      
        </div>   
    </div>     
    </div>
  )
}


export default InfoSection