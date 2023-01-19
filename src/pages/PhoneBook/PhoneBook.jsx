import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { theme } from 'constants/theme';

const PhoneBook = () => {
  return (
    <div>
      <Section title="Phonebook" bgColor={theme.colors.bgLight}>
        <ContactForm />
      </Section>
      <Section title="Contacts" bgColor={theme.colors.bgPrimary}>
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default PhoneBook;
