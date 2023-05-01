import styles from './styles.module.css'

function ContactItem() {
    return (
        <div className="row gy-5">
            <div className="col-md-6">
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <i className="bi bi-credit-card"></i>
                    </div>
                    <div className={styles.info}>
                        <h6 className='raleway'>Phone:
                            <small className='montserrat'>
                                987-654-3210
                            </small>
                        </h6>
                        <h6 className='raleway'>Email:
                            <small className='montserrat'>
                                email@gmail.com
                            </small>
                        </h6>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <i className="bi bi-credit-card"></i>
                    </div>
                    <div className={styles.info}>
                        <h6 className='raleway'>
                            Support forum for over 24h
                        </h6>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <i className="bi bi-credit-card"></i>
                    </div>
                    <div className={styles.info}>
                        <h6 className='raleway'>
                        Free standard shipping on all orders.
                        </h6>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <i className="bi bi-credit-card"></i>
                    </div>
                    <div className={styles.info}>
                        <h6 className='raleway'>Address:
                            <small className='montserrat'>
                                8099 Trenton st.Miniapolis
                            </small>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactItem;