import { GiNotebook } from 'react-icons/gi';
import { VStack, Icon, Flex } from '@chakra-ui/react';
import { HeadingSection } from 'components/HeadingSection';
import { NavButton } from 'components/NavButton';

const Home = () => {
  return (
    <VStack
      as="main"
      justify="center"
      align="center"
      spacing="16"
      flexGrow="1"
      p="16"
      bg="bg.100"
    >
      <HeadingSection fontSize="5xl">Welcome</HeadingSection>
      <Icon as={GiNotebook} color="brand.600" boxSize="60" />
      <Flex gap={5} as="div">
        <NavButton to="register">Register</NavButton>
        <NavButton to="login">Log in</NavButton>
      </Flex>
    </VStack>
  );
};

export default Home;
