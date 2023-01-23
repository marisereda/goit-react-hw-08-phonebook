import { Box, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      as="footer"
      px="10"
      py="8"
      textAlign="center"
      bg="brand.600"
      color="white"
    >
      <Text fontWeight="bold">Copyright &copy; 2023 Maryna Sereda</Text>
    </Box>
  );
};
