import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErrorText, InputTitle, Input } from 'components/ContactForm';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from 'redux/operations';
import { selectors } from 'redux/selectors';
import { clearErrors } from 'redux/userSlice';
import { useEffect } from 'react';
import { Section } from 'components/Section';
import { theme } from 'constants/theme';
import { toast } from 'react-toastify';

// import { useEffect } from 'react';

const initialValues = {
  email: '',
  password: '',
};

let schema = yup.object().shape({
  email: yup.string().required('E-mail is required'),
  password: yup.string().required('Password is required'),
});

const LogIn = () => {
  const dispatch = useDispatch();
  const errorLogIn = useSelector(selectors.errorLogIn);
  console.log('🚀 ~ LogInForm ~ errorLogIn', errorLogIn);

  useEffect(() => {
    if (errorLogIn === 'ERR_BAD_REQUEST') {
      toast('Email or password is incorrect!');
    } else if (errorLogIn === 'ERR_NETWORK') {
      toast('Network Error! Check Internet connection!');
    }
    dispatch(clearErrors());
  }, [dispatch, errorLogIn]);

  const handleSubmit = ({ email, password }, { resetForm }) => {
    console.log('🚀 ~ handleSumbmit ~ values.email', email);
    console.log('🚀 ~ handleSumbmit ~ values.password', password);
    dispatch(clearErrors());
    dispatch(signInUser({ email, password }));
    resetForm();
  };

  return (
    <Section title="Enter login data, please" bgColor={theme.colors.bgLight}>
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
          </Box>
          <Button type="submit">Log in</Button>
        </Form>
      </Formik>
    </Section>
  );
};

export default LogIn;
