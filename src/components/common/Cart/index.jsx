import styles from './styles.module.css'
import CartItem from '../CartItem';

function Cart() {
    return (
        <div className={styles.cart}>
            <i className="bi bi-cart"></i> 0
            <div className={styles['cart-box']}>
                <div className={styles.number}>
                    <div className={styles.cart}>
                        <i className="bi bi-cart3"></i>
                        <span>4</span>
                    </div>
                    <div>
                        <span>
                            Total:
                        </span>
                        $2,876
                    </div>
                </div>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <div className={styles.check}>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;