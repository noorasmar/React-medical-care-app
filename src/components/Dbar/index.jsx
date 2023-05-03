import styles from './styles.module.css'
import classnames from 'classnames';
import { Link } from 'react-router-dom';

function Bar() {
    return (
        <div className={styles.bar}>
            <div className={classnames('container', styles['container'])}>
                <div className={styles.user}>
                    <i className="bi bi-person-bounding-box"></i> Noor Asmar
                </div>
                <div className={styles['log-out']}>
                    <Link to="/">
                        <i className="bi bi-box-arrow-right"></i> Log Out
                    </Link>
                </div>
            </div>
        </div>  
    );
}

export default Bar;