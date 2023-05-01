import styles from './styles.module.css'
import Stars from '../Stars';

function ReviewItem({imgSrc, stars, info, name, work}) {
    return (
        <div className={styles.item}>
            <img src={process.env.PUBLIC_URL + imgSrc} alt={name} />
            <Stars stars={stars}/>
            <h6 className='raleway'>
                {info}
            </h6>
            <div className={styles.user}>
                <a href="#" className='raleway'>
                    {name}
                </a>
                <small>
                    {work}
                </small>
            </div>
        </div>
    );
}

export default ReviewItem;