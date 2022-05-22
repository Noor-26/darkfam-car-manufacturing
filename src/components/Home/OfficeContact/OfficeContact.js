import React from 'react'
import {GoLocation} from 'react-icons/go'
import {MdPhonePaused} from 'react-icons/md'


function OfficeContact() {
  return (
    <div class="hero max-h-screen pb-10 ">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="https://i.ibb.co/Pc72PWP/Capture.png"class="w-xl " />
      <div className=' text-left'>
        <h1 class="text-5xl font-bold">Office Contact</h1>
        <p class="py-6 w-4/5">Under the dynamic leadership of the Group and strong Human Resource, Din Textile was founded in 1987 and in a very short time became.</p>

        <div>
          <div className='flex '>
            <p className='text-2xl mr-1 mt-2'><GoLocation/></p>
            <div>
            <p className='text-2xl font-bold'>350 Flatbush ave New York</p>
            <p>350 Flatbush ave New York</p>
            </div>
          </div>
          <div className='flex '>
            <p className='text-2xl mr-1 mt-2'><MdPhonePaused/></p>
            <div>
            <p className='text-2xl font-bold'>+880 163140546</p>
            <p>+880 182756563</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OfficeContact