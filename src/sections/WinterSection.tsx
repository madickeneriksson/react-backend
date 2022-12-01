import React from 'react'
import LeftImage from "../assets/images/winter.svg";
import RightImage from "../assets/images/new-arrivals.svg";


const WinterSection: React.FC = () => {
  return (
    <section className="__winter container">
        <img className="left-img" src={LeftImage} alt="" />
                <h1>Winter Clearance <br />
                Up to 70% Off!</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit <br /> 
        voluptatem accusantium doloremque laudantium, <br />
        totam rem apriam eaque ipsa quae ab illo inventore.</p>
        <button className="winter__btn-theme">
            <span className="__btn-theme-left"></span>
            SHOP NOW
            <span className="__btn-theme-right"></span>
        </button>
        <img className="right-img" src={RightImage} alt="" />
    
</section>
  )
}

export default WinterSection