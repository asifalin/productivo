import React from 'react'
import Image from 'next/image'
import logo from '../../public/picture/logo.png'
import { HiOutlineViewGrid } from 'react-icons/hi';
import { TiLinkOutline } from "react-icons/ti";
import { TbChartHistogram } from "react-icons/tb";
import { LiaLandmarkSolid } from "react-icons/lia";
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { GrInbox } from "react-icons/gr";
import Link from 'next/link';
import { PiHandHeartFill } from "react-icons/pi";
import { FaBox } from "react-icons/fa";
let Sidebars = [
  {
    id: 1,
     icon: <HiOutlineViewGrid/>,
    heading: `Dashbord`,
    link :'/Dashbord',
  },
  {
    id: 2,
    icon: <TiLinkOutline/>,
    heading: `Categories`,
    link :'/Categories',
  },
  {
    id: 3,
    icon: <TbChartHistogram/>,
    heading: `Demographics`,
    link:'/Demographics'
  },
  {
    id: 4,
    icon: <LiaLandmarkSolid/>,
    heading: `Market`,
    link:'/Market'
  },
  {
    id: 5,
    icon: <TiSocialDribbbleCircular/>,
    heading: `Social`,
    link:'/Social',
  },
  {
    id: 6,
    icon: <GrInbox/>,
    heading: `Products`,
    link:'/Product',
  },
  {
    id: 7,
    icon: <PiHandHeartFill/>,
    heading: `Foodservices`,
    link :'/Foodservices',
  },
  {
    id: 8,
    icon: <FaBox/>,
    heading: `Packaging`,
    link:'/Packaging'
    },
];
function Sidebar() {
  return (
    <div className='mt-[22px]'>
      <div className='w-[130px] h-[30.93px] px-6 '>
        <Image src={logo} alt='Branding' width={100} />
      </div>
      <link  href="link" />
      <div className=" w-full ">
        {Sidebars.map((SideBar) => (
          <div key={SideBar.id} className=" flex items-center gap-2 leading-[50px] px-6 hover:bg-gradient-to-r from-orange-600 to-white hover:cursor-pointer  ">
           <div>
            
            <i>{SideBar.icon}</i>
           </div>
           <div>
           <Link rel="stylesheet" href={SideBar.link} > 
            <h1 className=" ">{SideBar.heading}</h1>
            </Link>
           </div>
        
          </div>
        ))}
      </div>
    </div>
  )
}
export default Sidebar;
