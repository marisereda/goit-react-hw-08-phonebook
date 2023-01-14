import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, removeContact } from 'utils/contactsAPI';

// --------------------------------
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
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
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contact = await removeContact(id);
    return contact;
  }
);
