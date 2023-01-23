import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { VStack } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Dialog } from 'components/Dialog';
import { selectContacts } from 'redux/contactsSlice';
import { addContact, updateContact } from 'redux/operations';
import { useMyToast } from 'hooks/useMyToast';

const PhoneBook = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const toast = useMyToast();
  const [addingContact, setAddingContact] = useState({
    id: '',
    name: '',
    number: '',
  });
  const [showDialog, setShowDialog] = useState(false);

  //---------------- Save Contact function ----------------
  const saveContact = ({ name, number }) => {
    const seekingName = name.toLowerCase();
    const foundContact = contacts.find(
      contact => contact.name.toLowerCase().trim() === seekingName
    );

    //  ==== there is no contact in contacts -> add contact
    if (!foundContact) {
      dispatch(addContact({ name, number }));
      return;
    }

    //  ==== there is contact in contacts -> show info & do nothing
    if (foundContact.number === number.trim()) {
      toast({
        description: `${name} is already in contacts!`,
        status: 'info',
      });
      return;
    }

    //  ==== there is contact in contacts -> update contact? (show dialog)
    setAddingContact({ id: foundContact.id, name, number });
    setShowDialog(true);
  };

  //---------------- onClose Dialog ----------------

  const onCloseDialog = isConfirmed => {
    setShowDialog(false);
    if (isConfirmed) {
      const { id, name, number } = addingContact;
      dispatch(updateContact({ id, name, number }));
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
