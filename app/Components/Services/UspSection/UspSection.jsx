import React from 'react';
const uspList = [
    {
        icon:'/images/services/banner-usp-1.webp',
        title:'at your </br><b>comfort</b>'
    },
    {
        icon:'/images/services/banner-usp-2.webp',
        title:'easy and  </br><b>hassle free</b>'
    },
    {
        icon:'/images/services/banner-usp-3.webp',
        title:'cost effectively </br><b>solution</b>'
    },
    {
        icon:'/images/services/banner-usp-4.webp',
        title:'100% transparent  </br><b>process</b>'
    },
    {
        icon:'/images/services/banner-usp-5.webp',
        title:'Pick and  </br><b>drop services</b>'
    }
]

const UspSection = () => {
  return (
    <section className='bg-[#F4F4F1] py-[3rem]'>
        <div className="max-1920">
            <div className="container">
                <ul className='flex justify-between flex-wrap'>
                {uspList.map((usp , index)=>(
                    <li key={index} className='w-[50%] flex py-[0.5rem] my-[1.5rem] border-l border-[#BFBFBF] pl-[2rem] [&:nth-child(odd)]:border-none [&:nth-child(odd)]:pl-0'>
                        <div className='w-[3rem]'>
                            <img src={usp.icon} alt="Icon" className='object-contain h-auto w-full' />
                        </div>
                        <h6 className='flex-[1] pl-[1rem] text-[1.3rem] 3xl:text-[2.2rem] font-light [&>b]:font-medium capitalize' dangerouslySetInnerHTML={{__html:usp.title}}></h6>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default UspSection