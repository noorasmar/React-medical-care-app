import styles from './styles.module.css'
import classnames from 'classnames';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Link to="/DashboardPage">
            <a href='#' className={classnames('login montserrat', styles.login)}>
                <i className="bi bi-person"></i> Login / Register
            </a>
        </Link>
    );
}

export default Login;