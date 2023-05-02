import styles from './styles.module.css';
import classnames from 'classnames';
import PRODUCTS from './mockObject';
import ProductItem from '../common/ProductItem';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
    breakpoint: 992,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
    },
    },
    {
    breakpoint: 768,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
    },
    },
    {
    breakpoint: 576,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    },
    },
],
};
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
                <div className={classnames("row g-4 desktop",styles['desktop'])}>
                    {       
                            PRODUCTS.map((el) => (
                                <div className="col-md-3" key={el.id}>
                                    <ProductItem
                                    id={el.id}
                                    title={el.title}
                                    category={el.category}
                                    imgSrc={el.imgSrc}
                                    price={el.price}
                                    />
                                </div>
                    ))}
                </div>
                <div className={classnames("row g-4 mobile",styles['mobile'])}>
                    <div className="col-md-12">
                        <Slider {...settings} arrows={false} className="slick-slider">
                            {PRODUCTS.map((el) => (
                                <div className="col-md-3" key={el.id}>
                                    <ProductItem
                                    id={el.id}
                                    title={el.title}
                                    category={el.category}
                                    imgSrc={el.imgSrc}
                                    price={el.price}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;