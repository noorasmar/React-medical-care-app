import { useContext, useState } from 'react';
import styles from './styles.module.css';
import LovesContext from '../../../contexts/LovesContext';

function ProductItem({title, category, imgSrc, price}) {
    const { setLoves } = useContext(LovesContext);
    const [isLoved, setIsLoved] = useState(false)

    const handleLove = () => {
        setLoves(prevLoves => prevLoves + 1);
        setIsLoved(!isLoved)
    };
    const handleUnLove = () => {
        setLoves(prevLoves => prevLoves > 0 ? prevLoves - 1 : 0);
        setIsLoved(!isLoved)
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