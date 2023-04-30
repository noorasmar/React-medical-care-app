import styles from './styles.module.css'


function SocialGroup() {
    return (
        <div className={styles.social}>
            <a href="#" alt='instagram'>
                <i className="bi bi-instagram"></i>
            </a>
            <a href="#" alt='instagram'>
                <i className="bi bi-youtube"></i>
            </a>
            <a href="#" alt='facebook'>
                <i className="bi bi-facebook"></i>
            </a>
            <a href="#" alt='twitter'>
                <i className="bi bi-twitter"></i>
            </a>
        </div>
    );
}

export default SocialGroup;