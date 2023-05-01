import styles from './styles.module.css'

function ServicesItem({icon, title, info}) {
    return (
        <div className={styles.item}>
            <i className={"bi "+ icon}></i>
            <h3 className='montserrat'>
                {title}
            </h3>
            <p className='raleway'>
                {info}
            </p>
        </div>
    );
}

export default ServicesItem;