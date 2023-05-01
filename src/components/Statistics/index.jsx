import styles from './styles.module.css';
import classnames from 'classnames';
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
                <div className={classnames('row gy-4',styles['gy-4'])}>
                    <div className="col-md-4">
                        <StatisticsItem src={ORTHO} title='Orthopedics' num='5'/>
                    </div>
                    <div className="col-md-4">
                        <StatisticsItem src={PRENTAL} title='Prenatal care' num='5'/>
                        </div>
                    <div className="col-md-4">
                        <StatisticsItem src={OUTPATIENT} title='Outpatient care' num='5'/>
                        </div>
                    <div className="col-md-8">
                        <StatisticsItem src={NEURO} title='Neurosurgery' num='5'/>
                        </div>
                    <div className="col-md-4">
                        <StatisticsItem src={CANCER} title='Cancer center' num='5'/>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Statistics;