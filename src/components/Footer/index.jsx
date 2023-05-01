import styles from './styles.module.css';
import { LOGO } from '../../constants/imageUrls';


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.social}>
                    <img src={LOGO} alt="logo" />
                    <div className={styles.media}>
                        <a href="#" alt='facebook'>
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" alt='instagram'>
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" alt='twitter'>
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className={styles.links}>
                    <div className="row gy-4">
                        <div className="col-md-2">
                            <div className={styles.item}>
                                <h5 className='montserrat'>Company Info</h5>
                                <a href="#" className='raleway'>About Us</a>
                                <a href="#" className='raleway'>Carrier</a>
                                <a href="#" className='raleway'>We are hiring</a>
                                <a href="#" className='raleway'>Blog</a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className={styles.item}>
                                <h5 className='montserrat'>Legal</h5>
                                <a href="#" className='raleway'>About Us</a>
                                <a href="#" className='raleway'>Carrier</a>
                                <a href="#" className='raleway'>We are hiring</a>
                                <a href="#" className='raleway'>Blog</a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className={styles.item}>
                                <h5 className='montserrat'>Features</h5>
                                <a href="#" className='raleway'>Business Marketing</a>
                                <a href="#" className='raleway'>User Analytic</a>
                                <a href="#" className='raleway'>Live Chat</a>
                                <a href="#" className='raleway'>Unlimited Support</a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className={styles.item}>
                                <h5 className='montserrat'>Resources</h5>
                                <a href="#" className='raleway'>IOS & Android</a>
                                <a href="#" className='raleway'>Watch a Demo</a>
                                <a href="#" className='raleway'>Customers</a>
                                <a href="#" className='raleway'>API</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.item}>
                                <h5 className='montserrat'>Get In Touch</h5>
                                <div className={styles.group}>
                                    <input type="email" name="email" id="email" placeholder='Your Email'/>
                                    <button>Subscribe</button>
                                    <small className='montserrat'>Lore imp sum dolor Amit</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copy}>
                    <h6 className='montserrat'>
                        Made With Love By Noor Asmar All Right Reserved 
                    </h6>
                </div>
            </div>
        </footer>
    );
}

export default Footer;