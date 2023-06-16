import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

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
  const response = await axios.get('/users/logout');
  return response.data;
};

// ---------------  get contacts  -----------------
export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data.data;
};

// ---------------  update contact  -----------------
export const patchContact = async ({ id, name, phone }) => {
  const response = await axios.put(`/contacts/${id}`, { name, phone });
  return response.data.data;
};

// ---------------  add contact  -----------------
export const postContact = async ({ name, phone }) => {
  const response = await axios.post('/contacts', { name, phone: phone });
  return response.data.data;
};

// ---------------  delete contact  -----------------
export const removeContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data.data;
};
