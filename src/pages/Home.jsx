import Navbar from "../components/Navbar";
import bg from "../../public/bg.png";
import icon from "../../public/icon.png";
import icon1 from "../../public/Icon(1).png";
import icon2 from "../../public/Icon2.png";
import icon3 from "../../public/Icon3.png";
import icon4 from "../../public/card 1.png";
import icon5 from "../../public/card6.png";
import icon6 from "../../public/card3.png";
import icon7 from "../../public/card6.png";
import icon8 from "../../public/card2.png";
import icon9 from "../../public/card4.png";
import icon10 from "../../public/card5_2.png";
import img from "../../public/icon(3).png";
import img1 from "../../public/icon(5).png";
import img2 from "../../public/icon(9).png";
import r1 from "../../public/card31.png";
import r2 from "../../public/card22.png";
import r3 from "../../public/card(1).png";
import customer from "../../public/logo 2.png";
import customer1 from "../../public/logo 1.png";
import customer2 from "../../public/logo 3.png";
import customer3 from "../../public/logo 4.png";
import customer4 from "../../public/logo 4 (1).png";
import image from "../../public/img.png";
import { Link } from "react-router-dom";
import imgFooter from "../../public/icon(7).png";
import imgFooter1 from "../../public/icon(8).png";
import imgFooter2 from "../../public/Union 6.png";
import imgFooter3 from "../../public/Union 11.png";

const Home = () => {
  return (
    <div className="w-screen h-full">
      <div className="bg-[#07070F] ">
        <div className="w-screen h-full">
          <Navbar />
        </div>
        {/* ---hero section--- */}
        <div className="w-full md:flex  md:h-[95vh]">
          {/* ---left side--- */}
          <section className="md:w-[30%] h-full md:mt-[16rem] md:pl-30 flex items-center justify-center">
            <div className="w-full mt-70 md:mt-20    h-full">
              <div className="text-center">
                <h1 className="text-white/93 bold text-4xl md:text-5xl">Unleashing</h1>
                <h1 className="text-white/93 bold text-4xl md:text-5xl">Cinematic</h1>
                <h1 className="text-white/93 bold text-4xl md:text-5xl">Brilliance</h1>
              </div>
              <div className="w-full md:py-4  regular h-full">
                <p className="text-white/55 mt-3 md:mt-0 px-18 md:px-0    md:pb-2 text-sm">
                  Discover a world of captivating stories and stunning visuals
                  as we showcase the art of filmimg and videography through our
                  blog and vedio content.
                </p>
                <div className="w-full px-14 md:px-0 mt-3 md:mt-0 mb-3 md:mb-0 md:pt-2 h-full">
                  <button className="bold bg-[#fa9508] hover:text-white cursor-pointer text-lg hover:bg-[#fa9508] w-full  text-black py-1 rounded-lg">
                    Join Us
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* --- End of left side--- */}

          {/* ---right side--- */}
          <section className="h-full  w-full absolute md:relative -top-0 md:top-0 pr-20  mt-40 md:mt-[12rem] md:pr-40">
            <img src={bg} alt="" className=" md:w-[500%]" />
          </section>
          {/* ---End of right side--- */}
        </div>
        {/* ---End of Hero section--- */}
      </div>

      {/* ---Services section--- */}
      <div className="w-full md:mt-10 md:px-30 h-full">
        <div className="w-full mt-3 pl-5 md:pl-0 md:mt-0 mb-3 md:mb-0 h-full">
          <h1 className="text-black/93 text-2xl cursor-pointer bold md:text-5xl">
            Services
          </h1>
        </div>

        {/* ---card 1 --- */}
        <div className="md:flex px-5 md:px-0 md:mt-10 md:gap-4 w-full h-full">
          <div className=" h-full px-3 md:px-0 py-3 mb-3 md:mb-0  md:py-0 md:w-[35%] rounded-xl duration-150 transition-all  cursor-pointer   hover:border-[#ffb03b] hover:border-2  bg-[#1d1d1d]">
            <div className="md:px-10 md:py-5">
              <div className="md:py-2 cursor-pointer">
                <img src={icon} alt="" className="" />
              </div>
              <div className="">
                <h1 className="bold   text-white/93">Media</h1>
                <p className="text-white/55 md:pb-6 md:pt-2 text-sm">
                  This includes photography and video production, It encompasses
                  both traditional and modern formats that convey messages, tell
                  stories, and engage audiences through visual, audio, and
                  written content.
                </p>
              </div>
            </div>
          </div>

          {/* --- card 2 ---- */}
          <div className=" h-full px-3 md:px-0 py-3  mb-3 md:mb-0 md:py-0 md:w-[35%] rounded-xl duration-150 transition-all  cursor-pointer   hover:border-[#ffb03b] hover:border-2 bg-[#ffb03b]">
            <div className="md:px-10 md:py-5">
              <div className="md:py-2 cursor-pointer">
                <img src={icon1} alt="" className="" />
              </div>
              <div className="">
                <h1 className="bold text-white/93">Studio Design</h1>
                <p className="text-white/60 md:pb-4 md:pt-2 text-sm">
                  We provide lighting, acoustics, soundproofing and echo control
                  services both in music and videos and also equipment
                  arrangement like camera placement, microphones, computers and
                  other tools.
                </p>
              </div>
            </div>
          </div>

          {/* ---card 3--- */}

          <div className=" h-full md:w-[35%] px-3  mb-3 md:mb-0 md:px-0 py-3 md:py-0 rounded-xl duration-150 transition-all  cursor-pointer   hover:border-[#ffb03b] hover:border-2  bg-[#1d1d1d]">
            <div className="md:px-10 md:py-5">
              <div className="md:py-2 cursor-pointer">
                <img src={icon} alt="" className="" />
              </div>
              <div className="">
                <h1 className="bold text-white/93">Digital Signage </h1>
                <p className="text-white/55 w-full md:pt-2 text-sm">
                  We use screens, such as LCD, LED, OLED or projector, to
                  display multimedia content for communication or advertising
                  purposes to a targeted audience.Digital signage can be used to
                  promote branded gift campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex px-5 md:px-0 md:mt-10 md:gap-4 w-full h-full">
          <div className=" h-full px-3 md:px-0 py-3 mb-3 md:mb-0  md:py-0  md:w-[35%] rounded-xl duration-150 transition-all  cursor-pointer   hover:border-[#ffb03b] hover:border-2 bg-[#1d1d1d]">
            <div className="md:px-10 md:py-5">
              <div className="md:py-2 cursor-pointer">
                <img src={icon} alt="" className="" />
              </div>
              <div className="">
                <h1 className="bold text-white/93">Branding</h1>
                <p className="text-white/55 md:pb-5 md:pt-2 text-sm">
                  We offer branding services which include brand strategy
                  development, brand identity design, brand messaging, and brand
                  management. We help you create a unique brand that stands out
                  from the competition.
                </p>
              </div>
            </div>
          </div>

          {/* --- card 2 ---- */}
          <div className=" h-full md:w-[35%] px-3 md:px-0 py-3 mb-3 md:mb-0  md:py-0 rounded-xl duration-150 transition-all  cursor-pointer   hover:border-[#ffb03b] hover:border-2   bg-[#ffb03b]">
            <div className="md:px-10 md:py-5">
              <div className="md:py-2 cursor-pointer">
                <img src={icon2} alt="" className="" />
              </div>
              <div className="">
                <h1 className="bold text-white/93">UX/UI</h1>
                <p className="text-white/60 md:pt-2 text-sm">
                  We aim to make digital products both functional and visually
                  engaging. We do visual design which includes choosing the
                  right colors, fonts ans layout and also branding and
                  consistency ensuring a cohesive look across all screens.
                </p>
              </div>
            </div>
          </div>

          {/* ---card 3--- */}

          <div className=" h-full px-3 md:px-0 py-3 mb-3 md:mb-0  md:py-0 md:w-[35%] rounded-xl duration-150 transition-all  cursor-pointer   hover:border-[#ffb03b] hover:border-2   bg-[#1d1d1d]">
            <div className="md:px-10 md:py-5">
              <div className="md:py-2 cursor-pointer">
                <img src={icon} alt="" className="" />
              </div>
              <div className="">
                <h1 className="bold text-white/93">Advertising</h1>
                <p className="text-white/55 md:pb-5 md:pt-2 text-sm">
                  We offer digital advertising, managing online advertising
                  campaigns, including search engine marketing (SEM), social
                  media advertising, billboards and we also offer social media
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---End of Services section--- */}

      {/* ---About section--- */}

      <div className="md:mt-10 md:px-30">
        <h1 className="text-black/93 pl-10 md:pl-0  bold md:text-5xl">Media</h1>
      </div>
      <div className="w-full md:flex md:mt-10 md:px-30 h-full">
        <div className="w-full h-full px-10 md:px-0 py-3 mb-3 md:mb-0  md:py-0 cursor-pointer transition-all duration-150 ">
          <div className="w-full h-full">
            <div className="">
              <img src={icon4} alt="" className="" />
            </div>
            <div className="">
              <p className="text-black/93 bold text-lg">
                Augue Gravida Curabitur
              </p>
              <p className="text-black/55 regular text-sm">COMMERCIAL</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="w-full h-full px-10 md:px-0 py-3 mb-3 md:mb-0  md:py-0 cursor-pointer transition-all duration-150">
            <div className="">
              <img src={icon6} alt="" className="" />
            </div>
            <div className="">
              <p className="text-black/93 bold text-lg">Nullam Faucibus</p>
              <p className="text-black/55 regular text-sm">VFC</p>
            </div>
          </div>
        </div>

        <div className="w-full cursor-pointer h-full">
          <div className="w-full h-full px-10 md:px-0 py-3 mb-3 md:mb-0  md:py-0 cursor-pointer transition-all duration-150">
            <div className="">
              <img src={icon7} alt="" className="" />
            </div>
            <div className="">
              <p className="text-black/93 bold text-lg">
                Nunc Vestibulum Curabitur
              </p>
              <p className="text-black/55  regular text-sm">VIDEO PRODUCTION</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---End of About section--- */}
      {/* ---Contact section--- */}
      <div className="w-full md:flex md:mt-10 md:px-30 h-full">
        <div className="w-full h-full px-10 md:px-0 py-3 mb-3 md:mb-0  md:py-0 cursor-pointer transition-all duration-150">
          <div className="w-full h-full">
            <div className="">
              <img src={icon8} alt="" className="" />
            </div>
            <div className="">
              <p className="text-black/93 bold text-lg">
                Integer Augue Commodo
              </p>
              <p className="text-black/55  regular text-sm">SOUND DESIGN</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="w-full h-full px-10 md:px-0 py-3 mb-3 md:mb-0  md:py-0 cursor-pointer transition-all duration-150">
            <div className="">
              <img src={icon9} alt="" className="" />
            </div>
            <div className="">
              <p className="text-black/93 bold text-lg">Vestibulum Ultrices</p>
              <p className="text-black/55  regular text-sm">EDITING</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="w-full h-full px-10 md:px-0 py-3 mb-3 md:mb-0  md:py-0 cursor-pointer transition-all duration-150">
            <div className="">
              <img src={icon10} alt="" className="" />
            </div>
            <div className="">
              <p className="text-black/93 bold text-lg">Vestibulum Ultrices</p>
              <p className="text-black/55  regular text-sm">DIGITAL EFFECTS</p>
            </div>
          </div>
        </div>
      </div>
      {/* ---End of Contact section--- */}

      {/* --- section start --- */}
      <div className="w-full md:mt-10 px-10 py-3 mb-3 md:mb-0  md:flex md:px-30 ">
        <div className="bg-[#07070F]   rounded-lg md:flex w-full ">
          <div className="md:w-[30%]   md:pt-7 md:px-10 md:py-5">
            <div className="md:px-10 pt-4 md:pt-0 px-33">
              <img src={img} alt="" className="md:w-[50%]" />
            </div>
            <div className="px-30 md:px-0">
              <p className="text-white/93 md:px-5 bold text-4xl">789</p>
              <p className="regular md:text-lg  text-white/55">Happy Clients</p>
            </div>
          </div>

          <div className="md:w-[30%] mt-3 md:mt-0 md:pt-7 md:px-10 md:py-5">
            <div className="md:px-10 px-32">
              <img src={icon} alt="" className="md:w-[50%]" />
            </div>
            <div className="px-28 md:px-0">
              <p className="text-white/93 md:px-5 bold text-4xl">457</p>
              <p className="regular md:text-lg text-white/55">Videos Filmed</p>
            </div>
          </div>

          <div className="md:w-[30%] mt-3 md:mt-0 md:pt-5 md:px-10 md:py-5">
            <div className="md:px-10  px-32">
              <img src={img1} alt="" className="md:w-[40%]" />
            </div>
            <div className="px-28 md:px-0">
              <p className="text-white/93 md:px-5  bold text-4xl">789</p>
              <p className="regular md:text-lg text-white/55">Songs Recorded</p>
            </div>
          </div>

          <div className="md:w-[30%] mt-3 md:mt-0  md:px-10 md:py-5">
            <div className="md:px-10  px-34">
              <img src={img2} alt="" className="md:w-[40%]" />
            </div>
            <div className="md:px-10 pb-4 md:pb-0  px-28 ">
              <p className="text-white/93  md:px-5  bold text-4xl">789</p>
              <p className="regular md:text-lg text-white/55">Videos Edited</p>
            </div>
          </div>
        </div>
      </div>
      {/* --- section end --- */}
      <div className="md:mt-10 md:px-30">
        <h1 className="text-black pl-10 md:pl-0 bold md:text-5xl">Updates</h1>
      </div>
      {/* --- section start --- */}
      <div className="w-full md:gap-10 px-10  py-3 mb-3 md:mb-0  md:py-0 md:flex md:mt-10 md:px-30">
        <div className="w-full mb-3 md:mb-0">
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
                Updates
              </h1>
              <p className="regular text-center md:pb-3 md:text-lg text-white">
                Videos Edited
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mb-3 md:mb-0">
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
                Updates
              </h1>
              <p className="regular text-center md:pb-3 md:text-lg text-white">
                Videos Edited
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
                Updates
              </h1>
              <p className="regular text-center md:pb-3 md:text-lg text-white">
                Videos Edited
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --- section end --- */}

      {/* --- section start --- */}
      <div className=" md:mt-10 md:px-30">
        <div className="">
          <h1 className="text-black/93 pl-10 md:pl-0 bold md:text-5xl">Customers</h1>
        </div>

        <div className="w-full md:mt-10 rounded-lg bg-[#07070F] md:py-10 gap-30 flex h-full justify-center text-center">
          <div className="">
            <img src={customer1} alt="" className="" />
          </div>
          <div className="">
            <img src={customer} alt="" className="" />
          </div>
          <div className="">
            <img src={customer2} alt="" className="" />
          </div>
          <div className="">
            <img src={customer3} alt="" className="" />
          </div>
          <div className="">
            <img src={customer4} alt="" className="" />
          </div>
        </div>
      </div>
      {/* --- section end --- */}

      {/* --- section start --- */}
      <div className="md:mt-10 md:gap-10 px-10  py-3 mb-3 md:mb-0  md:py-0 md:px-30">
        <div className="w-full h-full md:mt-10 pb-40 md:pb-0 md:flex rounded-lg bg-[#07070F]">
          <div className="md:w-full  absolute  md:relative  h-full">
            <div className="md:mt-30 mt-70    md:px-10">
              <h1 className="text-white/93 bold text-sm ml-4 md:ml-0 md:text-4xl">
                Describe Your Project To Us
              </h1>
            </div>
            <div className="">
              <p className="text-white/55 ml-4 mt-3 md:mt-0 md:ml-0 w-[80%] md:w-full  md:px-10 md:pt-5 regular text-xs md:text-sm">
                We offer a variety of services to help you achieve your goals.
                We are here to help you create a unique brand that stands out
                from the competition.
              </p>
              <div className=" md:px-10 ml-4 mt-3 md:mt-0 md:ml-0 md:pt-5">
                <Link
                  to="contact"
                  className="text-white/93 md:p-2  border-2 border-[#ffb03b] bold md:text-xl"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full  md:relative h-full">
            <img src={image} alt="" className="" />
          </div>
        </div>
      </div>
      {/* --- section end --- */}

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
  );
};

export default Home;
