import { Container, Button } from "react-bootstrap"
import styles from './Navbar.module.scss';
import { MdAccountBalanceWallet } from "react-icons/md";
import {useState} from 'react'
import Sidebar from '../Sideber';

const MyNavigation =() =>{

    //console.log(sideMemu);

    return(
        <Container fluid className={styles.navCont} >
            <Container className={styles.headItem}>
                <div className={styles.logoIcon}>
                    
                <Sidebar className={styles.Icon}  />
                    <h6>InVentory App</h6></div>
                <div className={styles.OtherItem}><button>Login</button></div>
            </Container>
        </Container>
    )
}

export default MyNavigation

