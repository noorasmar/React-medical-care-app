import classnames from 'classnames';
import styles from './styles.module.css';
import Contact from '../common/Contact';
import {Heading, SocialGroup} from '../common/';

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
                <Heading type='h6' font='raleway'>
                    Follow Us  and get a chance to win 80% off
                </Heading>
                <div className={styles['social-group']}>
                    <Heading type='h6' font='raleway'>
                        Follow Us :
                    </Heading>
                    <SocialGroup />
                </div>
            </div>
        </section>
    );
}

export default TopBar;