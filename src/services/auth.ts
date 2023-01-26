import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
import type { APILoginDataInterface } from '../lib/interface/auth';

export const setToken = ({ j_token }: { j_token: string }): void => {
  const copherAccessToken = CryptoJS.AES.encrypt(JSON.stringify(j_token), 'j_token');
  //   const rememberMe = getRememberMe();
  Cookies.set('j_token', copherAccessToken.toString(), {
    // expires: rememberMe ? 30 : 1,
    expires: 1,
  });
};

export const getToken = (): string | null => {
  const sessi = Cookies.get('j_token');
  if (!sessi) return null;
  const bytes = CryptoJS.AES.decrypt(sessi, 'j_token');
  try {
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (err) {
    console.log('error', err);
    return null;
  }
};

export const setUserInfo = ({ user_data }: { user_data: APILoginDataInterface }): void => {
  const cipherUserInfo = CryptoJS.AES.encrypt(JSON.stringify(user_data), 'user_info');
  //   const rememberMe = getRememberMe();
  Cookies.set('user_info', cipherUserInfo.toString(), {
    // expires: rememberMe ? 30 : 1,
    expires: 1,
  });
};

export const getUserInfo = (): APILoginDataInterface | null => {
  const sessi = Cookies.get('user_info');
  if (!sessi) return null;
  const bytes = CryptoJS.AES.decrypt(sessi, 'user_info');
  try {
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (err) {
    console.log('error', err);
    return null;
  }
};

// export const setRememberMe = (data) => {
//   localStorage.setItem("remember_me", JSON.stringify(data));
// };

// export const getRememberMe = () => {
//   return JSON.parse(localStorage.getItem("remember_me"));
// };

// export const setLocalStorage = (name, data) => {
//   localStorage.setItem(name, JSON.stringify(data));
// };

// export const getLocalStorageData = (name) => {
//   return JSON.parse(localStorage.getItem(name));
// };

// export const removeLocalStorage = (name) => {
//   localStorage.removeItem(name);
// };

export const logout = () => {
  //   setRememberMe(false);
  Cookies.remove('user_info');
  Cookies.remove('j_token');
  Cookies.remove('refresh');
  localStorage.removeItem('user_info');
  localStorage.removeItem('j_token');
  localStorage.removeItem('refresh');
};
