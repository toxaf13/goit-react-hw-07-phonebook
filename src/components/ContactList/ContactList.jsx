import { useGetContactsQuery } from 'redux/contactsApi';
import Contact from './Contact';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

export default function  ContactList  ({ filter }) {
   const { data } = useGetContactsQuery();

   const itemsFiltered = data?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (itemsFiltered){

      return (
         <ul className={style.list}>
           {itemsFiltered.map( ({id,name,phone}) => (
            <li key = {id}>
               <Contact id={id} name={name} number={phone}/>  
            </li>
             ))}
         </ul>
       );
    }  
};
ContactList.propTypes = {
   filter: PropTypes.string.isRequired,
 };