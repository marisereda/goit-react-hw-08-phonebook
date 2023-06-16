import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { VStack } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Dialog } from 'components/Dialog';
import { selectContacts } from 'redux/contactsSlice';
import { selectors } from 'redux/selectors';
import { addContact, updateContact } from 'redux/operations';
import { useMyToast } from 'hooks/useMyToast';
import { clearAuthHeader } from 'utils/phonebookAPI';
import { clearState } from 'redux/userSlice';

const PhoneBook = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectors.errorContacts);

  const dispatch = useDispatch();
  const toast = useMyToast();
  const [addingContact, setAddingContact] = useState({
    id: '',
    name: '',
    phone: '',
  });
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (error === 'Request failed with status code 401') {
      clearAuthHeader();
      dispatch(clearState);
    }
  }, [dispatch, error]);

  //---------------- Save Contact function ----------------
  const saveContact = ({ name, phone }) => {
    const seekingName = name.toLowerCase();
    const foundContact = contacts.find(
      contact => contact.name.toLowerCase().trim() === seekingName
    );

    //  ==== there is no contact in contacts -> add contact
    if (!foundContact) {
      dispatch(addContact({ name, phone }));
      return;
    }

    //  ==== there is contact in contacts -> show info & do nothing
    if (foundContact.phone === phone.trim()) {
      toast({
        description: `${name} is already in contacts!`,
        status: 'info',
      });
      return;
    }

    //  ==== there is contact in contacts -> update contact? (show dialog)
    setAddingContact({ id: foundContact._id, name, phone });
    setShowDialog(true);
  };

  //---------------- onClose Dialog ----------------

  const onCloseDialog = isConfirmed => {
    setShowDialog(false);
    if (isConfirmed) {
      const { id, name, phone } = addingContact;
      dispatch(updateContact({ id, name, phone }));
    }
  };

  return (
    <VStack as="main" justify="start" align="stretch" spacing="0" flexGrow="1">
      <ContactForm saveContact={saveContact} />
      <ContactList />
      <Dialog
        name={addingContact.name}
        isOpen={showDialog}
        onClose={onCloseDialog}
      />
    </VStack>
  );
};

export default PhoneBook;
