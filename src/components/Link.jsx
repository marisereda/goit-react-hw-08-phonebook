import { NavLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

export const Link = ({ to, children }) => {
  return (
    <ChakraLink
      to={to}
      as={NavLink}
      fontSize="lg"
      borderBottom="2px solid transparent"
      _activeLink={{ borderBottomColor: 'white' }}
      _hover={{ borderBottomColor: 'white' }}
    >
      {children}
    </ChakraLink>
  );
};
