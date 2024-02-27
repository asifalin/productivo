import React from 'react'

import Header from '@/Components/Dashbord/Header';
import Navbar from '@/Components/Dashbord/Navbar';
import Navhead from '@/Components/Dashbord/Navhead';
import Sidebar from '@/Components/Sidebar/Sidebar';
import Product from '@/Components/Product/Product';

function Dashbord() {
  return (
    <div className='flex'>
      <div className='bg-[#004AAD] w-[231px] h-[1628px] text-white flex'>
        <Sidebar/>
      </div>
          <div className="bg-[#FFFFFF]  w-full h-screen">
<div>
<Navbar/>
  </div><div className='bg-gray-300 h-screen'>
  <Navhead/>
<Header/>
<div className='mt-10 bg-white'>
  <h1 className='ml-5'>New Product Launches</h1>
  <Product/>
</div>
  </div> 
</div>
    </div>
  )
}

export default Dashbord ;
