import React, { useEffect, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import Layout from 'components/Layout';

// import PhoneBook from 'pages/PhoneBook';
// import Home from 'pages/Home';
// import Register from 'pages/Register';
// import LogIn from 'pages/LogIn';

import { selectors } from 'redux/selectors';
import { setAuthHeader, clearAuthHeader } from 'utils/phonebookAPI';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const LogIn = lazy(() => import('pages/LogIn'));
const PhoneBook = lazy(() => import('pages/PhoneBook'));

export const App = () => {
  const token = useSelector(selectors.token);
  const navigate = useNavigate();
  const location = useLocation();

  console.log('🚀 ~ App ~ token', token);

  useEffect(() => {
    if (token) {
      console.log('User is loged in');
      setAuthHeader(token);
      navigate('/contacts', { replace: true });
    } else {
      clearAuthHeader();
      const path = location.pathname;
      if (path === '/contacts') {
        navigate('/', { replace: true });
      }
    }
  }, [location.pathname, navigate, token]);

  return (
    <Box
      display="flex"
      // flexWrap="wrap"
      // flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      padding={6}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={Register} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={LogIn} />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/" component={PhoneBook} />}
          />
        </Route>
      </Routes>

      <GlobalStyle />
      <ToastContainer />
    </Box>
  );
};

/* <UserMenu />
<Section title="Phonebook" bgColor={theme.colors.bgLight}>
  <ContactForm />
</Section>

<Section title="Contacts" bgColor={theme.colors.bgPrimary}>
  <Filter />
  <ContactList />
</Section>

{/* <Section title="Welcome to Phonebook!" bgColor={theme.colors.bgLight}> */

/* <Home />; */

/* </Section> */

/* <Section
  title="Enter data for regestration, please"
  bgColor={theme.colors.bgPrimary}
>
  <Register />
</Section>

<Section title="Enter login data, please" bgColor={theme.colors.bgLight}>
  <LogIn />
</Section>

<Footer /> */
