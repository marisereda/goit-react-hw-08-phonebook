import React from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { theme } from 'constants';

export const App = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      padding={6}
    >
      <Section title="Phonebook" bgColor={theme.colors.bgLight}>
        <ContactForm />
      </Section>

      <Section title="Contacts" bgColor={theme.colors.bgPrimary}>
        <Filter />
        <ContactList />
      </Section>

      <GlobalStyle />
    </Box>
  );
};
