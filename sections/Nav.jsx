import {image} from '../assets'
const Nav = () => {
  return (
    <div className="relative overflow-hidden">
        <div className='flex justify-between sm:mx-10 mx-2 mt-6'>
        <section className='flex space-x-1'>
            <img className='w-[23px] h-[28px]' src={image}></img>
            <span className='font-jakarta text-[20px] text-black font-bold'>Built for AI</span>
        </section>

        <section className='sm:block hidden'>
            <ul className='flex space-x-10 font-jakarta font-semibold text-[16px]'>
                <li>About</li>
                <li>Resources</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
        </section>

        <section className='flex space-x-1'>
            <button className='rounded-[100px] border-spacing-1 border-hidden sm:w-[105px] w-[70px] font-semibold sm:text-[14px] text-[10px] sm:py-[12px] py-[8px] sm:px-[24px] px-[6px] font-jakarta bg-[#91949526] bg-opacity-15'>
                Login
            </button>
            <button className='rounded-[100px] border-spacing-1 border-hidden sm:w-[105px] w-[70px] font-semibold sm:text-[14px] text-[10px] sm:py-[12px] py-[8px] sm:px-[24px] px-[6px] font-jakarta bg-[#229B55]'>
                Register
            </button>

        </section>


        </div>
        
    </div>
  )
}

export default Nav