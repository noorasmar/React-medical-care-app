import styles from './styles.module.css'
import Overlay from './../Overlay/index';

function StatisticsItem({src, title, num}) {
    return (
        <div className={styles.item} style={{backgroundImage: `url(${src})`}}>
            <Overlay />
            <div className={styles.info}>
                <h3 className='oswald'>
                    {title}
                </h3>
                <h6 className='montserrat'>
                    {num} Items
                </h6>
            </div>
        </div>
    );
}

export default StatisticsItem;