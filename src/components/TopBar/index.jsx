import classnames from 'classnames';
import styles from './styles.module.css';
import Contact from '../common/Contact';
import SocialGroup from '../common/SocialGroup';

function TopBar() {
    return (
        <section className={styles['top-bar']}>
            <div className={classnames('container-fluid', styles['container-fluid'])}>
                <div className={styles['contact-group']}>
                    <Contact 
                        icon='phone' 
                        info='(225) 555-0118'
                    />
                    <Contact 
                        icon='email' 
                        info='michelle.rivera@example.com'
                    />
                </div>
                <h6 className='raleway'>Follow Us  and get a chance to win 80% off</h6>
                <div className={styles['social-group'] + ' raleway'}>
                    <h6>Follow Us :</h6>
                    <SocialGroup />
                </div>
            </div>
        </section>
    );
}

export default TopBar;