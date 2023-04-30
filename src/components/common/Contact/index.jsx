import styles from './styles.module.css';
import Heading from './../Heading/index';


function Contact({icon, info}) {
    return (
        <>
            <Heading type='h6' font='raleway'>
                {icon === 'phone' ? 
                    <a href={"tel:"+info} className={styles['contact-link']}>
                        <i className="bi bi-telephone bi-lg"></i> {info}
                    </a> : 
                    <a href={"mailto:"+info} className={styles['contact-link']}>
                        <i className="bi bi-envelope bi-lg"></i> {info}
                    </a>
                }
            </Heading>
        </>
    );
}

export default Contact;