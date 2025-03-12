import React from 'react'
import Navbar from '../components/Navbar'
import bg from "../../public/bg.png";
import r1 from "../../public/card31.png";
import r2 from "../../public/card22.png";
import icon1 from '../../public/stars.png'
import icon from '../../public/stars (1).png'
import imgFooter from "../../public/icon(7).png";
import imgFooter1 from "../../public/icon(8).png";
import imgFooter2 from "../../public/Union 6.png";
import imgFooter3 from "../../public/Union 11.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='w-screen h-full'>
      <div className="bg-[#07070F]">
        <div className="w-screen h-full">
          <Navbar/>

          <div className="w-full md:flex  md:h-[95vh]">
                    {/* ---left side--- */}
                    <section className="md:w-[100%] h-full md:mt-[16rem] md:px-30 flex items-center justify-center">
                      <div className="w-full mt-20 md:mt-0   h-full">
                        <div className="text-center mb-3 md:mb-0">
                          <h1 className="text-white/93 bold md:text-5xl">About Us</h1>
                        </div>
                        <div className="md:px-40 mb-5 md:mb-0 px-10 text-xs  md:text-sm md:py-4 text-center  regular h-full">
                          <p className="text-white/55    md:pb-2 text-sm">
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

      <div className="w-full md:gap-30  md:mt-10 md:flex h-full">
          <div className="w-full md:pt-10  pt-5 pr-20 md:pr-0 h-full">
          <img src={bg} alt="" className="w-[100vh] h-full" />
          </div>
          <div className="w-full md:pr-20  h-full">
          <div className="md:pb-3 px-10 md:px-0 pt-3 md:pt-0 ">
          <h1 className="bold md:text-2xl text-[#ffb03b]/93">Our Company Values</h1>
          </div>

          <div className="w-full px-10 md:px-0 pb-3 md:pb-0 pt-3 mb:pt-0 md:pr-20">
          <h1 className="bold text-black/93">SUSTAINABILITY</h1>
          <p className="text-black/55 md:pb-5 md:pt-2 text-sm">
                  We offer digital advertising, managing online advertising
                  campaigns, including search engine marketing (SEM), social
                  media advertising, billboards and we also offer social media
                  management.
          </p>
          </div>

          <div className="w-full px-10 pb-3 md:pb-0 md:px-0 md:pr-20">
          <h1 className="bold text-black/93">SUSTAINABILITY</h1>
          <p className="text-black/55 md:pb-5 md:pt-2 text-sm">
                  We offer digital advertising, managing online advertising
                  campaigns, including search engine marketing (SEM), social
                  media advertising, billboards and we also offer social media
                  management.
          </p>
          </div>

          <div className="w-full px-10 md:px-0 md:pr-20">
          <h1 className="bold text-black/93">SUSTAINABILITY</h1>
          <p className="text-black/55 md:pb-5 md:pt-2 text-sm">
                  We offer digital advertising, managing online advertising
                  campaigns, including search engine marketing (SEM), social
                  media advertising, billboards and we also offer social media
                  management.
          </p>
          </div>

          <div className="px-10 md:px-0 pb-3 md:pb-0 pt-2 mb:pt-0  ">
                <Link
                  to="contact"
                  className="text-black/93 md:p-2   border-2 border-[#ffb03b] bold md:text-xl"
                >
                  Contact Us
                </Link>
              </div>

          </div>
        </div>

        <div className="md:mt-10 md:px-30">
                <h1 className="text-black pl-10 md:pl-0  bold md:text-5xl"> Our Crew</h1>
              </div>
              {/* --- section start --- */}
              <div className="w-full md:gap-10 px-10   py-3 mb-3 md:mb-0  md:py-0    md:flex md:mt-10 md:px-30">
                <div className="w-full pb-3 md:pb-0 ">
                  <div className="w-[100%]">
                    <div
                      className="w-[100%] h-[38vh] "
                      style={{
                        backgroundImage: `url(${r1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <h1 className="text-[#fa9508] md:pt-50 text-center bold md:text-lg">
                        Shown Charie
                      </h1>
                      <p className="regular text-center md:pb-3 md:text-lg text-white">
                      videography
                      </p>
                    </div>
                  </div>
                </div>
        
                <div className="w-full  pb-3 md:pb-0">
                  <div className="w-[100%]">
                    <div
                      className="w-[100%] h-[38vh] "
                      style={{
                        backgroundImage: `url(${r2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <h1 className="text-[#fa9508] md:pt-50 text-center bold md:text-lg">
                        Tawanda Shumba
                      </h1>
                      <p className="regular text-center md:pb-3 md:text-lg text-white">
                        Web developer
                      </p>
                    </div>
                  </div>
                </div>
        
                <div className="w-full">
                  <div className="w-[100%]">
                    <div
                      className="w-[100%] h-[38vh] "
                      style={{
                        backgroundImage: `url(${r1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <h1 className="text-[#fa9508] md:pt-50 text-center bold md:text-lg">
                        Gideon Nyikadzino 
                      </h1>
                      <p className="regular text-center md:pb-3 md:text-lg text-white">
                        Photography
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="w-full md:mt-10 md:px-30 h-full px-10  py-3 mb-3 md:mb-0  md:py-0">
                <div className="w-full h-full">
                          <h1 className="text-black/93 cursor-pointer bold md:text-5xl">
                            Testimonials
                          </h1>
                        </div>
                
                        {/* ---card 1 --- */}
                        <div className="md:flex md:mt-10  md:gap-4 w-full h-full ">
                          <div className=" h-full mb-3 md:mb-0 px-3 md:px-0 py-3 md:py-0  md:w-[35%] rounded-xl duration-150 transition-all  cursor-pointer   hover:border-[#ffb03b] hover:border-2  bg-[#1d1d1d]">
                            <div className="md:px-10   md:py-5">
                              <div className="">
                                <h1 className="bold  text-white/93">Media Maduku</h1>
                                <p className="text-white/55 md:pb-5 md:pt-2 text-sm">
                                  This includes photography and video production, It encompasses
                                  both traditional and modern formats that convey messages, tell
                                  stories, and engage audiences through visual, audio, and
                                  written content.
                                </p>
                              </div>
                              <div className="md:py-2 cursor-pointer">
                                <img src={icon} alt="" className="" />
                              </div>
                            </div>
                          </div>
                
                          {/* --- card 2 ---- */}
                          <div className=" h-full mb-3 md:mb-0 px-3 md:px-0 py-3 md:py-0 md:w-[35%] rounded-xl duration-150 transition-all  cursor-pointer   hover:border-[#ffb03b] hover:border-2 bg-black">
                            <div className="md:px-10 md:py-5">
                              
                              <div className="">
                                <h1 className="bold text-white/93">Stacy Dembo</h1>
                                <p className="text-white/60 md:pb-5 md:pt-2 text-sm">
                                  We provide lighting, acoustics, soundproofing and echo control
                                  services both in music and videos and also equipment
                                  arrangement like camera placement, microphones, computers and
                                  other tools.
                                </p>
                              </div>
                              <div className="md:py-2 cursor-pointer">
                                <img src={icon1} alt="" className="" />
                              </div>
                            </div>
                          </div>
                
                          {/* ---card 3--- */}
                
                          <div className=" h-full mb-3 md:mb-0 px-3 md:px-0 py-3 md:py-0 md:w-[35%] rounded-xl duration-150 transition-all  cursor-pointer   hover:border-[#ffb03b] hover:border-2  bg-[#1d1d1d]">
                            <div className="md:px-10 md:py-5">
                              
                              <div className="">
                                <h1 className="bold text-white/93">Alice Shoko </h1>
                                <p className="text-white/55  w-full md:pt-2 text-sm">
                                  We use screens, such as LCD, LED, OLED or projector, to
                                  display multimedia content for communication or advertising
                                  purposes to a targeted audience.Digital signage can be used to
                                  promote branded gift campaigns.
                                </p>
                              </div>
                              <div className="md:py-2 cursor-pointer">
                                <img src={icon} alt="" className="" />
                              </div>
                            </div>
                          </div>
                        </div>        
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

export default About