import { atom } from 'recoil';

export const coinsState = atom({
  key: 'coinsState',
  default: [],
});

interface SendAccount {
  amount: string;
  description: string;
}

interface giveAccount {
  bankName: string;
  accountNum: string;
  description: string;
}

//보낼 계좌 정보
export const sendAccountState = atom<SendAccount>({
  key: 'sendAccountState',
  default: {
    amount: '',
    description: '',
  },
});

//받을 계좌 정보
export const giveAccountState = atom<giveAccount>({
  key: 'giveAccountState',
  default: {
    bankName: '',
    accountNum: '',
    description: '',
  },
});
