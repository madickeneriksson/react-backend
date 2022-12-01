import React from 'react'

interface SaleSectionType {
  button: any
  link: string
}

const SaleSection: React.FC = () => {
  return (
    <section className="__sale container">
      <div className="sale-info">
        <h1>Up to 70% off*</h1>
        <h2>Women's, Men's & Kids' Winter Fashion</h2>
        <button className="__btn-theme-white" href="#">
            <span className="__btn-theme-left-white"></span>
            <span className="__btn-theme-right-white"></span>
           FLASE SALE
        </button>
        </div>
    
  
</section>
  )
}

export default SaleSection