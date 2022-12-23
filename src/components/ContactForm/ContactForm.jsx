import { useState } from 'react';
import {  useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';
import style from './ContactForm.module.css';

export default function ContactForm() {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');

   const {data} = useGetContactsQuery();
   const [addContact] = useAddContactMutation();

  const onSubmit = e => {
   e.preventDefault();

    data.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : addContact({
          name: name,
          phone: number,
        });

    setName('');
    setNumber('');
  };


  const onChange = e => {
   const {name, value } = e.target;
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
    <form className={style.form} onSubmit={onSubmit}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
        />
      </label>
      <label className={style.label}>
        Number
        <input
          className={style.input}
          value={number}
          onChange={onChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={style.submit} type="submit">
        Add contact
      </button>
    </form>
  );
}
