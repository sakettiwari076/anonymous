import React from 'react'
import Navbar from './Navbar'
import saket from '../assests/team/saket.jpeg'
 import aryan from '../assests/team/aryan.jpeg'
import vaibhav from '../assests/team/vaibhav.jpeg'
import ashish from '../assests/team/ashishbhatt.jpeg'
import prabhat from '../assests/team/prabhat.jpg'
import yash from '../assests/team/yash.jpg'
import ashwin from '../assests/team/ashwin.jpeg'
import dev from '../assests/team/dev.jpeg'
import ria from '../assests/team/ria.jpeg'
import om from '../assests/team/omdaryani.jpg'
import sahib from '../assests/team/sahib.jpg'






const Team = () => {
  return (
    <div>
  <Navbar/>
<div className='grid pt-10 mainfont lg:grid-cols-2 mx-10'>
    <div className='justify-center pt-8 lg:pl-32'>
        <h1 className='text-2xl font-semibold '>Our Team</h1>
        <p className='text-gray-900 pt-5 font-normal'>We have a family thats works together , Our Team members will provide all sort of help with our level best. You can contact us via our instagram handles , linkedin and other social media platforms.
          </p>
    </div>  
    <div className='flex '>
      <img src='team.gif' className='imageteam'></img>
    </div>


</div>

<div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Core Team</h1>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
    </div>
    <div className="flex flex-wrap -m-2">
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">

        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={saket}/>
          <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">Saket Tiwari</h2>
            <p className="text-gray-500">Co-Founder</p> <a href="https://www.linkedin.com/in/saket-tiwari-603300213/" target="_blanck"><i class="fa-brands fa-linkedin fa-2x tele"></i></a><i class="fa-brands fa-instagram fa-2x insta">  </i>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={aryan}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Aryan Tiwari</h2>
            <p className="text-gray-500">Co-Founder</p><a href="https://www.linkedin.com/in/aryan-tiwari-b397b8229/" target="_blanck"><i class="fa-brands fa-linkedin fa-2x tele"></i></a>   <i class="fa-brands fa-instagram fa-2x insta"></i>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={vaibhav}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Vaibhav Bisht</h2>
            <p className="text-gray-500">Co-Founder</p><i class="fa-brands fa-linkedin fa-2x tele"></i><i class="fa-brands fa-instagram fa-2x insta"></i>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ashish}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Ashish Bhatt</h2>
            <p className="text-gray-500">Soon</p><i class="fa-brands fa-linkedin fa-2x tele"></i><i class="fa-brands fa-instagram fa-2x insta"></i>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={sahib}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Sahib Singh</h2>
            <p className="text-gray-500">Soon</p><i class="fa-brands fa-linkedin fa-2x tele"></i><i class="fa-brands fa-instagram fa-2x insta"></i>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={prabhat}/>
          <div className="flex-grow">
            <h2 className=" text-gray-900 title-font font-medium">Prabhat Sahrawat</h2>
            <p className="text-gray-500">Soon</p><i class="fa-brands fa-linkedin fa-2x tele"></i><i class="fa-brands fa-instagram fa-2x insta"></i>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={yash}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Yash Varshney</h2>
            <p className="text-gray-500">Soon</p><i class="fa-brands fa-linkedin fa-2x tele"></i><i class="fa-brands fa-instagram fa-2x insta"></i>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={om}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Om Daryani</h2>
            <p className="text-gray-500">Soon</p><i class="fa-brands fa-linkedin fa-2x tele"></i><i class="fa-brands fa-instagram fa-2x insta"></i>
          </div>
        </div>
      </div>
      
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ashwin}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Ashiwn Yadav</h2>
            <p className="text-gray-500">Soon</p><i class="fa-brands fa-linkedin fa-2x tele"></i><i class="fa-brands fa-instagram fa-2x insta"></i>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={dev}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Dev Varshney</h2>
            <p className="text-gray-500">Soon</p><i class="fa-brands fa-linkedin fa-2x tele"></i><i class="fa-brands fa-instagram fa-2x insta"></i>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ria}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Riya</h2>
            <p className="text-gray-500">Soon</p><i class="fa-brands fa-linkedin fa-2x tele"></i><i class="fa-brands fa-instagram fa-2x insta"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

    


  )
}

export default Team