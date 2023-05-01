import styles from './styles.module.css'
import { Title, ReviewItem } from '../common';
import REVIEWS from './mockObject';

function Reviews() {
    return (
        <section className={styles.reviews}>
            <div className="container">
                <Title 
                    title='What Clients Say'
                    para='Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics '
                />
                <div className="row">
                    {
                        REVIEWS.map((el, index)=>{
                            return (
                                <div className="col-md-4" key={index}>
                                    <ReviewItem 
                                        imgSrc={el.imgSrc}
                                        info={el.info}
                                        stars={el.stars}
                                        name={el.name}
                                        work={el.work}
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

export default Reviews;