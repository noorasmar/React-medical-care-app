import styles from './styles.module.css'
import Overlay from './../Overlay/index';

function StatisticsItem({src, title, num}) {
    return (
        <div className={styles.item} style={{backgroundImage: `url(${src})`}}>
            <Overlay />
            <img src={src} className="card-img-top" alt="..."/>
        </div>
    );
}

export default StatisticsItem;