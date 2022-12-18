import PropTypes from 'prop-types';
import style from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={style.section}>
    <h2 className={style.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;