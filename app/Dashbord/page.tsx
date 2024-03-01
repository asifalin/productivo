<<<<<<< HEAD
import React from 'react'
import Sidebar from '@/Components/Sidebar/Sidebar';
=======
import React from 'react';
import Sidebar from '@/Components/Sidebar/Sidebar';
import Dashboard from '../../Components/Dashbord/Dashbord';
>>>>>>> db9d71244f872750aafb061ff30293bcde978286

function DashboardPage() {
  return (
    <div className='flex'>
      <div className='bg-[#004AAD] w-[231px] h-[1628px] text-white flex'>
        <Sidebar />
      </div>
      <div className="bg-[#FFFFFF] w-full ">
        <Dashboard />
      </div>
<<<<<<< HEAD
          <div className="bg-[#FFFFFF]  w-full h-screen">

</div>
=======
>>>>>>> db9d71244f872750aafb061ff30293bcde978286
    </div>
  );
}

export default DashboardPage;
