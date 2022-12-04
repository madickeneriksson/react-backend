import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPickersSection from '../sections/TopPickersSection'
import InfoSection from '../sections/InfoSection'
import { ProductContextType, useProductContext } from '../context/ProductContexts'
import FlashsaleSection from '../sections/FlashsaleSection'
import ExtraPriceSection from '../sections/ExtraPriceSection'
import WinterSection from '../sections/WinterSection'
import SpecialSection from '../sections/SpecialSection'
import SaleSection from '../sections/SaleSection'



const HomeView: React.FC = () => {
  const {featured, getFeatured, flashsale, getFlashsale} = useProductContext() as ProductContextType

  useEffect(() => {
   getFeatured (8)
   getFlashsale (6)
  }, [])

  document.title = 'Fixxo.'

  return (
    <>
    < MainMenuSection />
    < ShowcaseSection />
    < WinterSection />
    < ProductGridSection title="Featured Products" items={featured} />
    < TopPickersSection />
    < SpecialSection />
   < FlashsaleSection title="Flashsale" items={flashsale} />
    < ExtraPriceSection title="Flashsale"  items={flashsale} /> 
     < SaleSection />
    < InfoSection  />
    < FooterSection  /> 
    </>
  )
}

export default HomeView