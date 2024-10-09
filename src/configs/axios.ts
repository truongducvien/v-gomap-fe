import { getLS } from '@/utils';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30 * 1000, // 30s
});

axiosInstance.interceptors.request.use((config) => {
  const token = getLS('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// TODO: Handle refresh token:

// let tokenRefreshing = false;

// const waitRefreshToken = (retry = 30) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (tokenRefreshing && retry > 0) {
//         resolve(waitRefreshToken(retry - 1));
//       } else {
//         resolve(true);
//       }
//     }, 1000);
//   });
// };

// localAxios.interceptors.request.use(async (value) => {
//   if (tokenRefreshing) {
//     await waitRefreshToken();
//   }
//   const clientId = useStore.getState().clientId;
//   if (value.headers && clientId) {
//     value.headers.client = clientId;
//   }
//   return value;
// });

// localAxios.interceptors.response.use(
//   (value) => value,
//   async (error) => {
//     const originalConfig = error.config;
//     if (error.response?.status === 401 && !tokenRefreshing) {
//       const refresh_token = JSON.parse(localStorage[LS_LOGIN_DATA]).refresh_token;
//       try {
//         tokenRefreshing = true;
//         const data = await refreshToken(refresh_token);
//         localAxios.defaults.headers.common.Authorization = `Bearer ${data?.bearer_token}`;
//         originalConfig.headers.Authorization = `Bearer ${data?.bearer_token}`;

//         const userInfo = JSON.parse(localStorage[LS_LOGIN_DATA]);
//         const newUserInfo = new LoginResponse({ ...userInfo, ...data });
//         localStorage[LS_LOGIN_DATA] = JSON.stringify(newUserInfo);
//         return localAxios(originalConfig);
//       } catch {
//         // Log out when refresh token api return error:
//         useStore.getState().setTriggerLogout(true);
//       } finally {
//         tokenRefreshing = false;
//       }
//     }

//     if (error.response?.status === 401 && tokenRefreshing) {
//       return localAxios(originalConfig);
//     }
//     return Promise.reject(error);
//   }
// );

export { axiosInstance };
