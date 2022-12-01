import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPickersSection from '../sections/TopPickersSection'
import InfoSection from '../sections/InfoSection'
import { FeaturedProductsContext } from '../context/ProductContexts'
import { FlashsaleProductsContext } from '../context/ProductContexts'
import FlashsaleSection from '../sections/FlashsaleSection'
import ExtraPriceSection from '../sections/ExtraPriceSection'
import WinterSection from '../sections/WinterSection'
import SpecialSection from '../sections/SpecialSection'
import SaleSection from '../sections/SaleSection'



const HomeView: React.FC = () => {
  const products = useContext(FeaturedProductsContext);
  const flashsale = useContext(FlashsaleProductsContext);

  
  window.top.document.title = 'Fixxo.'

  return (
    <>
    < MainMenuSection />
    < ShowcaseSection />
    < WinterSection />
    < ProductGridSection title="Featured Products" items={products} />
    < TopPickersSection />
    < SpecialSection />
    < FlashsaleSection items={flashsale} />
    < ExtraPriceSection items={flashsale} />
    < SaleSection />
    < InfoSection />
    <FooterSection />
    </>
  )
}

export default HomeView