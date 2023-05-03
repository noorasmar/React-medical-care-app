import styles from './styles.module.css'
import classnames from 'classnames';
import Table from '../common/Table';

function Dbody() {
    return (
        <div className={styles['d-body']}>
            <div className={classnames('container', styles['container'])}>
                <Table />
            </div>
        </div>
    );
}

export default Dbody;