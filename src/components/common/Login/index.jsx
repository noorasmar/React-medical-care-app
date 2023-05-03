import styles from './styles.module.css'
import classnames from 'classnames';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Link to={process.env.PUBLIC_URL+"/DashboardPage"} className={classnames('login montserrat', styles.login)}>
            {/* <a href='#' className={classnames('login montserrat', styles.login)}>
                <i className="bi bi-person"></i> Login / Register
            </a> */}
            <i className="bi bi-person"></i> Login / Register
        </Link>
    );
}

export default Login;