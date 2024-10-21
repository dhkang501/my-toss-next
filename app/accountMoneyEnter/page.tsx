'use client';
import BackButton from '@/components/elements/BackButton';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { giveAccountState, sendAccountState } from '../atoms';
import { useRouter } from 'next/navigation';

const AccountMoneyEnter = () => {
  const [sendAccount, setSendAccount] = useRecoilState(sendAccountState);
  const [giveAccount, setGiveAccount] = useRecoilState(giveAccountState);
  const [inputAmount, setInputAmount] = useState('');

  const router = useRouter();

  const fillWithAmount = () => {
    setInputAmount(sendAccount?.amount || '');
  };

  const clickNextBtn = () => {
    router.push('/sendMoneyCheck');
    //sendMoneyCheck
  };

  return (
    <div className="m-4">
      <div className="flex items-center">
        <BackButton></BackButton>
        <div className="flex-grow text-center">토스뱅크 송금</div>
      </div>
      <div className="mx-2 my-5">
        <div className="text-xl">
          {sendAccount?.description || '내 계좌 '}에서
        </div>
        <div>
          <span className="text-xs text-gray-400">잔액 </span>
          <span>{sendAccount?.amount || '0 '}</span>
          <span className="text-xs text-gray-400">원</span>
        </div>
      </div>
      <div className="mx-2 my-5">
        <div className="text-xl">
          {giveAccount?.description || '상대방 계좌 '}으로
        </div>
        <div className="text-xs text-gray-400">
          {giveAccount?.bankName || '잘못불러온 은행사'}{' '}
          {giveAccount?.description || '잘못불러와졌어요.'}
        </div>
      </div>
      <div className="mx-2 my-5">
        <div className="text-xl mb-1">얼마나 옮길까요?</div>
        <input
          type="text"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="송금할 금액을 입력하세요"
        />
        {inputAmount ? (
          <button
            onClick={clickNextBtn}
            className="mt-2 w-full p-2 bg-blue-500 text-white rounded"
          >
            다음
          </button>
        ) : (
          <button
            onClick={fillWithAmount}
            className="text-xs mt-2 w-auto p-2 bg-gray-400 text-white rounded"
          >
            잔액 {sendAccount.amount}
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountMoneyEnter;
