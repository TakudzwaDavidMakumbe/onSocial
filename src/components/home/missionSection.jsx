import React from 'react'

const MissionSection = () => {
  return (
    <div className='w-fit '>
        <div className="  bg-white w-full py-8 md:px-8">
                        <h1 className="font-bold w-full text-center text-xl">Our Mission</h1>
                        <span className='flex justify-center bg-white items-center mt-4 w-full border-b p-4'>
        
                            <div className='md:w-1/2 p-2'>
                            <p className="md:text-3xl text-2xl leading-relaxed">
                                Reshaping Zimbabwe's markets into thriving hubs 
                                <img src="/small1.png" alt="" className="h-[1em] rounded-full inline-block align-baseline mx-1" /> 
                                that uplift communities, foster inclusive economic 
                                <img src="/small.png" alt="" className="h-[1em]  rounded-full inline-block align-baseline mx-1" />  
                                activities, and drive sustainable national progress for generations to come.
                            </p>


        
                            </div>
                        </span>
        
                    </div>
        
                    <div className="flex justify-center items-center bg-white w-full px-4 md:px-16 py-5  ">
                        <div  className='w-full rounded-md border border-dashed md:flex mb-7'>
                            <div className=' flex-1 justify-center items-center md:border-r  border-dashed p-2'>
                               <img src="/SVG.png" alt="" className='m-4'/>
                                <p >
                                    Creating equal opportunities for all, especially marginalised groups, to thrive in revitalized markets.
                                </p>
        
                            </div>
                            <div className='flex-1 justify-center items-center md:border-r border-t p-2 md:border-t-0  border-dashed'>
                            <img src="/car.png" alt="" className='m-4 '/>
                                <p>
                                Involving communities at every stage to ensure relevance and foster ownership.
                                </p>
        
                            </div>
                            <div className='flex-1 justify-center items-center md:border-r border-t p-2  md:border-t-0  border-dashed'>
                            <img src="/grapes.png" alt="" className='m-4'/> 
                                <p>
                                Building durable markets to withstand challenges and ensure long-term functionality.
                                 </p>
        
                            </div>
                            <div className='flex-1 justify-center items-center  border-t p-2 md:border-t-0 border-b md:border-b-0 border-dashed'>
                            <img src="/Group.png" alt="" className='m-4'/> 
                                <p>
                                Honoring heritage by integrating local cultural elements into market designs.
                                </p>
        
                            </div>
        
                        </div>
                    </div>
        
        
      
    </div>
  )
}

export default MissionSection
