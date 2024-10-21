import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.31.212:8080/api',
  // header: {
  // 	Authrization: '123',
  // },
});

function fetchCoins() {
  return instance.get('/boards');
}

//토스 로그인한 상태
function fetchAccountId() {
  return instance.get('/accounts?userId=1');
}

export { fetchCoins, fetchAccountId };

// const instance = axios.create({
//   baseURL: 'https://api.coinpaprika.com/v1',
//   // headers: {
//   //   Authorization: '123',
//   // },
// });

// export async function fetchCoins() {
//   try {
//     const response = await instance.get('/coins');
//     return response.data;
//   } catch (error) {
//     console.error('코인 데이터를 가져오는 중 오류 발생:', error);
//     throw error;
//   }
// }
