import { Item, Button } from './ContactItem.styled'
// import { RotatingLines } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/thunk';

function ContactItem({ id, name, number}) {
    const dispatch = useDispatch();
    const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
    return (
        <Item key={id}>
            <p>
                {name}: {number} {' '}
            </p>
            <Button type="button" onClick={() => onDeleteContact(id)}>Delete
               {/* {onDeleteContact && <RotatingLines width="10" />}  Delete */}
            </Button>
        </Item>
    );
};

export default ContactItem;
