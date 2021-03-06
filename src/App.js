import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/contacts-operations';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { getContacts, getIsLoading } from './redux/contacts/contacts-selectors';
import Loader from 'react-loader-spinner';
import Section from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';


export default function App() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      {isLoading ? (
        <Loader type="Rings" color="#00BFFF" height={80} width={80} />
      ) : null}

      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      ) : null}
      </div> 
  )
}
