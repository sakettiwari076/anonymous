import React from 'react'

function RoadmapCard(props) {
  return (
    
        <div className="p-4 md:w-1/3 ">
          <a target="_blanck" href={props.link}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={props.img} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{props.category}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{props.heading}</h1>
            <p className="leading-relaxed mb-3">{props.data}</p>
          </div>
        </div>
        </a>
      </div>
    
  )
}

export default RoadmapCard
