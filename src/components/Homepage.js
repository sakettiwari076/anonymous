import React from 'react'
import Navbar from './Navbar'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
<section className="text-gray-600  sm:pt-6 sm:mx-10 leading-3  lg:px-32 mainfont body-font">
    {/* guhihi */}
  <div className="container mt-10 mx-auto flex px-5  md:flex-row flex-col items-center">
    <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
      <h1 className="title-font  text-2xl mb font-medium  mainfont letterspacemy">Community with Competetive Programers , Leetcoders and Developers.<br></br> <span className='font-bold'>KIET Group of Institutions</span> 
        {/* <br className="hidden lg:inline-block">readymade gluten</br> */}
      </h1>
      {/* <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p> */}
      <div className="flex justify-center">
        <button className="inline-flex text-white font-bold bg-indigo-500 border-0 py-2 px-6 focus:outline-none mt-5 hover:bg-indigo-600 rounded text-lg">Join our community</button>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="aboutusm.gif"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Homepage