import React from 'react'

const Card = () => {
  return (

<section className="text-gray-600  mainfont">
  <div className="container px-8 py-20 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-semibold title-font   text-gray-900">Domains</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-violet-800  p-6 rounded-lg backgroundout transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
            <img src='logoman.webp' className='h-9'/>
          {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div> */}
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 mt-2 antialiased ... hover:text-gray-700 cursor-pointer ">Competetive Programming</h2>
          <p className="leading-relaxed text-base text-violet-800 font-medium hover:text-violet-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="border border-violet-800 p-6 rounded-lg backgroundout transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
          {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div> */}
                      <img src='logoman.webp' className='h-9'/>

          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 mt-2 antialiased ... hover:text-gray-700 cursor-pointer">Web Develpment</h2>
          <p className="leading-relaxed text-base text-violet-800 font-medium hover:text-violet-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-violet-800 p-6 rounded-lg backgroundout transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">
          {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div> */}
                      <img src='logoman.webp' className='h-9'/>

          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 mt-2 antialiased ... hover:text-gray-700 cursor-pointer">DSA</h2>
          <p className="leading-relaxed text-base text-violet-800 font-medium hover:text-violet-600 ">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Card