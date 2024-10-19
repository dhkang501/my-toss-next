'use client';
import React, { useEffect, useState } from 'react';
import { fetchCoins } from '@/api';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineGlobal } from 'react-icons/ai';
import BoxLayout from '@/components/BoxLayout';
import AccountCard from '@/components/AccountCard';
import { useRecoilState } from 'recoil';
import { coinsState } from '../atoms';

//가데이터
const accountData = [
  {
    id: 1,
    bankName: '토스뱅크',
    amount: '200,000원',
    description: '토스뱅크 외화통장',
    buttonText: '송금',
    href: '/sendmoney',
    // icon: <AiOutlineGlobal size={20} />
  },
  {
    id: 2,
    bankName: '신한은행',
    amount: '100,000,000원',
    description: '신한은행 저축통장',
    buttonText: '송금',
    href: '/sendmoney',
    // icon: <AiOutlineGlobal size={20} />
  },
  {
    id: 3,
    bankName: '증권',
    amount: '2,900,100원',
    description: '토스뱅크 외화통장',
    buttonText: '송금',
    href: '/sendmoney',
    // icon: <AiOutlineGlobal size={20} />
  },
];

const summaryData = [
  {
    id: 1,
    amount: '732,353원',
    description: '9월에 쓴 돈',
    buttonText: '내역',
    href: '/sendmoney',
    // icon: AiOutlineGlobal,
  },
  {
    id: 2,
    amount: '332,551원',
    description: '9월 25일 낼 카드값',
    href: '/sendmoney',
    // icon: AiOutlineGlobal,
  },
];

const Home = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const coinsData = await fetchCoins();
  //     console.log(coinsData);
  //   };
  //   fetchData();
  // }, []);

  const [coins, setCoins] = useRecoilState(coinsState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCoins();
        setCoins(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
    };

    fetchData();
  }, []);

  // // api 호출
  // try {
  //   const coinsData = await fetchCoins();
  //   console.log('Fetched coins data:', coinsData);
  // } catch (error) {
  //   console.error('Error fetching coins:', error);
  // }

  return (
    <div className="m-2">
      {/* {coins.map(coin) => (
        <div>
          {coin.}
        </div>
      )} */}
      {/* 첫 번째 박스 */}
      <BoxLayout>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">토스뱅크</span>
          <IoIosArrowForward size={20} />
        </div>
      </BoxLayout>

      {/* 두 번째 박스 */}
      <BoxLayout>
        {accountData.map((account) => (
          <AccountCard
            key={account.id}
            amount={account.amount}
            description={account.description}
            buttonText={account.buttonText}
            href={account.href}
          />
        ))}
        <div className="w-full h-px bg-gray-400 my-3"></div>
        <div className="flex justify-center items-center">
          <div> 내 계좌 · 대출 · 증권 · 포인트 보기 </div>
          <IoIosArrowForward size={18} />
        </div>
      </BoxLayout>

      {/* 세 번째 박스 */}
      <BoxLayout>
        {summaryData.map((summary) => (
          <AccountCard
            key={summary.id}
            amount={summary.amount}
            description={summary.description}
            buttonText={summary.buttonText}
            href={summary.href}
          />
        ))}
      </BoxLayout>
      <div>
        {coins.map((coin, index) => (
          <div key={index}>{coin.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
