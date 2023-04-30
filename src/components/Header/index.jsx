import styles from './styles.module.css'
import classnames from 'classnames';
import Featured from './../Featured/index';
import {
    Overlay,
    Heading,
    ReadMore
} from '../common/';

function Header() {
    return (
        <header>
            <Overlay />
            <div className={classnames('container', styles['container'])}>
                <div className={styles.title}>
                    <Heading type='h5' font='raleway'>SUMMER 2020</Heading>
                    <Heading type='h1' font='oswald'>Professional Medical Care</Heading>
                    <Heading type='h4' font='montserrat'>
                        We know how large objects will act, 
                        but things on a small scale.
                    </Heading>
                    <ReadMore />
                </div>
            </div>
            <Featured />
        </header>
    );
}

export default Header;