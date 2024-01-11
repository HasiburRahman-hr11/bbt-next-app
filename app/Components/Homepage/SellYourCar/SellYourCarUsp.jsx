import Image from 'next/image'
import React from 'react'


const SellYourCarUsp = ({usp}) => {
  return (
    <li className='bg-dark-600 pl-8 pr-2 py-12 rounded-xl w-5.5/12 mt-8 lg:w-2.7/12 lg:rounded-2xl lg:pl-10 lg:py-16 3xl:pl-14 3xl:py-20 3xl:rounded-3xl group hover:bg-white transition-all duration-500 ease-in-out'>
        <Image src={usp.icon} width="25" height="25" alt="Car Image" className='w-10 object-contain mb-6 xl:w-11 xl:mb-12 2xl:w-12 3xl:w-16 group-hover:invert transition-all duration-500 ease-in-out' />
        <p className='text-white font-extralight text-2xl mt-4 [&>strong]:font-medium [&>strong]:block leading-normal xl:text-3xl xl:leading-relaxed 3xl:text-4xl 3xl:leading-relaxed group-hover:text-black transition-all duration-500 ease-in-out'>{usp.title} <strong>{usp.titleStrong}</strong></p>
    </li>
  )
}

export default SellYourCarUsp