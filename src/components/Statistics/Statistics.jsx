import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics ({good , neutral , bad , positivePercentage , total}) {
    return (
      <ul className={css.statisticsUl}>
        <li className={css.statisticLi}>Good: {good}</li>
        <li className={css.statisticLi}>Neutral: {neutral}</li>
        <li className={css.statisticLi}>Bad: {bad}</li>
        <li className={css.statisticLi}>Total: {total}</li >
        <li className={css.statisticLi}>Positive feedback: {positivePercentage}%</li>
      </ul>
    );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};