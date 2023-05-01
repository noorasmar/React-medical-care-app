import styles from './styles.module.css';


function Contact({icon, info}) {
    return (
        <>
            <h6 className='raleway'>
                {icon === 'phone' ? 
                    <a href={"tel:"+info} className={styles['contact-link']}>
                        <i className="bi bi-telephone bi-lg"></i> {info}
                    </a> : 
                    <a href={"mailto:"+info} className={styles['contact-link']}>
                        <i className="bi bi-envelope bi-lg"></i> {info}
                    </a>
                }
            </h6>
        </>
    );
}

export default Contact;