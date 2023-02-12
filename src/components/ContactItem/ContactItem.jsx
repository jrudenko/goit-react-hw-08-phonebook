import { Item, Button } from './ContactItem.styled'
import { RotatingLines } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

function ContactItem({ id, name, number}) {const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  
    return (
        <Item key={id}>
            <p>
                {name}: {number} {' '}
            </p>
            <Button type="button" onClick={() => deleteContact(id)}
        disabled={isDeleting}>
               {isDeleting && <RotatingLines width="10" />}  Delete
            </Button>
        </Item>
    );
};

export default ContactItem;
