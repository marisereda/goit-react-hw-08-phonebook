import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErrorText, InputTitle, Input } from 'components/ContactForm';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/operations';
import { selectors } from 'redux/selectors';
import { clearErrors } from 'redux/userSlice';
import { useEffect } from 'react';
import { Section } from 'components/Section';
import { theme } from 'constants/theme';
import { toast } from 'react-toastify';

// import PhoneBook from 'pages/PhoneBook';
// import { Box } from 'components/Box';

const initialValues = {
  name: '',
  email: '',
  password: '',
  repeatedPassword: '',
};

let schema = yup.object().shape({
  name: yup.string().required('Contact name is required'),
  email: yup.string().required('E-mail is required'),
  password: yup
    .string()
    .min(7, 'At least 7 digits is required')
    .required('Password is required'),
  repeatedPassword: yup
    .string()
    .min(7, 'At least 7 digits is required')
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Repeat your password, please'),
});

const Register = () => {
  const dispatch = useDispatch();
  const errorRegister = useSelector(selectors.errorRegister);

  console.log('🚀 ~ RegisterForm ~ errorRegister', errorRegister);
  useEffect(() => {
    if (errorRegister === 'ERR_BAD_REQUEST') {
      toast('The user has been already registered! Please, Log in!');
    } else if (errorRegister === 'ERR_NETWORK') {
      toast('Network Error! Check Internet connection!');
    }

    dispatch(clearErrors());
  }, [dispatch, errorRegister]);

  const handleSubmit = (
    { name, email, password, repeatedPassword },
    { resetForm }
  ) => {
    // if (password !== repeatedPassword) {

    //   return toast('Repeated password doesn`t match the password!');
    // }
    dispatch(clearErrors());
    dispatch(registerUser({ name, email, password }));
    resetForm();
  };

  return (
    <Section
      title="Enter data for regestration, please"
      bgColor={theme.colors.bgLight}
    >
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
            <Input type="text" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              render={message => <ErrorText>{message}</ErrorText>}
            />
            {/* --------------------------- */}
            <InputTitle htmlFor="name">E-mail</InputTitle>
            <Input type="text" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              render={message => <ErrorText>{message}</ErrorText>}
            />
            {/* --------------------------- */}
            <InputTitle htmlFor="name">Password</InputTitle>
            <Input type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              render={message => <ErrorText>{message}</ErrorText>}
            />

            {/* --------------------------- */}
            <InputTitle htmlFor="name">Repeate password</InputTitle>
            <Input type="password" name="repeatedPassword" />
            <ErrorMessage
              name="repeatedPassword"
              component="div"
              render={message => <ErrorText>{message}</ErrorText>}
            />
          </Box>
          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </Section>
  );
};

export default Register;
