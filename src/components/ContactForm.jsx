import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ImUser } from 'react-icons/im';
import { PhoneIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, VStack } from '@chakra-ui/react';

import { HeadingSection } from 'components/HeadingSection';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { FormLabel } from 'components/FormLabel';
import { selectors } from 'redux/selectors';

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

// ---------------- Component ContactForm function ----------------

export const ContactForm = ({ saveContact }) => {
  const addContactIsLoading = useSelector(selectors.addContactIsLoading);

  // ---------------- Handle Submit ----------------
  const handleSubmit = (values, { resetForm }) => {
    saveContact({
      name: values.name.trim(),
      number: values.number.trim(),
    });

    resetForm();
  };

  // ---------------- Return ----------------
  return (
    <VStack
      as="section"
      py="10"
      px="16"
      bg="bg.100"
      align="stretch"
      justify="center"
      spacing={6}
    >
      <HeadingSection>Phonebook</HeadingSection>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} mx="auto" maxW="sm">
              <FormControl isInvalid={errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  type="text"
                  icon={<Icon as={ImUser} color="brand.600" boxSize="6" />}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.number}>
                <FormLabel>Number</FormLabel>
                <Input
                  name="number"
                  type="tel"
                  icon={<PhoneIcon color="brand.600" boxSize="5" />}
                />
                <FormErrorMessage>{errors.number}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                isLoading={addContactIsLoading}
                loadingText="Adding"
              >
                Add contact
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </VStack>
  );
};
