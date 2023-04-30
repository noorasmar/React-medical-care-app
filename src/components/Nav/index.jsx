import classnames from 'classnames';
import styles from './styles.module.css'
import { LOGO } from '../../constants/imageUrls';
import Search from '../common/Search';

function Nav() {
    return (
        <nav className={classnames('navbar navbar-expand-lg bg-body-tertiary', styles['navbar'])}>
            <div className={classnames('container-fluid', styles['container-fluid'])}>
                <a className="navbar-brand" href="#">
                    <img src={LOGO} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse raleway" id="navbarSupportedContent">
                    <ul className={classnames('navbar-nav me-auto mb-2 mb-lg-0', styles['navbar-nav'])}>
                        <li className="nav-item">
                            <a className={classnames('nav-link', styles['nav-link'])} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={classnames('nav-link dropdown-toggle active', styles['nav-link'], styles.active, styles['dropdown-toggle'])} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className={classnames('nav-link', styles['nav-link'])} href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={classnames('nav-link', styles['nav-link'])}>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className={classnames('nav-link', styles['nav-link'])}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className={classnames('nav-link', styles['nav-link'])}>Pages</a>
                        </li>
                    </ul>
                    <section className={classnames('login montserrat', styles.login)}>
                        <p>
                            Login / Register
                        </p>
                    </section>
                </div>
            </div>
        </nav>
    );
}

export default Nav;