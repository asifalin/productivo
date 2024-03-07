"use client"
import React, { useState } from 'react';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";


export default function Slider() {
  const imagePaths = [
    '/picture/c1.png',
    '/picture/c2.png',
    '/picture/c3.png',
    '/picture/c4.png',
    '/picture/c5.png',
    '/picture/c6.png',
    '/picture/c7.png',
    '/picture/c8.png',
    '/picture/c9.png',
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='flex items-center justify-center'>
      <button className="btn" onClick={goToPrevious}> <IoIosArrowBack className='text-2xl text-[ #000000]'/> </button>
      <div className="flex  slider-container py-10">
        {[...Array(3)].map((_, index) => {
          const imageIndex = (currentIndex + index) % imagePaths.length;
          return <img key={index} className='w-[166.66px]' src={imagePaths[imageIndex]} alt={`Image ${imageIndex + 1}`} />;
        })}
      </div>
      <button onClick={goToNext}><IoIosArrowForward className='text-2xl text-[ #000000]'/> </button>
    </div>
  );
}
