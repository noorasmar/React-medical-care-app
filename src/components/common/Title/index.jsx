import styles from './styles.module.css'

function Title({subTitle, title, para}) {
    return (
        <div className={styles.title}>
            <h4 className='montserrat'>
                {subTitle}
            </h4>
            <h2 className='oswald'>
                {title}
            </h2>
            <p className='raleway'>
                {para}
            </p>
        </div>
    );
}

export default Title;