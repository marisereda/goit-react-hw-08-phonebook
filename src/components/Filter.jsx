import { useSelector, useDispatch } from 'react-redux';
import { VStack, FormControl, Input } from '@chakra-ui/react';
import { FormLabel } from 'components/FormLabel';
import { changeFilter } from 'redux/filterSlice';
import { selectors } from 'redux/selectors';

export const Filter = () => {
  const filterValue = useSelector(selectors.filter);
  const dispatch = useDispatch();

  // ---------------- handleFilterChange ----------------
  const handleFilterChange = e => {
    const currentValue = e.target.value.toLowerCase().trim();

    dispatch(changeFilter(currentValue));
  };

  // --------------------------------
  return (
    <VStack align="start" minW="sm">
      <FormControl>
        <FormLabel>Find contacts by name</FormLabel>
        <Input
          name="filter"
          onChange={handleFilterChange}
          value={filterValue}
          fontSize="lg"
          fontWeight="bold"
          color="gray.600"
          variant="outline"
          bg="bg.50"
          borderColor="gray.400"
          focusBorderColor="brand.600"
        />
      </FormControl>
    </VStack>
  );
};
