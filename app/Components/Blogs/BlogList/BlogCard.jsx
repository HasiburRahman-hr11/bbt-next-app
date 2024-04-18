import Link from 'next/link'
import React from 'react'

const BlogCard = ({data}) => {
  return (
    <Link href={`/blogs/${data._id}`} className='block transition-all duration-500 group rounded-[1.5rem] overflow-hidden bg-[#F4F4F1]'>
      <div>
        <img src={data.thumbnail} alt="Blog Thumbnail" className='block object-cover h-auto w-full' width="735" height="682" />
      </div>
      <div className='px-[2rem] pt-[2rem] pb-[3rem]'>
        <h4 className='text-[1.8rem] leading-[1.3] mb-[2rem] line-clamp-2 3xl:text-[3.8rem]'>{data.title}</h4>
        <p className='text-[1.2rem] font-light 3xl:text-[1.9rem]'>{data.description.substring(0,122)}</p>
      </div>
    </Link>
  )
}

export default BlogCard