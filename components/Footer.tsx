import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full relative pt-20 pb-10 overflow-hidden' id='contact'>
      <div className='w-full absolute left-0 -bottom-2 min-h-96'>
        <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
      </div>
      <div className='flex flex-col items-center'>
        <img src='/me.webp' alt='Sebastián Profile Picture' className='h-40 w-40 mb-12 rounded-full border-2 border-purple' />
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-orange-100'>your</span> project to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals</p>
        <a href="mailto:juanszambranob@gmail.com">
          <MagicButton 
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
        <div className='flex mt-16 md:flex-row flex-col justify-between md:justify-around items-center w-full gap-4 lg:gap-0'>
          <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 ZB Studio/Sebastián Zambrano</p>
          <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile, idx) => (
              <a href={profile.link} key={idx}>
                <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' key={profile.id}>
                  <img src={profile.img} alt='social' width={20} height={20}/>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer