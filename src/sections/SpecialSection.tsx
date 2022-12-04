import React from 'react'
import { NavLink } from 'react-router-dom'

interface SpecialSectionType {

}

const SpecialSection: React.FC<SpecialSectionType>  = () => {
  return (
    <section className="__special container">
      <h1>Our Speciality</h1>
        <div className="boxes"> 
        <div className="special-box"><p>Track Your Order</p>
        <NavLink className="special-link" to="/">Get Started </NavLink></div>
        
        <div className="special-box"><p>Make a Return</p>
        <NavLink className="special-link" to="/">Get Started </NavLink></div>
        
        <div className="special-box"><p>Request a Price <br />Adjustment</p>
        <NavLink className="special-link" to="/">Get Started</NavLink></div>
       
        </div>
    </section>
  )
}

export default SpecialSection