import styles from './styles.module.css';
import PRODUCTS from './mockObject';
import ProductItem from '../common/ProductItem';


function Products() {
    return (
        <section className={styles.products}>
            <div className="container">
                <h4 className='montserrat'>
                    Featured Products
                </h4>
                <h3 className='oswald'>
                    BESTSELLER PRODUCTS
                </h3>
                <div className="row g-4">
                    {
                        PRODUCTS.map((el, index)=>{
                            return (
                                <div className="col-md-3" key={index}>
                                    <ProductItem 
                                        title={el.title}
                                        category={el.category}
                                        imgSrc={el.imgSrc}
                                        price={el.price}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Products;