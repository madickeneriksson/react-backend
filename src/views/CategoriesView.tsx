import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const CategoriesView: React.FC = () => {
  
  document.title = 'Categories - Fixxo.'

  return (
    <>
     < MainMenuSection />
     <div className="container d-flex justify-content-center align-items-center" style= { { height: "500px" } }>
      <h1>Categories</h1>
      </div>

     <FooterSection />
    
    </>
  )
}

export default CategoriesView