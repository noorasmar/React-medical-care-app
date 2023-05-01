import styles from './styles.module.css';

function Description({title, info, isBorder}) {
    return (
        <div className={`${styles.desc} ${isBorder === true ? styles.bordered : styles['not-bordered']}`}>
            <h3 className='oswald'>
                {title}
            </h3>
            <p>
                {info}
            </p>
        </div>
    );
}

export default Description;