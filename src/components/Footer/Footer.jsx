import { Box } from 'components/Box';

export const Footer = () => {
  return (
    <Box
      minWidth="sectionBox"
      padding={5}
      color="textPrimary"
      bg="bgButton"
      boxShadow="primary"
      textAlign="center"
      as="footer"
    >
      <p>Copyright &copy; 2023 Maryna Sereda</p>
    </Box>
  );
};
