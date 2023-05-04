import styles from './styles.module.css'

function CartItem({title, price, quantity, imgSrc}) {
    return (
        <div className={styles.item}>
            <img src={imgSrc} alt="tool" />
            <div className={styles.info}>
                <h6>{title}</h6>
                <div className={styles.desc}>
                    <span>
                        ${price}
                    </span>
                    <span>
                        Quantity: {quantity}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;