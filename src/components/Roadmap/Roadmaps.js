import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'
import RoadmapCard from './RoadmapCard'

function Roadmaps() {
  return (
    <>
        <Navbar/>
        <section className='mt-10'>
            <div className='lg:text-5xl text-2xl  text-center mainfont font-extrabold text-zinc-900'>Everything From Basics to Advance</div>
            <p className='text-center pt-5 mx-8 lg:text-xl'>Hey folks, In this section of our community, we are going to post roadmaps for specific domains. The following roadmaps are designed with the help of experts in that domain. </p>
        </section>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto cursor-pointer">
    <div className="flex flex-wrap -m-4">
      <RoadmapCard link="https://miro.com/app/board/uXjVPEAGfM8=/?share_link_id=921354111487" img="frontend.jpg" category="Web-Development" heading="Front-End Devlopment" data="Everything you see on a website, like buttons, links, animations, and more, were created by a front end web developer. It is the front end developer's job to take the vision and design concept from the client and implement it through code."/>
      <RoadmapCard  img="backend.jpg" className="" category="Web-Development" heading="Back-End Devlopment" data="Everything you see on a website, like buttons, links, animations, and more, were created by a front end web developer. It is the front end developer's job to take the vision and design concept from the client and implement it through code."/>
      <RoadmapCard link="https://drive.google.com/file/d/1NkWD4_AjzjIdLgIHxp1K1Xm5LvXJ1l4r/view?usp=sharing" img="programming.jpg" category="CP" heading="Competitive-Programming" data="Competitive programming involves programmers competing against each other to solve programming questions in a limited amount of time. These events are usually held over the Internet or a local network. "/>
      <RoadmapCard img="android.jpg" category="App Development" heading=" Android Devlopment" data="Upcoming"/>
      <RoadmapCard img="flutter.webp" category="App Development" heading="Flutter " data=" Upcoming"/>
      <RoadmapCard img="native.png" category="App Development" heading="React-Native" data="Upcoming"/> 
    </div>
  </div>
</section>
<Footer/>
    </>
  )
}

export default Roadmaps
