import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import { Flex, Text, IconButton, Spinner } from '@chakra-ui/react';
import { deleteContact } from 'redux/operations';
import { selectors } from 'redux/selectors';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const whoIsUpdating = useSelector(selectors.whoIsUpdating);

  return (
    <Flex align="center" gap="2" as="li">
      <PhoneIcon boxSize={5} color="accent.400" />
      <Text flexGrow="1" fontSize="xl" fontWeight="bold" color="gray.600">
        {name}:
      </Text>
      <Text fontSize="xl" color="gray.600">
        {phone}
      </Text>
      <IconButton
        name={id}
        type="button"
        aria-label="Remove contact"
        onClick={() => dispatch(deleteContact(id))}
        color="brand.600"
        bg="transparent"
        icon={
          whoIsUpdating.includes(id) ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="brand.600"
              size="md"
            />
          ) : (
            <DeleteIcon boxSize={6} />
          )
        }
      />
    </Flex>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
