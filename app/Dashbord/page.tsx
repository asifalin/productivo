import React from 'react';
import Sidebar from '@/Components/Sidebar/Sidebar';
import Dashboard from '../../Components/Dashbord/Dashbord';

function DashboardPage() {
  return (
    <div className='flex'>
      <div className='bg-[#004AAD] w-[231px] h-[1628px] text-white flex'>
        <Sidebar />
      </div>
      <div className="bg-[#FFFFFF] w-full ">
        <Dashboard />
      </div>
    </div>
  );
}

export default DashboardPage;
