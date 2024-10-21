import BackButton from '@/components/elements/BackButton';
import React from 'react';

function page() {
  return (
    <div className="m-4">
      <div className="flex items-center">
        <BackButton></BackButton>
        <div className="flex-grow text-center">토스뱅크 송금</div>
      </div>
    </div>
  );
}

export default page;
