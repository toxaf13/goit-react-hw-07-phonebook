import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/phoneBook';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={style.label}>
      Find contacts by name
      <input
        className={style.filterInput}
        type="text"
        name="filter"
        onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
      />
    </label>
  );
};

export default Filter;