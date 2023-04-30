import classnames from 'classnames';
import styles from './styles.module.css'
import { LOGO } from '../../constants/imageUrls';
import {
    Login,
    Search,
    Cart,
    Love,
    Menu
}from './../common/'

function Nav() {
    return (
        <nav className={classnames('navbar navbar-expand-lg bg-body-tertiary', styles['navbar'])}>
            <div className={classnames('container-fluid px-5', styles['container-fluid'])}>
                <a className="navbar-brand" href="#">
                    <img src={LOGO} alt="logo" />
                </a>
                <button className={classnames('navbar-toggler', styles['navbar-toggler'])} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <Menu />
                </button>
                <div className={classnames('collapse navbar-collapse raleway', styles['navbar-collapse'])} id="navbarSupportedContent">
                    <ul className={classnames('navbar-nav me-auto mb-2 mb-lg-0', styles['navbar-nav'])}>
                        <li className="nav-item">
                            <a className={classnames('nav-link', styles['nav-link'])} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={classnames('nav-link dropdown-toggle active', styles['nav-link'], styles.active, styles['dropdown-toggle'])} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                                <i className="bi bi-chevron-down"></i>
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
                </div>
                <section className={classnames('menu-item', styles['menu-item'])}>
                    <Login />
                    <Search />
                    <Cart />
                    <Love />
                </section>
            </div>
        </nav>
    );
}

export default Nav;