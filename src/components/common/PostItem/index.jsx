import { useState } from 'react';
import styles from './styles.module.css'
import classnames from 'classnames';

function PostItem({google, trending, newEvents, info, date, comments, imgSrc}) {
    const [title, setTitle] = useState(google)
    const [active, setActive] = useState('google')

    return (
        <div className={styles.item}>
            <div className={styles.image} style={{backgroundImage: `url('/public/${imgSrc}')`}}>
                <h6 className='montserrat'>NEW</h6>
            </div>
            <div className={styles.data}>
                <div className={styles.category}>
                    <small className={classnames(`${active} montserrat`,{[styles.active]: active === 'google'})} onClick={()=>{setTitle(google); setActive('google')}}>Google</small>
                    <small className={classnames(`${active} montserrat`,{[styles.active]: active === 'trending'})} onClick={()=>{setTitle(trending);setActive('trending')}}>Trending</small>
                    <small className={classnames(`${active} montserrat`,{[styles.active]: active === 'new'})} onClick={()=>{setTitle(newEvents);setActive('new')}}>New</small>
                </div>
                <h4 className='montserrat'>
                    {
                        title 
                    }
                </h4>
                <p className='montserrat'>
                    {info}
                </p>
            </div>
            <div className={styles.more}>
                <div className={styles.date}>
                    <i className="bi bi-alarm"></i>
                    <small>{date}</small>
                </div>
                <div className={styles.comments}>
                    <i className="bi bi-bar-chart-line-fill"></i>
                    <small>{comments}</small>
                </div>
            </div>
            <div className={styles.learn}>
                <h6 className='montserrat'>Learn More</h6>
                <i className="bi bi-chevron-right"></i>
            </div>
        </div>
    );
}

export default PostItem;