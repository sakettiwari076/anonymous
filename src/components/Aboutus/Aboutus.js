import React from 'react'
import Navbar from '../Navbar'

const Aboutus = () => {
  return (
    <div>
      <Navbar/>
        <div className='grid pt-10 mainfont lg:grid-cols-2 mx-10'>
    <div className='justify-center pt-8 lg:pl-32'>
        <h1 className='text-2xl font-semibold'>About us</h1>
        <p className='text-gray-900 pt-5 font-normal'>      We are a group of excited and enthusiastic people who are intrested in technology.We are here to remove the bounderies between CP , DSA , Development by making an all around growth in an individual.Moreover we are like a family which supports every individual as per the requirements.This is how we grow together.
</p>
<p className=''>Our members active on </p>
<div className='flex gap-4 pt-4'>
<img src='github.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img src='gfg.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img src='codeshef.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img src='codeforces.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>

    <img src='leetcode.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
</div>
    </div>
    <div className=''>
      <img src='realabout.gif' className='aboutimg'></img>
    </div>




</div>

    </div>
  )
}

export default Aboutus