import styles from './styles.module.css'
import classnames from 'classnames';

function Subscribe() {
    return (
        <section className={styles.subscribe}>
            <div className={classnames('container', styles.container)}>
                <div className={styles.info}>
                    <h2 className='oswald'>
                    Subscribe For Latest Newsletter
                    </h2>
                    <p className='raleway'>
                        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
                    </p>
                </div>
                <button className='raleway'>
                    Get Started
                </button>
            </div>
        </section>
    );
}

export default Subscribe;