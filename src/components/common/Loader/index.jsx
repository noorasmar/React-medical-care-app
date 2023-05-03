import styles from './styles.module.css'

function Loader() {
    return (
        <div className={styles.contain}>
            <span className={styles.loader}></span>
        </div>
    );
}

export default Loader;