import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { selectContacts } from 'redux/contactsSlice';
import { Box } from 'components/Box';
import { ErrorText, InputTitle, Input } from './ContactForm.styled';
import { Button } from 'components/Button';
import { addContact, updateContact } from 'redux/operations';
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  number: '',
};

let schema = yup.object().shape({
  name: yup.string().required('Contact name is required'),
  number: yup
    .string()
    .min(7, 'At least 7 digits is required')
    .max(12, 'At most 12 digits is required')
    .required('Phone number is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // --------------------------------
  const saveContact = ({ name, number }) => {
    const seekingName = name.toLowerCase().trim();
    const foundContact = contacts.find(
      contact => contact.name.toLowerCase().trim() === seekingName
    );

    if (foundContact) {
      console.log('🚀 ~ saveContact ~ foundContact', foundContact);
      if (foundContact.number === number.trim()) {
        return toast(`${name} is already in contacts`);
      } else {
        const updatedContact = {
          id: foundContact.id,
          name,
          number,
        };
        dispatch(updateContact(updatedContact));
        return toast(
          `${name} is already in contacts. The phone number has been updated.`
        );
      }
    }

    const newContact = {
      name: name.trim(),
      phone: number.trim(),
    };

    dispatch(addContact(newContact));
  };

  // --------------------------------
  const handleSubmit = (values, { resetForm }) => {
    saveContact({
      name: values.name,
      number: values.number,
    });

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gridGap={3}
          mb={4}
        >
          <InputTitle htmlFor="name">Name</InputTitle>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage
            name="name"
            component="div"
            render={message => <ErrorText>{message}</ErrorText>}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gridGap={3}
          mb={4}
        >
          <InputTitle htmlFor="number">Number</InputTitle>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage
            name="number"
            component="div"
            render={message => <ErrorText>{message}</ErrorText>}
          />
        </Box>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
    // <ToastContainer closeButton={CloseButton} />
  );
};
