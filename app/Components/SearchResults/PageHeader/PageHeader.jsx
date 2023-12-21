import React from 'react';
import BreadCrumb from '../../CommonComponents/BreadCrumb/BreadCrumb';

const PageHeader = () => {
  return (
    <section className='bg-white py-12'>
        <div className="container">
            <BreadCrumb pageTitle="Search" />
            <div className="flex flex-wrap justify-between items-center mt-5">
                <h2 className='text-3xl leading-0'>Search By “ Audi ”</h2>
                <p className='text-lg leading-0'>Total 136 Results Found</p>
            </div>
        </div>
    </section>
  )
}

export default PageHeader;