import styles from './styles.module.css'

function CartItem() {
    return (
        <div className={styles.item}>
            <img src={process.env.PUBLIC_URL + '/assets/images/tool1.png'} alt="tool" />
            <div className={styles.info}>
                <h6>Sony</h6>
                <div className={styles.desc}>
                    <span>
                        $848.45
                    </span>
                    <span>
                        Quantity: 01
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;