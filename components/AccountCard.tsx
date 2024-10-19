"use client"; 
import React from 'react';
import { IconType } from 'react-icons';
import { useRouter } from 'next/navigation'; 

interface AccountCardProps {
  // icon: IconType;
  amount: string;
  description: string;
  buttonText?: string;
  href: string;
}

const AccountCard: React.FC<AccountCardProps> = ({ amount, description, buttonText, href }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href); 
  };

  return (
    <div onClick={handleClick} className='flex justify-between items-center p-1 cursor-pointer'>
      <div className='flex'>
        {/* <Icon size={20} /> */}
        <div className='ml-3'>
          <div className=''>{amount}</div>
          <div className='text-xs text-gray-400'>{description}</div>
        </div>
      </div>
      {buttonText && (
        <div className='w-12 h-5 bg-slate-500 rounded-md text-center text-sm'>
          {buttonText}
        </div>
      )}
    </div>
  );
};

export default AccountCard;
