import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { GiNotebook } from 'react-icons/gi';
import { Box, Flex, Heading, Text, Button, Icon } from '@chakra-ui/react';

import { Link } from 'components/Link';
import { signOutUser } from 'redux/operations';
import { selectors } from 'redux/selectors';
import { clearErrors } from 'redux/userSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectors.email);
  const fetchingLogOut = useSelector(selectors.fetchingLogOut);

  const location = useLocation();
  const path = location.pathname;

  let isLogInNav = false;
  let isLogOutButton = false;
  let isTitle = false;

  switch (path) {
    case '/':
      isTitle = true;

      break;
    case '/register':
      isLogInNav = true;

      break;
    case '/login':
      isLogInNav = true;

      break;
    case '/contacts':
      isLogOutButton = true;

      break;
    default:
      break;
  }

  const handleClick = () => {
    dispatch(clearErrors());
    dispatch(signOutUser());
  };
  return (
    <Box
      as="header"
      px="10"
      py="8"
      bg="brand.600"
      color="white"
      fontWeight="bold"
    >
      {isTitle && (
        <Heading textAlign="center" fontSize="3xl">
          Phonebook
        </Heading>
      )}
      {isLogInNav && (
        <Flex justify="end" align="center" gap="4">
          <Icon as={GiNotebook} color="white" boxSize="10" mr="auto" />
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </Flex>
      )}
      {isLogOutButton && (
        <Flex justify="end" align="center" gap="4">
          <Icon as={GiNotebook} color="white" boxSize="10" mr="auto" />
          <Text fontSize="lg">{email}</Text>
          <Button
            type="button"
            onClick={handleClick}
            isLoading={fetchingLogOut}
            fontWeight="bold"
            border="2px solid white"
            color="white"
            variant="outline"
            _hover={{
              bg: 'accent.600',
              borderColor: 'accent.600',

              color: 'white',
            }}
          >
            Log out
          </Button>
        </Flex>
      )}
    </Box>
  );
};
