// import Dashbord from '@/Components/Dashbord/Dashbord'
import Dashbord from './Dashbord/page'
import Sidebar from '@/Components/Sidebar/Sidebar'
import React from 'react'

function page() {
  return (
    <>
     <div className='flex'>
        <div className='bg-[#004AAD] w-[231px] h-[1628px] text-white flex'>
          <Sidebar/>
        </div>
        <div className="bg-[#FFFFFF] w-full">
          {/* <Dashbord/> */}
        </div>
      </div>
    </>
  )
}

export default page
