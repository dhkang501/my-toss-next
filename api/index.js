import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.59.92.128:8080',
  // header: {
  // 	Authrization: '123',
  // },
});

function fetchCoins() {
  return instance.get('/boards');
}

export { fetchCoins };

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
