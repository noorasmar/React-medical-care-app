import { useContext } from 'react';
import styles from './styles.module.css';
import LovesContext from '../../../contexts/LovesContext';

function ProductItem({title, category, imgSrc, price}) {
    const { setLoves } = useContext(LovesContext);

    const handleClick = () => {
        setLoves(prevLoves => prevLoves + 1);
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
                    <i className="bi bi-cart-plus"></i>
                    <i className="bi bi-heart" onClick={handleClick}></i>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;