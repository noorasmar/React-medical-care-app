import styles from './styles.module.css'
import { BsTelephone, BsEnvelope } from "react-icons/bs";


function Contact({icon, info}) {
    return (
        <>
            <h6 className={styles.click + ' raleway'}>
                {icon === 'phone' ? <BsTelephone /> : <BsEnvelope />}
                {icon === 'phone' ? <a href={"tel:"+info}>{info}</a> : <a href={"mailto:"+info}>{info}</a>}
            </h6>
        </>
    );
}

export default Contact;