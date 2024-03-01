"use client"
import React from 'react'
import Navbar from '../Dashbord/Navbar'
import Head from '../Dashbord/Head'
import Sidebar from '../Sidebar/Sidebar'
import Linechart from '../Dashbord/Linechart'
import Product from '../product/product'
import Progressbar from './ProgressBar'
import Table from './Table'

function Market() {
  return (
    <div>
     <div className='bg-gray-300 flex '>
      <div className='bg-[#004AAD] w-[231px] h-[1628px] text-white flex'>
        <Sidebar />
      </div>
      <div className='w-full' > 
        <div className='m-auto'>
          <div className='flex items-center justify-between text-black bg-white'>
            <h1>
              Market
            </h1>
          <Navbar/>

          </div>
                <div className='bg-orange-500 mx-7'>
                <div>
                    <Linechart/>
                </div>
                <div className='bg-white text-black'>
                    <h1 className='p-5'>Product List</h1>
                    <Product/>
                </div>
                <div className='flex h-[40vh] gap-5 justify-between '>
                  <div className='bg-green-300 text-black w-[40%] px-9'>
                    <h1 className='py-5'>Trending Brands</h1>
                    <Progressbar/>
                  </div>
                  <div  className='bg-red-400 w-[595px] p-5 overflow-hidden'>
                    <Table/>
                  </div>
                </div>
                </div>
          </div>
    
      </div>
    </div>
    
    </div>
  )
}

export default Market