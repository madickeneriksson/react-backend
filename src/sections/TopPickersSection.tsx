import React from 'react'
import Pamela from "../assets/images/pamela.svg";
import LetsBe from "../assets/images/lets-be.svg";

const TopPickersSection: React.FC = () => {
  return (
    <section className="__banners container">
    <img className="left-img" src={Pamela} alt=" top pickers" />
    <img className="right-img" src={LetsBe} alt=" conscious" />
    </section>
  
  )
}

export default TopPickersSection




    
