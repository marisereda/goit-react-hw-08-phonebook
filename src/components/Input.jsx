import {
  Input as InputChakra,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

export const Input = ({ name = '', type = 'text', icon }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={icon} />
      <Field
        as={InputChakra}
        name={name}
        type={type}
        paddingLeft="9"
        fontSize="lg"
        fontWeight="bold"
        color="gray.600"
        variant="outline"
        bg="bg.50"
        borderColor="gray.400"
        focusBorderColor="brand.600"
      />
    </InputGroup>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
};
