import Categories from '@/Components/Categories/Categories'
import Sidebar from '@/Components/Sidebar/Sidebar'
import React from 'react'

function Categoriespage() {
  return (
    <div className='flex'>
       <div className='bg-[#004AAD] w-[231px] h-[1628px] text-white flex'>
        <Sidebar />
      </div>
      <div className='w-full'>
        <Categories/>
       
      </div>
    </div>
  )
}

export default Categoriespage
