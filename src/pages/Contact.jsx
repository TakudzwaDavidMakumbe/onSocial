import React from 'react'
import imgFooter from "../../public/icon(7).png";
import imgFooter1 from "../../public/icon(8).png";
import imgFooter2 from "../../public/Union 6.png";
import imgFooter3 from "../../public/Union 11.png";
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div className='w-screen h-full'>
      <div className="bg-[#07070F]">
        <div className="w-screen h-full">
          <Navbar/>

          <div className="w-full md:flex  md:h-[95vh]">
                    {/* ---left side--- */}
                    <section className="md:w-[100%] h-full md:mt-[16rem] md:px-30 flex items-center justify-center">
                      <div className="w-full mt-20 md:mt-0   h-full">
                        <div className="text-center">
                          <h1 className="text-white/93 bold md:text-5xl">Contact Us</h1>
                        </div>

                        <div className="md:px-40 px-10 pb-5 md:pb-0  md:py-4 text-center  regular h-full">
                          <p className="text-white/55 text-xs   md:pb-2 md:text-sm">
                            Discover a world of captivating stories and stunning visuals
                            as we showcase the art of filmimg and videography through our
                            blog and vedio content.
                          </p>
                          
                        </div>
                      </div>
                    </section>
                    {/* --- End of left side--- */}
          
                    {/* ---right side--- */}
                    
                    {/* ---End of right side--- */}
                  </div>
                  
        </div>

       
      </div>
          <div className="w-full md:mt-10 mt-4 px-5  h-full md:px-20">
          <div className="w-full md:py-2 rounded-lg bg-[#07070F] md:flex h-full">
          <div className="w-full pt-3 md:pt-0  md:pl-20 h-full">
          <img src={imgFooter3} alt="" className="px-40 md:px-0" />
          <div className="px-20 md:px-0">
            <h1 className="text-white/93 bold">Our Location</h1>
            <p className="text-white/55 regular">17 Oxford Newlands</p>
          </div>
          </div>

          <div className="w-full h-full">
          <img src={imgFooter2} alt="" className="px-40 md:px-0" />
          <div className="px-20 md:px-0">
            <h1 className="text-white/93 bold">Operating Time</h1>
            <p className="text-white/55 regular">Mon - Fri 8am - 5pm</p>
          </div>
          </div>
          
          <div className="w-full md:mt-1 h-full">
          <img src={imgFooter1} alt="" className="px-40 md:px-0" />
          <div className="md:mt-1 px-20 md:px-0">
            <h1 className="text-white/93 bold">Our Email</h1>
            <p className="text-white/55 regular">info@onSocial.com</p>
          </div>
          </div>
          
          <div className="w-full pb-3 md:pb-0 h-full">
          <img src={imgFooter} alt="" className="px-40 md:px-0" />
          <div className="px-20 md:px-0">
            <h1 className="text-white/93 bold">Contact us</h1>
            <p className="text-white/55 regular">Phone (+63) 236 6322</p>
          </div>
          </div>

        </div>
          </div>

          <div className="w-full pt-3 md:pt-0 px-5 md:px-100 md:mt-10 h-full">
            <div className="md:mb-4 mb-3">
            <h1 className="text-black/93 md:text-lg cursor-pointer bold ">
                   Describe Your Project To Us
              </h1>
            </div>

            <form action="" className="regular w-full flex-col text-black/93">
              <div className="flex-col w-full md:mb-3 mb-3">
              <label htmlFor="Name" className="text-lg">Your Name</label>
              <div className=" ">
              <input type="text" name="" placeholder='Enter your name' id="" className="rounded-lg py-2 px-2 border md:px-10 md:py-2" />
              </div>
              </div>

              <div className="flex-col w-full md:mb-3 mb-3">
              <label htmlFor="Name" className="text-lg">Your Email Address</label>
             <div className="">
             <input type="email" name="" placeholder='Enter your email' id="" className="rounded-lg py-2 px-2 border md:px-10 md:py-2" />
             </div>
              </div>

              <div className="flex-col w-full md:mb-3 mb-3">
              <label htmlFor="Name" className="text-lg">Topic</label>
             <div className="">
             <input type="text" name="" placeholder='Enter your topic' id="" className="rounded-lg border py-2 px-2 md:px-10 md:py-2" />
             </div>
              </div>

              <div className="flex-col w-full mb-3 md:mb-0">
              <label htmlFor="Name" className="text-lg">Your Message</label>
             <div className="">
             <textarea name="" className='rounded-lg border py-2 px-2 md:px-10 md:py-2' id=""></textarea>
             </div>
              </div>
              
              <div className="w-full md:pt-5 mb-3 md:mb-0 ">
                <button className="bold text-white/93 w-[100%] md:w-[90%] py-3 rounded-lg  bg-[#ffb03b]/93 ">Send</button>
              </div>
              

            </form>
          </div>

          <div className="w-full h-full flex-col md:mt-10 bg-[#07070F] ">
                  <div className="md:flex justify-around pl-10  items-center w-full md:p-10 md:pl-30 h-full">
                    <div className="w-full pt-3 md:pt-0 h-full">
                      <h1 className="text-[#ffb03b]/93 bold ">About Us</h1>
                      <p className="regular text-white/55">Organisation</p>
                      <p className="regular text-white/55">Partners</p>
                    </div>
          
                    <div className="w-full h-full">
                      <h1 className="text-[#ffb03b]/93 bold ">Interesting Links</h1>
                      <p className="regular text-white/55">Photo Gallery</p>
                      <p className="regular text-white/55">Our Team</p>
                    </div>
          
                    <div className="w-full h-full">
                      <h1 className="text-[#ffb03b]/93 bold ">Achievements</h1>
                      <p className="regular text-white/55">Winning Awards</p>
                      <p className="regular text-white/55">Press</p>
                    </div>
          
                    <div className="w-full h-full">
                      <h1 className="text-[#ffb03b]/93 bold ">Contact Us</h1>
                      <p className="regular text-white/55">info@onSocial.com</p>
                      <p className="regular text-white/55">+263 777 777 777</p>
                    </div>
                  </div>
                  <div className="md:flex pt-3 md:pt-0 pl-10 justify-around items-center w-full md:px-10 md:pb-10  md:pl-30 h-full">
                    <div className="w-full pb-3 md:pb-0  flex h-full">
                      <img src={imgFooter} alt="" className="" />
                      <p className="regular pl-2 md:pl-2 text-white/55">
                        Phone (+63) 236 6322
                      </p>
                    </div>
          
                    <div className="w-full  pb-3 md:pb-0 flex h-full">
                      <img src={imgFooter1} alt="" className="" />
                      <p className="regular pl-2  md:pl-2 text-white/55">info@onSocial.com</p>
                    </div>
          
                    <div className="w-full pb-3 md:pb-0 flex h-full">
                      <img src={imgFooter2} alt="" className="" />
                      <p className="regular pl-2  md:pl-2 text-white/55">
                        Mon - Fri 10am - 6pm
                      </p>
                    </div>
          
                    <div className="w-full pb-3 md:pb-0 flex h-full">
                      <img src={imgFooter3} alt="" className="" />
                      <p className="regular pl-4  md:pl-2 text-white/55">
                        17 Oxford Newlands, Harare
                      </p>
                    </div>
                  </div>
                  <div className="regular pb-3  md:pb-10 text-white/55 text-center ">
                    © Copyright 2025
                  </div>
                </div>
    </div>
  )
}

export default Contact