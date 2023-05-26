import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { HeadingSection } from 'components/HeadingSection';
import { signInUser } from 'redux/operations';
import { selectors } from 'redux/selectors';
import { clearErrors } from 'redux/userSlice';
import { useMyToast } from 'hooks/useMyToast';
// import { useSelector } from 'react-redux';

// const initialValues = {
//   email: '',
//   password: '',
// };

let schema = yup.object().shape({
  email: yup.string().required('E-mail is required'),
  password: yup.string().required('Password is required'),
});

const LogIn = () => {
  // const location = useLocation();
  const email = useSelector(selectors.email);
  // console.log('🚧 location:', location);

  const dispatch = useDispatch();
  const errorLogIn = useSelector(selectors.errorLogIn);
  const fetchingLogIn = useSelector(selectors.fetchingLogIn);
  const toast = useMyToast();

  const initialValues = {
    email: email ?? '',
    password: '',
  };

  // --------------- Errors handle  ---------------
  useEffect(() => {
    if (errorLogIn === 'ERR_BAD_REQUEST') {
      toast({
        description: 'Email or password is incorrect!',
        status: 'error',
      });
    } else if (errorLogIn === 'ERR_NETWORK') {
      toast({
        description: 'Network Error! Check Internet connection!',
        status: 'error',
      });
    }
    dispatch(clearErrors());
  }, [dispatch, errorLogIn, toast]);

  // --------------- Submit handle ---------------
  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(clearErrors());
    dispatch(signInUser({ email, password }));
    resetForm();
  };

  // --------------- return ---------------
  return (
    <VStack
      as="main"
      justify="start"
      align="stretch"
      spacing="6"
      flexGrow="1"
      px="16"
      py="10"
      bg="bg.50"
    >
      <HeadingSection>Enter login data, please.</HeadingSection>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <VStack spacing={6} mx="auto" maxW="sm">
                {/* Email Input */}
                <FormControl isInvalid={errors.email}>
                  <FormLabel color="brand.600" fontWeight="bold">
                    E-mail
                  </FormLabel>
                  <Input
                    name="email"
                    type="text"
                    icon={<EmailIcon color="brand.600" boxSize="5" />}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                {/* Password Input */}
                <FormControl isInvalid={errors.password}>
                  <FormLabel color="brand.600" fontWeight="bold">
                    Password
                  </FormLabel>
                  <Input
                    name="password"
                    type="password"
                    icon={<LockIcon color="brand.600" boxSize="5" />}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  isLoading={fetchingLogIn}
                  loadingText="Logging"
                >
                  Log in
                </Button>
              </VStack>
            </form>
          );
        }}
      </Formik>
    </VStack>
  );
};

export default LogIn;
