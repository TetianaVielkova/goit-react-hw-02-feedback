import PropTypes from 'prop-types'; 
import styles from './Section.module.css';

export const Section = ({ title, children }) => {
    return(
        <section className={styles.section}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </section>
    )
}

Section.propType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};