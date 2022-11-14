import React from 'react'

function DomainCard(props) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 hover:text-white ">
    <div className="border border-violet-800  hover:bg-violet-500  p-14 rounded-lg backgroundout  ">
        <img src='expected.webp' className='h-9'/>
    
      <h2 className=" text-gray-700 text-xl   font-bold title-font mb-2 mt-2 antialiased ...   cursor-pointer  ">{props.domain}</h2>
      <p className="leading-relaxed text-base font-medium  cursor-pointer">{props.data}</p>
    </div>
  </div>
  )
}

export default DomainCard
