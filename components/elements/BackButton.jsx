"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; 
import { IoIosArrowBack } from 'react-icons/io'; 

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };

  return (
    <button 
      onClick={handleBack} 
      className=""
    >
      <IoIosArrowBack size={30} />
    </button>
  );
};

export default BackButton;
