import styles from './styles.module.css'

function Cart() {
    return (
        <div className={styles.cart}>
            <i className="bi bi-cart"></i> 0
        </div>
    );
}

export default Cart;