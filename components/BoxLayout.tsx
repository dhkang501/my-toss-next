import React from 'react';
import Image from 'next/image';

interface BoxLayoutProps {
  children: React.ReactNode;
}

const BoxLayout: React.FC<BoxLayoutProps> = ({ children }) => {
  return (
    <div className="mb-3">
      <div className="w-full h-auto bg-gray-700 rounded-2xl p-3">
        {children}
      </div>
    </div>
  );
};

export default BoxLayout;
