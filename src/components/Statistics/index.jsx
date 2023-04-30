import styles from './styles.module.css'
import StatisticsItem from '../common/StatisticsItem';
import { 
    ORTHO,
    PRENTAL,
    OUTPATIENT,
    NEURO,
    CANCER
} from '../../constants/imageUrls';

function Statistics() {
    return (
        <section className={styles.statistics}>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-4">
                        <StatisticsItem src={ORTHO}/>
                    </div>
                    <div className="col-md-4">
                        <StatisticsItem src={PRENTAL}/>
                        </div>
                    <div className="col-md-4">
                        <StatisticsItem src={OUTPATIENT}/>
                        </div>
                    <div className="col-md-8">
                        <StatisticsItem src={NEURO}/>
                        </div>
                    <div className="col-md-4">
                        <StatisticsItem src={CANCER}/>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Statistics;