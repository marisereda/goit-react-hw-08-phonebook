import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectFilter } from 'redux/filterSlice';
import { InputTitle, Input } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  // --------------------------------
  const handleChangeFilter = e => {
    const currentValue = e.target.value.toLowerCase().trim();
    dispatch(changeFilter(currentValue));
  };

  // --------------------------------
  return (
    <div>
      <InputTitle htmlFor="filter">Find contacts by name</InputTitle>
      <Input
        name="filter"
        onChange={handleChangeFilter}
        value={filterValue}
      ></Input>
    </div>
  );
};
