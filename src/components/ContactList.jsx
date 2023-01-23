import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { VStack } from '@chakra-ui/react';

import { Contact } from 'components/Contact';
import { Filter } from 'components/Filter';
import { HeadingSection } from 'components/HeadingSection';
import { selectContacts } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';
import { selectors } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectors.filter);
  const dispatch = useDispatch();

  // --------------------------------
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // --------------------------------
  const getFilteredContacts = () => {
    return filterValue
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : contacts;
  };

  // --------------------------------
  return (
    <VStack
      as="section"
      justify="start"
      align="center"
      flexGrow="1"
      spacing="6"
      px="16"
      py="10"
      bg="bg.50"
    >
      <HeadingSection>Contacts</HeadingSection>
      <Filter />
      <VStack as="ul" alignItems="stretch" alignSelf="stretch">
        {getFilteredContacts().map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </VStack>
    </VStack>
  );
};
