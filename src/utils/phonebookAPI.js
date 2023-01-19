// import { endPointAPI } from 'constants/constantsAPI';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com/';

axios.defaults.baseURL = BASE_URL;

export function setAuthHeader(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function clearAuthHeader() {
  axios.defaults.headers.common['Authorization'] = '';
}

// ---------------- Register User ----------------
export const createUser = async user => {
  const response = await axios.post('/users/signup', user);
  console.log('🚀 ~ createUser ~ response', response);

  return response.data;
};

// ---------------  Log in User  -----------------
export const logInUser = async user => {
  const response = await axios.post('/users/login', user);
  console.log('🚀 ~ logInUser ~ response', response);
  return response.data;
};

// ---------------  Log out User  -----------------
export const logOutUser = async user => {
  const response = await axios.post('/users/logout');
  console.log('🚀 ~ logOutUser ~ response', response);
  return response.data;
};

// ---------------  get contacts  -----------------
export const getContacts = async () => {
  const response = await axios.get('/contacts');
  console.log('🚀 ~ getContacts ~ response', response);

  return response.data;
};

// ---------------  update contact  -----------------
export const patchContact = async ({ id, name, number }) => {
  const response = await axios.patch(`/contacts/${id}`, { name, number });
  console.log('🚀 ~ getContacts ~ response', response);

  return response.data;
};

// export const getContacts = async () => {
//   const response = await fetch(endPointAPI);
//   const responsedData = await response.json();
//   return responsedData;
// };

// ---------------  add contact  -----------------
export const postContact = async ({ name, phone }) => {
  const response = await axios.post('/contacts', { name, number: phone });
  console.log('🚀 ~ postContacts ~ response', response);

  return response.data;
};

// export const postContact = async ({ name, phone }) => {
//   const response = await fetch(endPointAPI, {
//     method: 'POST',
//     body: JSON.stringify({
//       name,
//       phone,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   const responsedData = await response.json();
//   return responsedData;
// };

// ---------------  delete contact  -----------------
export const removeContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  console.log('🚀 ~ postContacts ~ response', response);

  return response.data;
};

// export const removeContact = async id => {
//   const response = await fetch(`${endPointAPI}/${id}`, {
//     method: 'DELETE',
//   });
//   const responsedData = await response.json();
//   return responsedData;
// };
