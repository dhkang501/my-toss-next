'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import BankLogo from './elements/bankLogo';
import { useRecoilState } from 'recoil';
import { sendAccountState, giveAccountState } from '@/app/atoms';

interface AccountCardProps {
  amount: string;
  description: string;
  buttonText?: string;
  bankName: string;
  accountNum: string;
}

const AccountCard: React.FC<AccountCardProps> = ({
  amount,
  description,
  buttonText,
  bankName,
  accountNum,
}) => {
  const [currentPath, setCurrentPath] = useState('');
  const [sendAccount, setSendAccount] = useRecoilState(sendAccountState);
  const [giveAccount, setGiveAccount] = useRecoilState(giveAccountState);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const handleClick = () => {
    if (currentPath === '/') {
      //돈 보낼 계좌 description(통장별명), amount(잔액)
      setSendAccount({ amount, description });
      router.push('/accountList');
    } else if (currentPath === '/accountList') {
      //돈 받을 계좌 bankName, accountNum, description(통장별명)
      setGiveAccount({ description, bankName, accountNum });
      router.push('/accountMoneyEnter');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-between items-center p-1 cursor-pointer"
    >
      <div className="flex items-center">
        <BankLogo></BankLogo>
        <div className="ml-3">
          <div className="">{amount}</div>
          {currentPath === '/' ? (
            <div className="text-xs text-gray-400">{description}</div>
          ) : (
            <div className="text-xs text-gray-400">
              {bankName} {accountNum}
            </div>
          )}
        </div>
      </div>
      {buttonText && (
        <div className="w-12 h-5 bg-slate-500 rounded-md text-center text-sm">
          {buttonText}
        </div>
      )}
    </div>
  );
};

export default AccountCard;
