import { Heading } from '@chakra-ui/react';

export const HeadingSection = ({ children, ...props }) => {
  return (
    <Heading
      as="h2"
      fontSize="2xl"
      textAlign="center"
      color="gray.600"
      {...props}
    >
      {children}
    </Heading>
  );
};
