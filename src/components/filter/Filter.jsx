import PropTypes from 'prop-types';
import style from './Filter.module.css';

export default function Filter({filter, onChange}) {

  return (
    <label className={style.label}>
      Find contacts by name
      <input
        className={style.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={e => onChange(e.target.value)}
        required
      />
    </label>
  );
};

Filter.propTypes = {
   filter: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
 };