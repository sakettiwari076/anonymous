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
            <DomainCard  domain="Competitive-Programming" data="We are using platforms like  CodeChef,Codeforces Hackerrank etc.  "/>
            <DomainCard  domain="Web Development" data="Frontend React Js , Next Js, Backend Express Js  , Node Js, Database MongoDB , Firebase"/>
            <DomainCard   domain="DSA" data="DSA Domain is the most important domain for placement prespective we use Leetcode etc."/>
  
    </div>
  </div>
</section>
  )
}

export default Card