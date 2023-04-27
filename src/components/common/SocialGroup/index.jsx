import styles from './styles.module.css'
import { 
    BsInstagram, 
    BsYoutube, 
    BsFacebook,
    BsTwitter
} from "react-icons/bs";


function SocialGroup() {
    return (
        <div className={styles.social}>
            <BsInstagram className={styles.insta}/>
            <BsYoutube className={styles.youtube}/>
            <BsFacebook className={styles.face}/>
            <BsTwitter className={styles.twitter}/>
        </div>
    );
}

export default SocialGroup;