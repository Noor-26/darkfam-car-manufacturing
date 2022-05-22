import React from 'react'
import Banner from '../Banner/Banner'
import BussnessSummary from '../BussnessSummary/BussnessSummary'
import OfficeContact from '../OfficeContact/OfficeContact'
import Parthners from '../Pathners/Parthners'
import Sale from '../Sale/Sale'
import Tools from '../Tools/Tools'

function Home() {
  return (
    <div>
    <Banner/>
    <Tools/>
    <BussnessSummary/>
    {/* extra parts */}
    <Sale/>
    <OfficeContact/>
    <Parthners/>
    </div>
  )
}

export default Home