import React, { useEffect, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import Layout from 'components/Layout';

import { selectors } from 'redux/selectors';
import { setAuthHeader, clearAuthHeader } from 'utils/phonebookAPI';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const LogIn = lazy(() => import('pages/LogIn'));
const PhoneBook = lazy(() => import('pages/PhoneBook'));

export const App = () => {
  const token = useSelector(selectors.token);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token) {
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
    <Box>
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
    </Box>
  );
};
