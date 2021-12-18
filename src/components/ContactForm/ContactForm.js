import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contacts-actions';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state);

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !number) {
      alert('Вы не ввели все контактные данные');
      return;
    }
    if (Number.isNaN(+number)) {
      alert('Телефонный номер должен содержать только цифры');
      return;
    }
    
    const onAddContacts = (name, number) => dispatch(addContacts(name, number));
    const isAdded = name =>
      contacts.map(contact => contact.name).includes(name);

    if (isAdded(name)) {
      return alert(`${name} Уже добавлен`);
    } else {
      onAddContacts(name, number);
    }

    setName('');
    setNumber('');
  };
  

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }

  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Ivan Ivanov"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
        />
      </label>
      <label className={s.label}>
        Number
        <input className={s.input}
          name="number"
          type="tel"
          value={number}
          onChange={handleInputChange}
          placeholder="1111111"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
          
        />
      </label>
      <button type="submit" className={s.btn}>Add contact</button>
    </form>
  );
};





export default ContactForm