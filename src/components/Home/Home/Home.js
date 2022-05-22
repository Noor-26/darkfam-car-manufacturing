import React from 'react'
import Banner from '../Banner/Banner'
import BussnessSummary from '../BussnessSummary/BussnessSummary'
import OfficeContact from '../OfficeContact/OfficeContact'
import Parthners from '../Pathners/Parthners'
import Tools from '../Tools/Tools'

function Home() {
  return (
    <div>
    <Banner/>
    <Tools/>
    <BussnessSummary/>
    {/* extra parts */}
    <OfficeContact/>
    <Parthners/>
    </div>
  )
}

export default Home