import React from 'react'
import Navbar from '../Navbar'

const Python = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='text-center font-mono font-bold py-2'>More compilers on the way stay tuned..</h1>
        <div className='pt-1 mainfont text-center lg:text-2xl pb-5 font-semibold flex justify-center '>
        <div className=''>
        <img src='logo.jpeg' className='h-16 relative bottom-3 '/>

            </div>
            <div className=''>
            <h1 className=''>Welcome to Compiler</h1>
            </div>
            <div className=''>
                <img src='python.webp' className='h-10 pl-4'/>
            </div>
            </div>
  <iframe src="https://trinket.io/embed/python/0478214af4"  width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

        
    </div>
  )
}

export default Python
