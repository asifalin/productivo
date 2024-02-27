import Navbar from '@/Components/Dashbord/Navbar'
import Product from '@/Components/Product/Product'
import Sidebar from '@/Components/Sidebar/Sidebar'
import React from 'react'

function product() {
  return (
    <div className=' flex' >
      <div className=' bg-[#004AAD] w-[231px] h-[1628px] '>
        <Sidebar/>
      </div>
      <div className='w-full'>
        <div className='bg-white'>
        <Navbar />

        </div>
      <Product/>

      </div>
    </div>
  )
}

export default product
