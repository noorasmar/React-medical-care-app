import { useContext, useState } from 'react';
import styles from './styles.module.css';
import LovesContext from '../../../contexts/LovesContext';
import CartContext from './../../../contexts/CartContext';

function ProductItem({id, title, category, imgSrc, price}) {
    const { cartItems, setCartItems } = useContext(CartContext);
    const { setLoves } = useContext(LovesContext);
    const [isLoved, setIsLoved] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    const handleLove = () => {
        setLoves(prevLoves => prevLoves + 1);
        setIsLoved(!isLoved)
    };

    const handleUnLove = () => {
        setLoves(prevLoves => prevLoves > 0 ? prevLoves - 1 : 0);
        setIsLoved(!isLoved)
    };

    const hundleAdded = () => {
        setIsAdded(!isAdded)
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cartData.find((item) => item.id === id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cartData.push({ ...{id, title, category, imgSrc, price}, quantity: 1 });
        }  
        localStorage.setItem('cart', JSON.stringify(cartData))
        setCartItems(cartData);
    };

    const hundleRemoved = () => {
        setIsAdded(!isAdded)
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const newCartData = cartData.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(newCartData));
        setCartItems(newCartData);
    };

    return (
        <div className={styles.item}>
            <h5 className='raleway'>
                {title}
            </h5>
            <span className='raleway'>
                {category}
            </span>
            <img src={process.env.PUBLIC_URL + imgSrc} alt={title} />
            <div className={styles.footer}>
                <h5>
                    ${price}
                </h5>
                <div className={styles.tools}>
                    {
                        !isAdded ? 
                            <i className="bi bi-cart-plus" onClick={hundleAdded}></i> 
                            : 
                            <i className="bi bi-cart-dash" onClick={hundleRemoved} style={{color: 'var(--blue-color)'}}></i>
                    }
                    {
                        !isLoved ? 
                            <i className="bi bi-heart" onClick={handleLove}></i> 
                            : 
                            <i className="bi bi-heart-fill" style={{color: 'var(--red-color)'}} onClick={handleUnLove}></i>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductItem;