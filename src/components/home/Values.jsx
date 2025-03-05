import React from 'react'
import bg from '../../../public/Vector1.png'

const Values = () => {
  return (
    <div className='bg-[#8b1f05] w-full p-4 md:p-8 text-white ' >
                <h2 className='mx-8 mt-9'>OUR VALUES</h2>

                <div className='w-full'  >
                <div className='md:flex space-y-4 space-x-4  mt-4 md:p-8 bg-[#8b1f05]/90 bg-f bg-left bg-no-repeat' > 
                    <div className='w-full flex flex-col space-y-4 bg-auto bg-center bg-no-repeat md:mx-5' style={{backgroundImage: `url(${bg})`, backgroundSize:"70%"}}>

                    <div className='w-full mt-6'>
                        <h3 className=' text-3xl md:text-4xl'>Creating solutions</h3>
                        <span className='flex items-center'>
                            <hr className='w-1/4 md:w-1/2 '/>
                            <h3 className='text-3xl'>for a future</h3>
                        </span>

                    </div>

                   

                    <div className='w-full flex space-x-4'>
                        <span className='h-full '><img src="/tick.png" alt="" className='w-20 h-8' /></span>
                        <span>
                            <h3 className='text-2xl'>Collaboration</h3>
                            <p>Partnerships with public and private sectors for lasting impact, combining strengths to create meaningful progress and sustainable outcomes that benefit all stakeholders.</p>
                        </span>
                    </div>

                    <div className='w-full flex space-x-4'>
                        <span className='h-full '><img src="/tick.png" alt="" className='w-20 h-8' /></span>
                        <span>
                            <h3 className='text-2xl'>Innovation</h3>
                            <p> Modern solutions for age-old challenges, leveraging advanced technology and community insights to build markets that are functional, inclusive, and forward-thinking.</p>
                        </span>
                    </div>

                    <div className='w-full flex space-x-4'>
                        <span className='h-full '><img src="/tick.png" alt="" className='w-20 h-8' /></span>
                        <span>
                            <h3 className='text-2xl'>Sustainability</h3>
                            <p> Building for today and tomorrow, ensuring that every project respects environmental boundaries while fostering long-term economic and social resilience.</p>
                        </span>
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

export default Values
