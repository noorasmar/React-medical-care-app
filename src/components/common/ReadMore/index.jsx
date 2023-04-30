import styles from './styles.module.css'
import classnames from 'classnames';

function ReadMore() {
    return (
        <button className={classnames('read-more montserrat', styles['read-more'])}>
            Read More
        </button>
    );
}

export default ReadMore;