import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './filter/Filter';
import style from './style.module.css';

function App() {
  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}

export { App };