import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phoneBook';
import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.phoneBook.items);
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();

  return (
    <ul className={style.list}>
      {contacts
        .filter(el => el.name.toLowerCase().includes(filter))
        .map(({ id, number, name }) => (
          <li className={style.item} key={id}>
            {name}: {number}
            <button
              className={style.deleteBtn}
              type="button"
              onClick={() => dispatch(deleteContact({ id }))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;