import React from 'react'
import { Link } from 'react-router-dom'
const UnnamedSection = () => {
  return (
    <div className='w-full  p-4 md:p-8 bg-white '>
                <div className='border-y border-dotted py-8'>
                    <p className='md:w-1/2 text-2xl md:text-3xl md:px-8'>
                    Every project is rooted in sustainability, ensuring environmental care and long-term resilience for the communities we serve.
                    </p>

                    <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-5'>
                        <div className='w-full'>
                            <img src="/Container1.png" alt="" className='w-full h-full'/>

                        </div>
                        <div className='w-full h-full flex flex-col justify-evenly items-baseline'>
                        <div className='md:h-1/2 text-md'>
                                <p>
                                Every project undertaken by Mkambo Misika Hubs is rooted in sustainability, ensuring environmental care and long-term resilience for the communities we serve. We are committed to integrating sustainable principles, materials, and practices into every aspect of our market redevelopment initiatives. By championing a regenerative, waste-free model and leveraging renewable energy sources, we aim to create transformative, future-forward market environments that uplift the local economy and align with the needs of the planet.
                                </p>
                        </div>

                            <div className='py-3 md:h-1/2'>
                                <Link to='/contact'>
                                    <button className='px-3 py-1 bg-[#f6d987] rounded-full'> 
                                    Contact us 
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
  )
}

export default UnnamedSection
