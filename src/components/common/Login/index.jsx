import styles from './styles.module.css'
import classnames from 'classnames';

function Login() {
    return (
        <a href='#' className={classnames('login montserrat', styles.login)}>
            <i className="bi bi-person"></i> Login / Register
        </a>
    );
}

export default Login;