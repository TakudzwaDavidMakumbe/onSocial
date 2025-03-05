import React from 'react'
import { services ,pillars} from '../../data/data'
const Services = () => {
  return (
    <div className='w-full md:p-8 py-8 bg-white'>
                <h3 className='w-full text-center text-lg font-bold  bg-white'>Our Services</h3>
                <div className='w-full text-center flex justify-center items-center mt-4'>
                    <h3 className='text-2xl md:text-[101px] w-[70%] md:w-[50%]'> How We Make a Difference</h3>
                </div>

                <div className='p-4 w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 md:px-8'>
                        {services.map((service, index) => (
                            <div key={index} className='flex flex-col rounded-md p-4 bg-[#f3f1ef] items-center justify-center'>
                                <h3 className='text-2xl font-bold'>{service.name}</h3>
                                <img src={service.icon} alt={service.name} className='w-20 h-20 my-4' />
                               
                                <p className=' w-full text-sm p-4'>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

  )
}

export default Services
