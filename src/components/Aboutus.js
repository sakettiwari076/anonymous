import React from 'react'
import Navbar from './Navbar'

const Aboutus = () => {
  return (
    <div>
      <Navbar/>
        <div className='grid pt-10 mainfont lg:grid-cols-2 mx-10'>
    <div className='justify-center pt-8 lg:pl-32'>
        <h1 className='text-2xl font-semibold'>About us</h1>
        <p className='text-gray-900 pt-5 font-normal'>      We are a group of excited people with a clear sense of purpose. We believe in continuous learning and development. We are adaptive to upcoming challenges in technology and management. We learn, code, preach, and grow together. Here at DSC KIET, we are not just a team, we are a growing family of developers.
</p>
<p className=''>Our members active on </p>
<div className='flex gap-4 pt-4'>
<img src='github.webp' className='h-10'/>
<img src='gfg.webp' className='h-10'/>
<img src='codeshef.webp' className='h-10'/>
<img src='codeforces.webp' className='h-10'/>

    <img src='leetcode.webp' className='h-10'/>
</div>
    </div>
    <div className=''>
      <img src='realabout.gif' className='imageteam'></img>
    </div>




</div>

    </div>
  )
}

export default Aboutus