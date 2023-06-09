import PropTypes from 'prop-types';
import css from './Notification.module.css';

export function Notification ({message}){
    return (
      <>
        <p className={css.notifP}>{message}</p>
      </>
    );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};