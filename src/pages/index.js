import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import HomePage from '../Components/Main/HomePage'



export default function Home() {
  return (
    <div className={styles.main_container}>
     <HomePage/>
    </div>
  )
}

export const getStaticProps = async () =>{
  const res = aw
}
