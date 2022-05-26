import React from 'react'
import './Portfolio.css'
import {BiMailSend} from 'react-icons/bi'
import {MdSchool} from 'react-icons/md'
function Portfollio() {
  return (
    <div className='hero h-auto my-5'>
   <div class="portfolio_card w-72 ">
   <div class="avatar mt-5">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto ">
    <img src="https://lh3.googleusercontent.com/a-/AOh14GgNN4hRVEQPFgaMDNuQFvaC61zbLxpgeNARMMxTXg=s96-c" alt="profile photo"/>
  </div>
</div>
    <div class="category">Mahtab khan noor </div>
   <p className='flex items-center'> <BiMailSend className='mr-2 text-2xl'/> ~ nk26982698@gmail.com</p>
   <p className='flex items-center pt-2'> <MdSchool className='mr-1 text-2xl'/> ~ SSC at P.D.B SECONDARY SCHOOL</p>
   <p className='pt-2'>Below are skils i have as a web-developer: 
   <li>HTML</li>
   <li>CSS</li>
   <li>JAVASCRIPT</li>
   <li>REACT</li>
   <li>BOOTSRAP</li>
   <li>TAILWIND</li>
   <ul>
     <li></li>
     </ul>
     </p>
   <p>My three live website links:</p>
   <ol>
     <li> <a href="https://darkfam-camping-gear.web.app/" target='_blank' className='text-primary '>Darkfam camping gear</a></li>
     <li>  <a href="https://darkfam-book-shop.netlify.app/" target='_blank' className='text-primary '>Darkfam Book shop</a></li>
     <li> <a href="https://independent-person-project.web.app/" target='_blank' className='text-primary '>Darkfam Tourist guide</a></li>
   </ol>
  
  
</div>
    </div>
  )
}

export default Portfollio