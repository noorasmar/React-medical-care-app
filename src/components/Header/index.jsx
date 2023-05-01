import styles from './styles.module.css'
import classnames from 'classnames';
import Featured from './../Featured/index';
import {
    Overlay,
    ReadMore
} from '../common/';

function Header() {
    return (
        <header>
            <Overlay />
            <div className={classnames('container', styles['container'])}>
                <div className={styles.title}>
                    <h5 className='raleway'>
                        SUMMER 2020
                    </h5>
                    <h1 className='oswald'>
                        Professional Medical Care
                    </h1>
                    <h4 className='montserrat'>
                        We know how large objects will act, 
                        but things on a small scale.
                    </h4>
                    <ReadMore />
                </div>
            </div>
            <Featured />
        </header>
    );
}

export default Header;