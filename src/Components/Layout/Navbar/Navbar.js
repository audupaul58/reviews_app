import { Container, Button } from "react-bootstrap"
import styles from './Navbar.module.scss';
import { MdAccountBalanceWallet } from "react-icons/md";

const myNavigation =() =>{

    return(
        <Container fluid className={styles.navCont} >
            <Container className={styles.headItem}>
                <div className={styles.logoIcon}>
                <MdAccountBalanceWallet className={styles.Icon} />
                    <h6>InVentory App</h6></div>
                <div className={styles.OtherItem}><button>Login</button></div>
            </Container>
        </Container>
    )
}

export default myNavigation

