import styles from './styles.module.css'

function Stars({stars}) {
    const fillStars = [];
    const emptyStars = [];
    const halfStars = [];
    const numEmpty = stars > 0 ? Math.floor(5- stars) : 5
    const numHalf = !Number.isInteger(stars) ? 1 : 0

    for (let i = 0; i < Math.floor(stars) && i < 5; i++) {
        fillStars.push(<i key={i} className="bi bi-star-fill"></i>);
    }

    if(numEmpty > 0){
        for (let i = 0; i < numEmpty; i++) {
            emptyStars.push(<i key={i} className="bi bi-star"></i>);
        }
    }

    if(numHalf > 0 && stars < 5){
        halfStars.push(<i key={Math.random()} className="bi bi-star-half"></i>);
    }

    return ( 
        <div className={styles.stars}>
            {
                fillStars
            }
            {
                numHalf > 0 ? halfStars : null
            }
            {
                numEmpty > 0 ? emptyStars : null
            }
        </div>
    );
}

export default Stars;