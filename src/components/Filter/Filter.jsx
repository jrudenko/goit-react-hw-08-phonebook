import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setQuery } from 'redux/contactsSlice';

const Filter = () => {

  const dispatch = useDispatch();

  const onChangeFilter = (query) => {
    dispatch(setQuery(query))
  }
    return (
        <Label htmlFor="">
            <p>Find contacts by name</p>
            <Input type="text" onChange={(e) => onChangeFilter(e.target.value)} placeholder="Enter search name" />
        </Label>
    );
}

export default Filter;