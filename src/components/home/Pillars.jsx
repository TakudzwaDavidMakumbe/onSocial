import React from 'react'
import { pillars } from '../../data/data'
import bg from '../../../public/Vector1.png'
const Pillars = () => {
  return (
    <div className='bg-[#8b1f05] w-full p-4 md:p-8 text-white ' >
                <h2 className='mx-8 mt-9'>crafted for businesses</h2>

                <div className='w-full'  >
                <div className='md:flex space-y-4 space-x-4  mt-4 md:p-8 bg-[#8b1f05]/90 bg-f bg-left bg-no-repeat' > 
                    <div className='w-full flex flex-col space-y-4 bg-auto bg-center bg-no-repeat md:mx-5' style={{backgroundImage: `url(${bg})`, backgroundSize:"70%"}}>

                        <div className='w-full mt-3'>
                            <h3 className=' text-3xl md:text-4xl'>Pillars of Our</h3>
                            <span className='flex items-center'>
                                <hr className='w-1/4  '/>
                                <h3 className='text-3xl'>Development</h3>
                            </span>

                        </div>

                        <div className='p-4 w-full text-white'>
                    <div className='grid grid-cols-1 md:grid-cols-2  gap-4 mt-2 md:px-8'>
                        {pillars.map((service, index) => (
                            <div key={index} className=' '>
                                <img src={service.icon} alt={service.name} className='w-10 h-10 my-4 text-amber-200' />
                                <h3 className='text-xl font-bold'>{service.name}</h3>
                                
                               
                                <p className=' w-full text-sm '>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>



                    </div>

                    <div className='w-full  md:h-[500px]  '>
                        <img src="/Container.png" alt="" className='w-full h-full rounded-lg' />
                    </div>



                </div>

                </div>
        </div>

  )
}

export default Pillars
