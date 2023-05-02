import { useContext } from 'react';
import styles from './styles.module.css'
import CartItem from '../CartItem';
import CartContext from './../../../contexts/CartContext';

function Cart() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className={styles.cart}>
            <i className="bi bi-cart"></i> {cartItems.length}
            <div className={styles['cart-box']}>
                <div className={styles.number}>
                    <div className={styles.cart}>
                        <i className="bi bi-cart3"></i>
                        <span>{cartItems.length}</span>
                    </div>
                    <div>
                        <span>
                            Total:
                        </span>
                        $2,876
                    </div>
                </div>
                {
                    cartItems.map((el)=>{
                        return (
                                <CartItem 
                                    key={el.id}
                                    title={el.title}
                                    price={el.price}
                                    quantity={el.quantity}
                                    imgSrc={el.imgSrc}
                                />
                            )
                    })
                }

                <div className={styles.check}>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;