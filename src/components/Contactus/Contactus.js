import React from 'react'
import Navbar from '../Navbar'
import Eachmentor from './Eachmentor'

const Contactus = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-gray-100'>
<div className='flex justify-center   mainfont'>

  {/* <img src='commingsoon.gif' className='pt-1'/> */}
</div>
<Eachmentor name="Mentor 1" position="Soon" image="legend.webp" para="This field will be updated soon"


/>
{/* <Eachmentor name="Mentor 2" position="Soon" image="legend.webp" para="This field will be updated soon"  /> */}
{/* <Eachmentor name="Mentor 1" position="Soon" image="legend.webp" para="This field will be updated soon"  /> */}

</div>
    </div>
  )
}

export default Contactus