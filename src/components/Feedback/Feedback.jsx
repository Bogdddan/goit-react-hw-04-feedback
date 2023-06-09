import css from './Feedback.module.css';

export function FeedbackOptions ({ options , onLeaveFeedback }) {
        return (
        <ul className={css.fedbUl}>
            {options.map(option => (
            <li key={option}>
            <button
                type="button"
                name={option}
                onClick={onLeaveFeedback}
                className={css.febdButton}
            >
                {option}
            </button>
            </li>
        ))}
        </ul>
    );
}