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
  return response.data;
};

// ---------------  Log in User  -----------------
export const logInUser = async user => {
  const response = await axios.post('/users/login', user);
  return response.data;
};

// ---------------  Log out User  -----------------
export const logOutUser = async user => {
  const response = await axios.post('/users/logout');
  return response.data;
};

// ---------------  get contacts  -----------------
export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

// ---------------  update contact  -----------------
export const patchContact = async ({ id, name, number }) => {
  const response = await axios.patch(`/contacts/${id}`, { name, number });
  return response.data;
};

// ---------------  add contact  -----------------
export const postContact = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
};

// ---------------  delete contact  -----------------
export const removeContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
