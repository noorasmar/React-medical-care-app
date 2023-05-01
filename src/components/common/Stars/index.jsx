import styles from './styles.module.css'

function Stars({stars}) {
    const fillStars = [];
    const emptyStars = [];
    const numEmpty = 5- stars

    for (let i = 0; i < stars; i++) {
        fillStars.push(<i key={i} className="bi bi-star-fill"></i>);
    }

    if(numEmpty > 0){
        for (let i = 0; i < numEmpty; i++) {
            emptyStars.push(<i key={i} className="bi bi-star"></i>);
        }
    }

    return ( 
        <div className={styles.stars}>
            {
                fillStars
            }
            {
                numEmpty > 0 ? emptyStars : null
            }
        </div>
    );
}

export default Stars;