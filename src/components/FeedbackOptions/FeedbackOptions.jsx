import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
    <ul className={styles.list}>
        {options.map((option) => {
            return(
            <li className={styles.item} key={option}><button className={styles.button}
                name={option}
                type="button"
                onClick={onLeaveFeedback}>{option}
            </button></li>
            );
            })}
    </ul>
)}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}