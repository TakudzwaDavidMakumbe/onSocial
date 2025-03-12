import imgFooter from "../../public/icon(7).png";
import imgFooter1 from "../../public/icon(8).png";
import imgFooter2 from "../../public/Union 6.png";
import imgFooter3 from "../../public/Union 11.png";
import Navbar from '../components/Navbar'

const Services = () => {
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
                          <h1 className="text-white/93 bold md:text-5xl">Our Gallary</h1>
                        </div>
                        <div className="md:px-40  md:py-4 text-center  regular h-full">
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

export default Services