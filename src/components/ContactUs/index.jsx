import styles from './styles.module.css';
import classnames from 'classnames';
import {
    Map, 
    Description,
    ContactItem
} from '../common';

function ContactUs() {
    return (
        <section className={styles.contact}>
            <div className="container">
                <div className={classnames('row g-5', styles['g-5'])}>
                    <div className="col-md-6">
                        <Map />
                    </div>
                    <div className="col-md-6">
                        <Description 
                            title='WORK WITH US'
                            info='Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics '
                            isBorder={true}
                        />
                        <Description 
                            title='CONTACT US'
                            info='Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics '
                            isBorder={false}
                        />
                        <ContactItem />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;