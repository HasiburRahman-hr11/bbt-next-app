import Link from 'next/link'
import React from 'react'

const RelatedBlogCard = ({data , cardBg}) => {
  return (
    <Link href={`/blogs/${data._id}`} className={`bg-[${cardBg}] block transition-all h-full duration-500 group rounded-[1.5rem] xl:rounded-[2.5rem] overflow-hidden  3xl:rounded-[5rem]`}>
      <div className='rounded-[1.5rem] xl:rounded-[2.5rem] overflow-hidden 3xl:rounded-[5rem]'>
        <img src={data.thumbnail} alt="Blog Thumbnail" className='block object-cover h-auto w-full' width="735" height="682" />
      </div>
      <div className='px-[2rem] pt-[2rem] pb-[3rem] xl:px-[3.5rem] xl:pt-[3rem] xl:pb-[4.5rem] 3xl:px-[6rem] 3xl:pt-[4rem] 3xl:pb-[6rem]'>
        <h4 className='text-[1.8rem] leading-[1.3] mb-[2rem] line-clamp-2 xl:text-[1.5rem] xl:tracking-[-1px] 3xl:text-[2.4rem] 1xl:text-[1.8rem] 2xl:text-[2rem]'>{data.title}</h4>
        <p className='text-[1.2rem] font-light 3xl:text-[1.9rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.6rem]'>Nov 30, 2017</p>
      </div>
    </Link>
  )
}

export default RelatedBlogCard