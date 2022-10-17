import styles from '../styles/Home.module.scss'
import HomePage from '../Components/Main/HomePage'
import axios from 'axios'



export default function Home({categories}) {
  console.log(categories)
  return (
    <div className={styles.main_container}>
     <HomePage categories={categories}/>
    </div>
  )
}

export const getServerSideProps = async () =>{
  const {data} = await axios.get("http://localhost:8000/categories/")
  
  const categories = data.results

  return {
    props: {
       categories
    }
  }


}
