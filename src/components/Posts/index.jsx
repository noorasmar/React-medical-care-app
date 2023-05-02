import styles from './styles.module.css'
import {Title, PostItem} from '../common';
import POSTS from './mockObject';

function Posts() {
    return (
        <section className={styles.posts}>
            <div className="container">
                <Title 
                    title='Featured Posts'
                />
                <div className="row gy-4 gx-2">
                    {
                        POSTS.map((el, index)=>{
                            return (
                                <div className="col-md-4" key={index}>
                                    <PostItem 
                                        google={el.google}
                                        trending={el.trending}
                                        newEvents={el.newEvents}
                                        info={el.info}
                                        date={el.date}
                                        comments={el.comments}
                                        imgSrc={el.imgSrc}
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

export default Posts;