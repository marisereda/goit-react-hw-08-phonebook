import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ImCheckmark, ImBin } from 'react-icons/im';
import { Box } from 'components/Box';
import { theme } from 'constants';
import { Item, Button } from './Contact.styled';
import { deleteContact } from 'redux/operations';
import { LoaderSmall } from 'components/LoaderSmall';
import { selectors } from 'redux/selectors';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.isLoading);

  return (
    <Item>
      <Box display="flex" alignItems="center" gridGap={3} minWidth="nameBox">
        <ImCheckmark size={theme.sizes.iconS} />
        {name}:
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gridGap={3}
        minWidth="numberBox"
      >
        <span>{number}</span>
        <Button
          name={id}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
          aria-label="Remove contact"
        >
          {isLoading ? <LoaderSmall /> : <ImBin size={theme.sizes.iconM} />}
        </Button>
      </Box>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
