import React from 'react'

function Eachmentor(props) {
  return (
    <div>

<div className="containerflex  justify-center mx-auto pt-16">
                    <div>
                        <p className="text-gray-500  text-lg text-center font-normal pb-3">MENTORS</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 mainfont  font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented mentors with our organization</h1>
                    </div>
                </div>
                <div className="w-full bg-gray-100   px-10 pt-10 ">
                    <div className="container mx-auto ">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex  md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            <div role="listitem" className="xl:w-1/3  sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden border  backgroundout shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={props.image} alt="Check your internet" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16  ">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">{props.name}</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">{props.position}</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">{props.para}</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

    </div>

  )
}

export default Eachmentor
