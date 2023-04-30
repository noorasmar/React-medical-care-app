import styles from './styles.module.css'
import { FeaturedItem } from '../common';
import { 
    CARD_1,
    CARD_2,
    CARD_3 
} from '../../constants/imageUrls';


function Featured() {
    return (
        <section className={styles.featured}>
            <div className='container'>
                <div className="row gy-3">
                    <div className="col-md-4">
                        <FeaturedItem src={CARD_1}/>
                    </div>
                    <div className="col-md-4">
                        <FeaturedItem src={CARD_2}/>
                    </div>
                    <div className="col-md-4">
                        <FeaturedItem src={CARD_3}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;