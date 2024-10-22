// 'use client';
import React from 'react';
import BackButton from '@/components/elements/BackButton';
import AccountCard from '@/components/AccountCard';

//가데이터
const accountData = [
  {
    id: 1,
    bankName: '신한은행',
    amount: '200,000원',
    description: '신한은행 통장',
    buttonText: '송금',
    accountNum: '110-332-220384',
  },
  {
    id: 2,
    bankName: '우리은행',
    amount: '100,000,000원',
    description: '우리은행 저축통장',
    buttonText: '송금',
    accountNum: '110-332-220384',
  },
  {
    id: 3,
    bankName: '카카오뱅크',
    amount: '2,900,100원',
    description: '카카오뱅크 외화통장',
    buttonText: '송금',
    accountNum: '110-332-220384',
  },
  {
    id: 4,
    bankName: '토스',
    amount: '1,320,100원',
    description: '토스뱅크 외화통장',
    buttonText: '송금',
    accountNum: '110-332-220384',
  },
];

const accountList = async () => {
  return (
    <div className="m-4">
      <BackButton />
      <div className="text-2xl font-semibold mx-2">어디로 돈을 보낼까요?</div>
      <div className="mx-2 my-5">
        <div className="text-2xl text-gray-400">계좌번호 입력</div>
        <div className="w-full h-px bg-gray-400 my-3"></div>
      </div>
      <div className="mx-2 flex justify-between items-center">
        <div className="text-xl mb-5">내 계좌</div>
        {/* <div className="text-gray-400">총 개수</div> */}
      </div>
      {accountData.map((account) => (
        <AccountCard
          key={account.id}
          amount={account.amount}
          description={account.description}
          bankName={account.bankName}
          accountNum={account.accountNum}
        />
      ))}

      <div className="text-xl mx-2 my-5">최근 보낸 계좌</div>
      {accountData.map((account) => (
        <AccountCard
          key={account.id}
          amount={account.amount}
          description={account.description}
          bankName={account.bankName}
          accountNum={account.accountNum}
        />
      ))}
    </div>
  );
};

export default accountList;
