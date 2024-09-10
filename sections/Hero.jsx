import {rob} from '../assets'
import {Avatars} from '../assets'
import { aifront } from '../assets'
import { lb1, lb2, lb3, lb4, lb5 } from '../assets' 
import {exp} from '../assets'
import {costeff} from '../assets'
import {day} from '../assets'
import {seamless} from '../assets'
import { iPhone } from '../assets'
import { AI, aihands, aihands2 } from '../assets'
import { Av1, Av2, Av3, Av4, Av5, Av6 } from '../assets'
import { Container1,Container2 } from '../assets'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Hero = () => {
  return (
    <div className="relative overflow-hidden mt-14">

{/*------------------------HERO---------------------------  */}

        <div className='flex space-x-24 justify-center items-center'>

        <div className='sm:w-2/5 lg:ml-0 sm:ml-10 ml-4'>

            <section className="w-[198px] bg-[#98A9B326] bg-opacity-15 flex space-x-[8px] rounded-[100px] sm:py-[12px] py-[8px] px-[16px] sm:mb-0 mb-4">
                <img className='w-[16px] h-[16px]' src={rob}></img>
                <span className='font-manrope text-[12px] text-[#153140] font-semibold'>
                    Your virtual chat partner
                </span>
            </section >
    
            <section className='sm:text-[64px] text-[40px] font-manrope text-black font-semibold sm:mb-0 mb-6'>
                Transform Every Interaction with Our Smart AI Chatbot
            </section>

            <section className='text-[18px] font-manrope text-[#5F6365] font-[400px] '>
            Our AI chatbot provides personalized interactions, automates routine tasks, and ensures seamless communication around the clock. Elevate your user experience with cutting-edge technology today
            </section>

            <section className='flex space-x-4 mt-12'>
                <button className='rounded-[100px] font-manrope font-semibold text-[14px] px-7 py-4 bg-[#229B55] text-white'>
                    Try for Free
                </button>
                <button className='rounded-[100px] font-manrope font-semibold text-[14px] px-7 py-4 bg-[#F9FAFA] text-black'>
                    Learn more
                </button>
            </section>

            <section className='mt-10 flex space-x-2 items-center'>
                <img className='sm:w-1/6 w-3/12' src={Avatars} ></img>
                <span className='font-manrope sm:text-sm text-[12px] font-medium text-[#5F6365]'> And <span className='font-bold'>100+ people</span> have tried<span className='font-bold'> Built for AI</span></span>
            </section>
        </div>

        <div className='sm:block hidden'>
            <img className='w-2/2 ' src={aifront}></img>
            
        </div>
        </div>

{/*------------------------SOCIAL PROOF---------------------------  */}

        <div className='bg-[#229B55] h-[300px] flex flex-col space-y-14 pt-2 mt-20 justify-center items-center relative'>
            <span className='text-white font-manrope text-lg'>
                Trusted by
            </span>

            <section className='lg:ml-48 sm:ml-0 ml-10 lg:mx-32 mx-16 sm:mx-0 grid lg:grid-cols-5 sm:grid-cols-5 grid-cols-2 lg:gap-10 sm:gap-6 gap-6 mb-80 '>
                <img className=' lg:w-3/4 sm:w-[160px] w-[600px]' src={lb1}></img>
                <img className=' lg:w-3/4 sm:w-[160px] w-[600px]' src={lb2}></img>
                <img className=' lg:w-3/4 sm:w-[160px] w-[600px]' src={lb3}></img>
                <img className=' lg:w-3/4 sm:w-[160px] w-[600px]' src={lb4}></img>
                <img className=' lg:w-3/4 sm:w-[160px] w-[600px] sm:ml-0 ml-20' src={lb5}></img>
            </section>
            
        </div>

{/*------------------------WHY CHOOSE US---------------------------  */}
{/* Large Screen */}

        <div className='mt-28 flex flex-col space-y-6 justify-center items-center text-center'>
            <span className='sm:text-[64px] text-[40px] font-manrope text-black font-semibold sm:mb-0 mb-1'>
                Unlock the Power<br />of Intelligent Conversations
            </span>
            <span className='font-manrope sm:text-lg text-[16px] text-[#5F6365] font-normal'>
            Explore how our AI chatbot's advanced features seamlessly adapt to user queries
            </span>
        </div>

        <div className='w-full max-w-screen-2xl mx-auto mt-24'>
        <div className='hidden sm:grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-56 sm:gap-14 sm:mr-10 lg:mr-32 sm:ml-16 lg:-ml-8' >
            <section className='whyuscards_lg'>
                <img className='w-1/6 pt-6 pb-2' src={exp} ></img>
                <span className='whyuscards_lg3'> Good Experiences </span>
                <span className='whyuscards_lg1'> Our chatbot offers customizable options to tailor interactions based on your specific needs. </span>
                <span className='whyuscards_lg2'> Learn more → </span>
            </section>

            <section className='whyuscards_lg'>
                <img className='w-1/6 pt-6 pb-2' src={day} ></img>
                <span className='whyuscards_lg3'> 24/7 Availability </span>
                <span className='whyuscards_lg1'> Our chatbot operates around the clock, providing instant support and making your business accessible. </span>
                <span className='whyuscards_lg2'> Learn more → </span>
            </section>

            <section className='whyuscards_lg'>
                <img className='w-1/6 pt-6 pb-2' src={costeff} ></img>
                <span className='whyuscards_lg3'> Cost-Effective </span>
                <span className='whyuscards_lg1'> Our chatbot offers a cost-effective alternative to traditional support channels, providing significant ROI. </span>
                <span className='whyuscards_lg2'> Learn more → </span>
            </section>

            <section className='whyuscards_lg'>
                <img className='w-1/6 pt-6 pb-2' src={seamless} ></img>
                <span className='whyuscards_lg3'> Seamless Integration </span>
                <span className='whyuscards_lg1'> Integrate our AI chatbot effortlessly with your existing systems, websites, and applications. </span>
                <span className='whyuscards_lg2'> Learn more → </span>
            </section>
        </div>

{/* Mobile Screen */}

        <div className='sm:hidden'>
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <section className='whyuscards_sm'>
                <img className='w-1/6 pt-6 pb-2 mb-4' src={exp} />
                <span className='whyuscards_sm1'> Good Experiences </span>
                <span className='whyuscards_sm2'>
                  Our chatbot offers customizable options to tailor interactions based on your specific needs.
                </span>
                <span className='font-manrope text-[#1E455A] font-bold text-base pt-4'> Learn more → </span>
              </section>
            </SwiperSlide>

            <SwiperSlide>
              <section className='whyuscards_sm'>
                <img className='w-1/6 pt-6 pb-2 mb-4' src={day} />
                <span className='whyuscards_sm1'> 24/7 Availability </span>
                <span className='whyuscards_sm2'>
                  Our chatbot operates around the clock, providing instant support and making your business accessible.
                </span>
                <span className='font-manrope text-[#1E455A] font-bold text-base pt-4'> Learn more → </span>
              </section>
            </SwiperSlide>

            <SwiperSlide>
              <section className='whyuscards_sm'>
                <img className='w-1/6 pt-6 pb-2 mb-4' src={costeff} />
                <span className='whyuscards_sm1'> Cost-Effective </span>
                <span className='whyuscards_sm2'>
                  Our chatbot offers a cost-effective alternative to traditional support channels, providing significant ROI.
                </span>
                <span className='font-manrope text-[#1E455A] font-bold text-base pt-4'> Learn more → </span>
              </section>
            </SwiperSlide>

            <SwiperSlide>
              <section className='whyuscards_sm'>
                <img className='w-1/6 pt-6 pb-2 mb-4' src={seamless} />
                <span className='whyuscards_sm1'> Seamless Integration </span>
                <span className='whyuscards_sm2'>
                  Integrate our AI chatbot effortlessly with your existing systems, websites, and applications.
                </span>
                <span className='font-manrope text-[#1E455A] font-bold text-base pt-4'> Learn more → </span>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
        
{/*------------------------FEATURES---------------------------  */}
{/* Feature 1 */}

        <div className='flex lg:space-x-16 sm:space-x-6 justify-center items-center sm:mt-32 mt-14 lg:mr-0 sm:mr-1 lg:ml-0 sm:ml-10  ml-16 mr-16'>

        <div className='bg-[#2a6F9FAFAf6f] lg:w-[550px] lg:h-[500px] sm:h-[430px] rounded-2xl flex justify-center items-end sm:block hidden'>
        <img className='object-contain mb-0 w-[100%]' src={iPhone}></img>
        </div>
        
        <div className='flex flex-col'>    
        <div className='bg-[#F9FAFA] w-[300px] h-[300px] rounded-2xl flex justify-center items-end sm:hidden'>
        <img className='object-contain mb-0 w-[100%]' src={iPhone}></img>
        </div>
            <section className='lg:text-4xl sm:text-3xl text-2xl lg:mt-0 sm:-mt-20 mt-4 font-manrope text-black font-semibold sm:mb-10 mb-4'>
            Seamlessly Craft Custom <br/>Prompts with Ease Using <br/> Our AI Chatbot Platform
            </section>

            <section className='text-sm font-manrope text-[#5F6365] font-[400px] sm:hidden'>
            Transforming your interactions has never been simpler. Our cutting-edge AI chatbot platform empowers you to effortlessly design custom prompts,shaping dynamic conversations that resonate with your audience.
            </section>

            <section className='features1'>
            Transforming your interactions has never been simpler.<br/> Our cutting-edge AI chatbot platform empowers you <br/> to effortlessly design custom prompts, shaping dynamic conversations that resonate <br/> with your audience.
            </section>            

            <section className='features2'>
            Transforming your interactions has never been simpler. Our cutting-edge <br/> AI chatbot platform empowers you to effortlessly design custom prompts, <br/> shaping dynamic conversations that resonate with your audience.
            </section>

            <button className='sm:mt-14 mt-10 rounded-[40px] font-semibold font-manrope border-2 border-gray-100 bg-[##F9FAFA] text-xs px-1 sm:w-[120px] w-[90px] sm:h-[50px] h-[40px]'>
                Learn More
            </button>
        </div>
        </div>

{/* Feature 2 */}

        <div className='flex lg:space-x-16 sm:space-x-6 justify-center items-center lg:mt-32 sm:mt-20 mt-14 lg:mr-0 sm:mr-6 lg:ml-0 sm:ml-10 ml-16 mr-16'>
        <div className='flex flex-col'>
            
            <div className='bg-[#F9FAFA] w-[300px] h-[300px] rounded-2xl flex justify-center items-end sm:hidden'>
                <img className='object-contain mb-0 w-[100%]' src={AI}></img>
            </div>

            <section className='lg:text-4xl sm:text-3xl text-2xl sm:mt-0 mt-4 font-manrope text-black font-semibold sm:mb-10 mb-4'>
            Explore Our Trending  <br/> Prompts and Easily Elevate  <br/> Your Conversations
            </section>

            <section className='text-sm font-manrope text-[#5F6365] font-[400px] sm:hidden pr-9'>
            Whether you're a seasoned conversational designer or just starting out, our platform empowers you to craft compelling dialogues that captivate your audience. Explore the realm of trending prompts!
            </section>

            <section className='features1'>
            Whether you're a seasoned conversational designer <br/>or just starting out, our platform empowers you<br/> to craft compelling dialogues that captivate  your audience.<br/> Explore the realm of trending prompts!
            </section> 

            <section className='features2'>
            Whether you're a seasoned conversational designer or just starting out,  <br/> our platform empowers you to craft compelling dialogues that captivate  <br/> your audience. Explore the realm of trending prompts!
            </section>

            <button className='sm:mt-14 mt-10 rounded-[40px] font-semibold font-manrope border-2 border-gray-100 bg-[##F9FAFA] text-xs px-1 sm:w-[120px] w-[90px] sm:h-[50px] h-[40px]'>
                Learn More
            </button>
        </div>

        <div className='bg-[#F9FAFA] lg:w-[550px]  sm:w-[450px] lg:h-[500px] sm:h-[430px] rounded-2xl flex justify-center items-end sm:block hidden'>
        <img className='object-contain mb-0 w-full' src={AI}></img>
        </div>
        </div>


{/*------------------------Testimonials---------------------------  */}

        <div className='mt-28 flex flex-col space-y-6 justify-center items-center text-center'>

            <span className='text-[40px] font-manrope text-black font-semibold mb-1 sm:hidden block'>
            Discover What Users Love About Our Platform
            </span>
            <span className='text-[64px] font-manrope text-black font-semibold mb-0 sm:block hidden'>
            Discover What Users<br/>Love About Our Platform
            </span>

            <span className='font-manrope sm:text-lg text-[16px] text-[#5F6365] font-normal'>
            Uncover authentic experiences and insights straight from our users
            </span>
        </div>

{/* Large Screen */}
       <div className='w-full max-w-screen-xl mx-auto mt-16'>
       <div className='hidden sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-y-8 lg:ml-0 sm:ml-10 '>
        <div className='testimonialscards '>
            <img className='h-2/6' src={Av1}></img>
            <div className='flex flex-col space-y-2'>
                <span className='font-manrope text-lg mb-2'> "As a small business owner, <br/> integrating Botify into our <br/> website was a game-changer.”</span>
                <span className='testimonialscards_1'> Michael Darsono </span>
                <span className='testimonialscards_2'> Business Owner </span>

            </div>
        </div>

        <div className='testimonialscards'>
            <img className='h-2/6' src={Av2}></img>
            <div className='flex flex-col space-y-2'>
                <span className='font-manrope text-lg mb-2'> "The chatbot seamlessly <br/> integrates with our website,<br/> providing instant assistance!”</span>
                <span className='testimonialscards_1'> John Dukes </span>
                <span className='testimonialscards_2'> Business Owner </span>

            </div>
        </div>

        <div className='testimonialscards'>
            <img className='h-2/6' src={Av3}></img>
            <div className='flex flex-col space-y-2'>
                <span className='font-manrope text-lg mb-2'>"Since implementing Botify,<br/> we've seen a significant <br/> increase in engagement.”</span>
                <span className='testimonialscards_1'> Patricia Sanders </span>
                <span className='testimonialscards_2'> Business Owner </span>

            </div>
        </div>

        <div className='testimonialscards '>
            <img className='h-2/6' src={Av4}></img>
            <div className='flex flex-col space-y-2'>
            <span className='font-manrope text-lg mb-2'>"Botify's natural language <br/> processing capabilities are <br/> impressive!”</span>
                <span className='testimonialscards_1'> Stephanie Sharkey </span>
                <span className='testimonialscards_2'> Business Owner </span>

            </div>
        </div>

        <div className='testimonialscards '>
            <img className='h-2/6' src={Av5}></img>
            <div className='flex flex-col space-y-2'>
                <span className='font-manrope text-lg mb-2'> "Botify has helped us scale our <br/> customer support operations <br/> without compromising quality.”</span>
                <span className='testimonialscards_1'> Kurt Bates </span>
                <span className='testimonialscards_2'> Business Owner </span>

            </div>
        </div>

        <div className='testimonialscards'>
            <img className='h-2/6' src={Av6}></img>
            <div className='flex flex-col space-y-2'>
                <span className='font-manrope text-lg mb-2'>“We couldn't be happier with <br/> our decision to invest in this<br/> platform!"</span>
                <span className='testimonialscards_1'> Frances Swann </span>
                <span className='testimonialscards_2'> Business Owner </span>

            </div>
        </div>

        </div>

        <section className='flex justify-center items-center sm:block hidden sm:ml-10 lg:ml-0'>
        <button className='mt-14 rounded-[40px] font-bold font-manrope border-2 border-gray-100 bg-[##F9FAFA] text-xs px-1 w-[150px] h-[50px]'>
                See All Testionials
            </button>
        </section>

{/* Mobile Screen */}

<div className='sm:hidden'>
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <section className='testimonialscards_mb'>
              <img className='w-1/6 pt-6 pb-2' src={Av1} ></img>
              <span className='font-manrope font-semibold text-xl pt-4'> Good Experiences </span>
              <span className='testimonialscards_mb_1'> Our chatbot offers customizable options to tailor interactions based on your specific needs. </span>
              <span className='testimonialscards_mb_2'> Learn more → </span>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className='testimonialscards_mb'>
              <img className='w-1/6 pt-6 pb-2' src={Av2} ></img>
              <span className='font-manrope font-semibold text-xl pt-4'> 24/7 Availability </span>
              <span className='testimonialscards_mb_1'> Our chatbot operates around the clock, providing instant support and making your business accessible. </span>
              <span className='testimonialscards_mb_2'> Learn more → </span>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className='testimonialscards_mb'>
              <img className='w-1/6 pt-6 pb-2' src={Av3} ></img>
              <span className='font-manrope font-semibold text-xl pt-4'> Cost-Effective </span>
              <span className='testimonialscards_mb_1'> Our chatbot offers a cost-effective alternative to traditional support channels, providing significant ROI. </span>
              <span className='testimonialscards_mb_2'> Learn more → </span>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className='testimonialscards_mb'>
              <img className='w-1/6 pt-6 pb-2' src={Av4} ></img>
              <span className='font-manrope font-semibold text-xl pt-4'> Seamless Integration </span>
              <span className='testimonialscards_mb_1'> Integrate our AI chatbot effortlessly with your existing systems, websites, and applications. </span>
              <span className='testimonialscards_mb_2'> Learn more → </span>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className='testimonialscards_mb'>
              <img className='w-1/6 pt-6 pb-2' src={Av5} ></img>
              <span className='font-manrope font-semibold text-xl pt-4'> Personalized Experience </span>
              <span className='testimonialscards_mb_1'> Tailor the chatbot's responses and behavior to fit the unique requirements of your business. </span>
              <span className='testimonialscards_mb_2'> Learn more → </span>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className='testimonialscards_mb'>
              <img className='w-1/6 pt-6 pb-2' src={Av6} ></img>
              <span className='font-manrope font-semibold text-xl pt-4'> Easy Setup </span>
              <span className='testimonialscards_mb_1'> Set up our chatbot quickly and easily, with minimal technical expertise required. </span>
              <span className='testimonialscards_mb_2'> Learn more → </span>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>

      <section className='flex justify-center items-center sm:hidden'>
        <button className='mt-14 rounded-[40px] font-bold font-manrope border-2 border-gray-100 bg-[##F9FAFA] text-xs px-1 w-[150px] h-[50px]'>
                See All Testionials
            </button>
        </section>

       </div>

{/*------------------------Blogs---------------------------  */}

       <div className='mt-36 flex flex-col space-y-6 justify-center items-center text-center'>
            
            <span className='text-[40px] font-manrope text-black font-semibold mb-1 sm:hidden block '>
            Everything You Need to Know to Get Started
            </span>
            <span className='text-[64px] font-manrope text-black font-semibold mb-0 sm:block hidden'>
            Everything You Need <br/> to Know to Get Started
            </span>


            <span className='font-manrope sm:text-lg text-[16px] text-[#5F6365] font-normal'>
            Discover the essential knowledge and practical insights necessary
            </span>
        </div>

{/* Large Screen */}

        <div className='hidden sm:block'>
        <div className='flex lg:flex-row sm:flex-col sm:space-y-16 lg:space-y-0 lg:space-x-4 justify-center items-center mt-14 '>
            <div className='lg:w-2/6 sm:w-3/6 aspect-square relative '>
            <img className='object-cover w-full h-full rounded-2xl' src={Container1}/>
            <div className='absolute inset-0'>
            <div className='blogs_grad'></div>

            <div className='absolute flex flex-col space-y-8 font-manrope opacity-95 mt-92 ml-4'> 
                <span className='text-white font-normal text-3xl '>AI Chatbots in Education <br/>Revolutionizing Learning Experiences</span>
                <span className='text-white font-light text-lg '>Step into the future of education as AI chatbots revolutionize <br/> learning experiences. Explore how cutting-edge technology is <br/> reshaping the way we teach and learn.</span>
                <div className='flex space-x-3'>
                    <span className='blogs_text4'>12 May 2024</span>
                    <span className='blogs_text4'>●</span>
                    <span className='blogs_text4'>7 minutes read</span>
                </div>

            </div>           
            </div>
            </div>         

            <div className='lg:w-2/6 sm:w-3/6 aspect-square relative'>
            <img className='object-cover w-full h-full rounded-2xl' src={Container2} />
            <div className='absolute inset-0'>
            <div className='blogs_grad'></div>

            <div className='absolute flex flex-col space-y-8 font-manrope opacity-95 mt-92 ml-4'> 
                <span className='text-white font-normal text-3xl '>AI Chatbots and the Future of Work:<br/>Trends and Predictions</span>
                <span className='text-white font-light text-lg '>Discover the latest trends and predictions that are<br/>reshaping industries and redefining the nature of<br/>jobs as we know them.</span>
                <div className='flex space-x-3'>
                    <span className='blogs_text4'>11 May 2024</span>
                    <span className='blogs_text4'>●</span>
                    <span className='blogs_text4'>5 minutes read</span>
                </div>

            </div>           
            </div>
            </div>
        </div>
        </div>

            
{/* Mobile Screen */}
        <div className='flex flex-col space-y-10 justify-center items-center mt-14 sm:hidden block '>
           <div className='w-5/6 aspect-square relative '>
            <img className='object-cover w-full h-full rounded-2xl' src={Container1}/>
            <div className='absolute inset-0'>
            <div className='blogs_grad'></div>

            <div className='absolute flex flex-col space-y-4 font-manrope opacity-95 mt-[300px] ml-4'> 
                <span className='text-white font-normal text-sm '>AI Chatbots in Education <br/>Revolutionizing Learning Experiences</span>
                <span className='text-white font-light text-[10px] '>Step into the future of education as AI chatbots revolutionize learning experiences. Explore how cutting-edge technology is reshaping the way we teach and learn.</span>
                <div className='flex space-x-3'>
                    <span className='blogs_mb_text2'>12 May 2024</span>
                    <span className='blogs_mb_text2'>●</span>
                    <span className='blogs_mb_text2'>7 minutes read</span>
                </div>

            </div>           
            </div>
            </div>


            <div className='w-5/6 aspect-square relative'>
            <img className='object-cover w-full h-full rounded-2xl' src={Container2} />
            <div className='absolute inset-0'>
            <div className='blogs_grad'></div>

            <div className='absolute flex flex-col space-y-4 font-manrope opacity-95 mt-[266px] ml-4'> 
                <span className='text-white font-normal text-sm '>AI Chatbots and the Future <br/> of Work:Trends and <br/>Predictions</span>
                <span className='text-white font-light text-[10px] '>Discover the latest trends and predictions that arereshaping industries and redefining the nature of obs as we know them.</span>
                <div className='flex space-x-3'>
                    <span className='blogs_mb_text2'>11 May 2024</span>
                    <span className='blogs_mb_text2'>●</span>
                    <span className='blogs_mb_text2'>5 minutes read</span>
                </div>

            </div>           
            </div>
            </div>
           </div> 
      
        <section className='flex justify-center items-center'>
        <button className='mt-14 rounded-[40px] font-bold font-manrope border-2 border-gray-100 bg-[##F9FAFA] text-xs px-1 w-[150px] h-[50px]'>
                Read More Blogs
            </button>
        </section>

{/*------------------------Footer-Hero---------------------------  */}

        <div className='bg-[#F9FAFA] h-[550px] flex lg:space-x-44 w-full justify-center items-center text-center mt-24'>

        <img className='w-1/5 flex items-start h-full lg:block sm:hidden hidden' src={aihands2}></img>
        
        <div className='flex flex-col space-y-6 '>
            
            <span className='text-[40px] font-manrope text-black font-semibold mb-1 sm:hidden block'>
            Experience the Benefits of Our AI Chatbots Today!
            </span>
            <span className='text-[64px] font-manrope text-black font-semibold mb-0 sm:block hidden'>
            Experience the Benefits<br />of Our AI Chatbots Today!
            </span>

            <span className='text-[18px] font-manrope text-[#5F6365] font-[400px]'>
            Uncover authentic experiences and insights straight from our users
            </span>

            <section className='flex justify-center items-center'>
                <button className='sm:mt-14 mt-10 sm:mb-0 mb-32 rounded-[40px] font-bold font-manrope bg-[#229B55] text-xs px-1 w-[150px] h-[50px]'>
                Take Action Now
                </button>
            </section>
        </div>
        <img className='w-1/5 flex items-end h-full lg:block sm:hidden hidden' src={aihands}></img>
        
        </div>
        
    </div>
  )
}

export default Hero