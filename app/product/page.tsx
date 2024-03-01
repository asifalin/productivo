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
      <div className='w-full ' > 
        <div className='m-auto'>
          <div className='flex items-center justify-between text-black bg-white'>
            <h1>
              Product
            </h1>
          <Navbar/>

          </div>
          <Head/>
          </div>      
        <div className='bg-white text-black'>
        <Product/>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
