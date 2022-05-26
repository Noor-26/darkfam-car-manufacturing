import React from 'react'
import Banner from '../Banner/Banner'
import BussnessSummary from '../BussnessSummary/BussnessSummary'
import OfficeContact from '../OfficeContact/OfficeContact'
import Parthners from '../Pathners/Parthners'
import Reviews from '../Review/Reviews'
import Sale from '../Sale/Sale'
import Tools from '../Tools/Tools'

function Home() {
  return (
    <div>
    <Banner/>
    <Tools/>
    <Reviews/>
    <BussnessSummary/>
    {/* extra parts */}
    <Sale/>
    <OfficeContact/> 
    <Parthners/>
    </div>
  )
}

export default Home