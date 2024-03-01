import Dashbord from './Dashbord/page'
import Sidebar from '@/Components/Sidebar/Sidebar'
import React from 'react'

function page() {
  return (
    <>
     <div className='flex'>
      
        <div className="bg-[#FFFFFF] w-full">
          <Dashbord/>
        </div>
      </div>
    </>
  )
}

export default page
