import Categories from '@/Components/Categories/Categories'
import Sidebar from '@/Components/Sidebar/Sidebar'
import React from 'react'

function Categoriespage() {
  return (
    // <div className='flex'>
    //    <div className='bg-[#004AAD] lg:w-[231px] text-white flex'>
    //     <Sidebar />
    //   </div>
    //   <div className='w-full'>
  
    //     <Categories/>
       
    //   </div>
    // </div>


    <div className='flex'>
      <div className='bg-[#004AAD] w-[231px] text-white '>
        <Sidebar />
      </div>
      <div className="bg-[#FFFFFF] w-full ">
      <Categories/>
      </div>
    </div>
  )
}

export default Categoriespage
