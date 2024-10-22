import BackButton from '@/components/elements/BackButton';
import React from 'react';

function page() {
  return (
    <div className="m-4">
      <div className="flex items-center">
        <BackButton></BackButton>
        <div className="flex-grow text-center">토스뱅크 송금</div>
      </div>
      <div className="absolute top-1/3 left-52 text-center">
        <div className="text-lg">
          <span className="text-xl text-blue-500">내 저축예금 </span>
          <span> 계좌로</span>
        </div>
        <div> 1 원을</div>
        <div>옮길까요?</div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 m-4">
        <div className="flex justify-between">
          <div>받는 분에게 표시</div>
          <div> 강다혜 </div>
        </div>
        <div className="flex justify-between">
          <div>출금 계좌</div>
          <div> 내 토스뱅크 통장 </div>
        </div>
        <div className="flex justify-between">
          <div>입금 계좌</div>
          <div> 신한 110302342680 </div>
        </div>
        <button className="mt-2 w-full p-2 bg-blue-500 text-white rounded">
          옮기기
        </button>
      </div>
    </div>
  );
}

export default page;
