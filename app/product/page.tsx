import React from 'react';
import Sidebar from '@/Components/Sidebar/Sidebar';
import Product from '@/Components/product/product';
import Navbar from '@/Components/Dashbord/Navbar';
import Head from '@/Components/Dashbord/Head';

function ProductPage() {
  return (
    <div className='bg-gray-300 flex '>
      <div className='bg-[#004AAD] w-[231px] h-[1628px] text-white flex'>
        <Sidebar />
      </div>
      <div > 
        <div className='m-auto'>
          <Navbar/>
          <Head/>
          </div>      
        <div className='bg-white text-black'>
        <Product/>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
