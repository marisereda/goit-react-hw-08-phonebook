import { Box, Text, Icon, Link, Flex } from '@chakra-ui/react';
import { BsLinkedin, BsTelegram, BsGithub } from 'react-icons/bs';

const links = [
  {
    icon: BsLinkedin,
    href: 'https://www.linkedin.com/in/maryna-sereda/',
  },
  {
    icon: BsTelegram,
    href: 'https://t.me/MarynaSereda',
  },
  {
    icon: BsGithub,
    href: 'https://github.com/marisereda?tab=repositories',
  },
];

export const Footer = () => {
  return (
    <Box
      as="footer"
      px="10"
      py="6"
      textAlign="center"
      bg="brand.600"
      color="white"
    >
      <Flex justify="center" align="center" gap="5" marginBottom="2">
        {links.map(link => (
          <Link href={link.href} target="_blank" key={link.icon}>
            <Icon as={link.icon} color="white" boxSize="6" mr="auto" />
          </Link>
        ))}
      </Flex>
      <Text fontWeight="bold">Copyright &copy; 2023 Maryna Sereda</Text>
    </Box>
  );
};
