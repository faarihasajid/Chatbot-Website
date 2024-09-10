import { imagew } from "../assets"

const Footer = () => {
  return (
    <div className="bg-[#229B55] w-full py-8 lg:h-bt1 sm:h-bt h-bt1 relative overflow-hidden">
      <div className="flex sm:flex-row flex-col justify-between sm:mx-20 mx-6 sm:mr-20 mr-1 ">

      <div className="flex flex-col mt-20 space-y-4 sm:block hidden">
        <section className='flex space-x-1 '>
          <img className='w-[23px] h-[28px]' src={imagew}></img>
          <span className='font-jakarta sm:text-2xl text-white font-bold'>Built for AI</span>
          </section>
          
          <section className="font-manrope font-[500] text-lg text-white">
            Your Virtual Chat Partner
            </section>
            
            <section className="font-manrope font-light text-lg text-white">
              hello@botify.com
              </section>
        </div>

{/* --------------------------------- */}

<div className="flex justify-between lg:mx-20 sm:mx-10 mx-6 lg:mr-20 sm:mr-14 mr-1 ">
      <div className="flex flex-col mt-20 space-y-4 sm:hidden mx-20">
        <section className='flex space-x-1'>
          <img className='w-[23px] h-[28px]' src={imagew}></img>
          <span className='font-jakarta sm:text-2xl text-lg text-white font-bold'>Built for AI</span>
        </section>
        
        <section className="font-manrope font-[500] sm:text-lg text-[12px] text-white">
          Your Virtual Chat Partner
        </section>
        
        <section className="font-manrope font-light sm:text-lg text-[12px] text-white">
          hello@botify.com
        </section>
      </div>
</div>
{/* --------------------------------- */}

<div className="flex lg:space-x-36 space-x-8 mt-14 ">

<div className="flex flex-col">
    <ul className="footer_1">
      <li className="footer_headings">
        Company
      </li>
      <li className="footer_lists">
        About Us
      </li>
      <li className="footer_lists">
        Careers
      </li>
      <li className="footer_lists">
        Blogs
      </li>
      <li className="footer_lists">
        Contact
      </li>
    </ul>
  </div>

  <div className="flex flex-col">
    <ul className="footer_1">
      <li className="footer_headings">
        Products
      </li>
      <li className="footer_lists">
        Chatbots
      </li>
      <li className="footer_lists">
        Integration
      </li>
      <li className="footer_lists">
        Live Chat
      </li>
    </ul>
  </div>

  <div className="flex flex-col">
    <ul className="footer_1">
      <li className="footer_headings">
        Our Policies
      </li>
      <li className="footer_lists">
        Privacy Policy
      </li>
      <li className="footer_lists">
        Terms of Service
      </li>
      <li className="footer_lists">
        Refund Policy
      </li>
      <li className="footer_lists">
        Code of Conduct
      </li>
    </ul>
  </div>

  <div className="flex flex-col">
    <ul className="footer_1">
      <li className="footer_headings">
        Social Media
      </li>
      <li className="footer_lists">
        Instagram
      </li>
      <li className="footer_lists">
        Facebook
      </li>
      <li className="footer_lists">
        Linkedin
      </li>
      <li className="footer_lists">
        Youtube
      </li>
    </ul>
  </div>

  
</div>

      </div>




      <div className="flex justify-center items-center sm:mt-36 mt-20 font-manrope font-[200] text-white lg:text-lg sm:text-sm text-[12px] opacity-75">
        © Copyright Botify 2024
      </div>
      
    </div>
  )
}

export default Footer