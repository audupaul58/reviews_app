import React from 'react'
import styles from './Layout.module.scss';
import MyNavigation from './Navbar/Navbar';

const Layout = ({children}) => {
  return (
   <section className={styles.comSec}>

    <header>
        <MyNavigation/>
    </header>

    <main>
        {children}
    </main>

   </section>
  )
}

export default Layout