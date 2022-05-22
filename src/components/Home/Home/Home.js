import React from 'react'
import Banner from '../Banner/Banner'
import BussnessSummary from '../BussnessSummary/BussnessSummary'
import OfficeContact from '../OfficeContact/OfficeContact'
import Tools from '../Tools/Tools'

function Home() {
  return (
    <div>
    <Banner/>
    <Tools/>
    <BussnessSummary/>
    <OfficeContact/>
    </div>
  )
}

export default Home