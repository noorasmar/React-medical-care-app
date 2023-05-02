import { useContext } from 'react';
import LovesContext from '../../../contexts/LovesContext';
import styles from './styles.module.css';

function Love() {
    const { loves } = useContext(LovesContext);
    
    return (
        <div className={styles.love}>
            <i className="bi bi-heart"></i> {loves}
        </div>
    );
}

export default Love;