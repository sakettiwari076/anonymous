import React from 'react'
import DomainCard from './DomainCard'

const Card = () => {
  return (

<section className="text-gray-600  mainfont">
  <div className="container px-8 py-20 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-extrabold title-font   text-gray-900">Domains</h1>
    </div>
    <div className="flex flex-wrap -m-4">
            <DomainCard  domain="Comp-Programming" data="We have Team of Domain Experts .They are availble to help you .If you want then join our community"/>
            <DomainCard  domain="Web Development" data="We have Team of Domain Experts .They are availble to help you .If you want then join our community"/>
            <DomainCard   domain="DSA" data="We have Team of Domain Experts .They are availble to help you .If you want then join our community"/>
  
    </div>
  </div>
</section>
  )
}

export default Card