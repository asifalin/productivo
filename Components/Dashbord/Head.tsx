import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { MdOutlineMessage ,MdMosque } from "react-icons/md";
import { FaRegCalendarCheck,FaUsers } from "react-icons/fa";
let headeritem=[
    {
        id: 1,
        icon: <MdOutlineMessage/>,
        para: 'hello',
        number1: `100,231`,
        number2: `+011.01%`,
        icon1: <FaArrowTrendUp />,
      },
    {
        id: 2,
        icon: <MdMosque/>,
        para: 'hello',
        number1: `100,231`,
        number2: `1.01%`,
        icon1: <FaArrowTrendUp />,
      },
    {
        id: 3,
        icon: <FaRegCalendarCheck/>,
        para: 'hello',
        number1: `100,231`,
        number2: `1.01%`,
        icon1: <FaArrowTrendUp />,
      },
    {
        id: 4,
        icon: <FaUsers/>,
        para: 'hello',
        number1: `100,231`,
        number2: `1.01%`,
        icon1: <FaArrowTrendUp />,
      },   
]
function Head() {
  return (
    <div className='flex justify-around'>
      {headeritem.map((item) => (
  <div key={item.id} className="flex items-center gap-2 bg-gray-200 w-[20%] p-5  ">
    <div className='bg-[blue] text-white text-2xl p-3 rounded-full'>
      {item.icon}
    </div>
    <div>
      <h1 className=" text-blue-800">{item.para}</h1>
      <p>{item.number1}</p>
      <div className='flex gap-2 items-center text-green-700'>
      <p>{item.number2}</p>
      <div className=''>{item.icon1}</div>
      </div>
    </div>
  </div>
))}
    </div>
  )
}
export default Head
