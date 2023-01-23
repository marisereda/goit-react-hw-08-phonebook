import { useToast, Box } from '@chakra-ui/react';

export const useMyToast = () => {
  const toast = useToast({
    title: ``,
    position: 'top-right',
    duration: 5000,
    isClosable: true,
  });
  return ({ description, status }) => {
    toast({
      render: () => (
        <Box
          color="white"
          p={3}
          borderRadius="4"
          textAlign="center"
          bg={status === 'error' ? 'accent.500' : 'brand.500'}
        >
          {description}
        </Box>
      ),
    });
  };
};
