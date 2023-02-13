import { Label, Input, TitleFilter} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/contactsSelectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

    const onChangeFilter = evt => {
    dispatch(filter(evt.currentTarget.value.trim()));
  }
    return (
        <Label htmlFor="" value={filterName}>
            <TitleFilter>Find contacts by name</TitleFilter>
            <Input type="text" onChange={onChangeFilter} placeholder="Enter search name" />
        </Label>
    );
}

export default Filter;