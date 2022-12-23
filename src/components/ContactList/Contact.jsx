import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import style from './ContactList.module.css';

export default  function Contact({ id, name, number }) {
   const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
   return (
          <>
           <span className={style.item}>
             {name}: {number}
            </span>
             <button
               className={style.deleteBtn}
               type="submit"
               name={name}
               disabled={isDeleting}
               onClick={() => deleteContact(id)}
            >
               {isDeleting ? 'Deleting ...' : 'Delete'}
             </button>
          </>
   );
}

Contact.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
 };