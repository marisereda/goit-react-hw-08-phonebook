import { VStack, Spinner } from '@chakra-ui/react';

const SuspenedPage = () => {
  return (
    <VStack
      as="main"
      justify="start"
      align="stretch"
      flexGrow="1"
      spacing="10"
      px="16"
      py="10"
      bg="bg.50"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="brand.600"
        size="xl"
        margin="auto"
      />
    </VStack>
  );
};

export default SuspenedPage;
