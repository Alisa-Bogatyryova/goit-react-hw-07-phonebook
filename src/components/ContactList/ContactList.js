import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts-actions';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList() {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  const onDeleteBtn = id => dispatch(deleteContacts(id));

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = filteredContacts(contacts, filter);

  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p className={s.nameText}>
              {name}: <span>{number}</span>
            </p>
            <button type="button" onClick={e => onDeleteBtn(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  onDeleteBtn: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

export default ContactList;