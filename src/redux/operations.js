import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  clearAuthHeader,
  setAuthHeader,
  createUser,
  logInUser,
  logOutUser,
  getContacts,
  postContact,
  patchContact,
  removeContact,
} from 'utils/phonebookAPI';

// ---------------- Register User ----------------
export const registerUser = createAsyncThunk('user/create', async user => {
  const newUser = await createUser(user);
  setAuthHeader(newUser.token);
  return newUser;

  // try {
  //   const newUser = await createUser(user);
  //   setAuthHeader(newUser.token);
  //   return newUser;
  // } catch (error) {
  //   console.log('🚀 ~ error', error);
  //   const errorValue = thunkAPI.rejectWithValue(error.message);
  //   console.log('🚀 ~ errorValue', errorValue);
  //   return error;
  // }
});

// ---------------  Log in User  -----------------
export const signInUser = createAsyncThunk('user/logIn', async user => {
  const currentUser = await logInUser(user);
  setAuthHeader(currentUser.token);
  return currentUser;
  // try {
  //   const currentUser = await logInUser(user);
  //   setAuthHeader(currentUser.token);
  //   return currentUser;
  // } catch (error) {
  //   console.log('🚀 ~ error', error);

  //   const errorValue = thunkAPI.rejectWithValue(error.message);
  //   console.log('🚀 ~ errorValue', errorValue);

  //   return error;
  // }
});

// ---------------  Log out User  -----------------
export const signOutUser = createAsyncThunk('user/logOut', async () => {
  const currentUser = await logOutUser();
  clearAuthHeader();
  return currentUser;
  // try {
  //   const currentUser = await logOutUser();
  //   clearAuthHeader();
  //   return currentUser;
  // } catch (error) {
  //   const errorValue = thunkAPI.rejectWithValue(error.message);
  //   return error;
  // }
});

// --------------------------------
export const fetchContacts = createAsyncThunk('user/currentUser', async () => {
  const contacts = await getContacts();
  return contacts;
});

// --------------------------------
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const contact = await postContact(newContact);
    return contact;
  }
);

// --------------------------------
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async newContact => {
    const contact = await patchContact(newContact);
    return contact;
  }
);

// --------------------------------
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contact = await removeContact(id);
    return contact;
  }
);
