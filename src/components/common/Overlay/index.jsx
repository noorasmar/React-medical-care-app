import styles from './styles.module.css'

function Overlay({type}) {
    return (
        type !== 'gray'?
            <div className={styles['overlay-gray']}>
            </div>  
        :
            <div className={styles.overlay}>
            </div>
    );
}

export default Overlay;