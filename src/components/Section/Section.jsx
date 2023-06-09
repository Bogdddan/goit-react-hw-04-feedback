import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section ({ title , children }) {
    return (
      <div className={css.sectionDiv}>
        <p className={css.sectionP}>{title}</p>
        {children}
      </div>
    );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};