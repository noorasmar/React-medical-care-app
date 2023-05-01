import styles from './styles.module.css'

function ProductItem({title, category, imgSrc, price}) {
    return (
        <div className={styles.item}>
            <h5 className='raleway'>
                {title}
            </h5>
            <span>
                {category}
            </span>
            <img src={process.env.PUBLIC_URL + imgSrc} alt={title} />
            <h5>
                {price}
            </h5>
        </div>
    );
}

export default ProductItem;