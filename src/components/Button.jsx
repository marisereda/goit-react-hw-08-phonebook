import PropTypes from 'prop-types';
import { Button as ButtonChakra } from '@chakra-ui/react';

export const Button = ({ type, children, isLoading, loadingText }) => {
  return (
    <ButtonChakra
      type={type}
      isLoading={isLoading}
      loadingText={loadingText}
      colorScheme="accent"
      bg="accent.400"
      fontWeight="bold"
      minW="10rem"
    >
      {children}
    </ButtonChakra>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadingText: PropTypes.string.isRequired,
};
