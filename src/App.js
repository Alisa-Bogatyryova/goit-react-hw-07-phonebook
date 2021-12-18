import { connect } from 'react-redux';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const App = ({contacts}) => {
  return (
    <Container>
        <ContactForm  />
          <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter />
        )}
        {contacts.length > 0 ? (
          <ContactList/>
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}
    </Container>
  );
};
const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);