import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from 'redux/operations';
import { selectors } from 'redux/selectors';
import { LogOutButton, Header } from './UserMenu.styled';
import { clearErrors } from 'redux/userSlice';
import { useLocation } from 'react-router-dom';
import { Link } from 'components/Link';
import { Box } from 'components/Box';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectors.email);
  const location = useLocation();
  const path = location.pathname;
  console.log('🚀 ~ UserMenu ~ path', path);

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
    <Header>
      {isTitle && <h2>Phonebook</h2>}
      {isLogInNav && (
        <Box
          display="flex"
          justifyContent="end"
          alignItems="center"
          gridGap={4}
          as="div"
        >
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </Box>
      )}
      {isLogOutButton && (
        <Box
          display="flex"
          justifyContent="end"
          alignItems="center"
          gridGap={4}
          as="div"
        >
          <p>{email}</p>
          <LogOutButton type="button" onClick={handleClick}>
            Log out
          </LogOutButton>
        </Box>
      )}
    </Header>
  );
};
