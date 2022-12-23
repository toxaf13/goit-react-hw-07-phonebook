import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './filter/Filter';
import style from './style.module.css';
import { useState } from 'react';

export default function App() {
const [filter, setFilter] = useState('');

const onChange = e => {
   setFilter(e);
};

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Section title="Contacts">
        <Filter filter={filter} onChange={onChange} />
         <ContactList filter={filter} />
      </Section>
    </div>
  );
}
