import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import styles from './addReviews.module.scss';
import {useForm} from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios'


const AddReviews = ({business}) => {

  const router = useRouter()
  const baseUrl  = "http://localhost:8000/reviews/"

  const {register, handleSubmit} = useForm();

  const submitForm = async (data)=>{
    console.log(data);
   const payload = {
        stars: data.stars,
        title: data.title,
        content: data.content,
        business: business.url
       
   }

   console.log('payload', payload)
    await axios.post(baseUrl, payload)
    .then(res =>{
        console.log(res.data)
        router.push('/')
      })
      .catch(err =>{
        console.log(err.message)
      })
}

  return (
   <Container className={styles.main_container} >
        <div className={styles.innerCon}>
           <form onSubmit={handleSubmit(submitForm)} className={styles.formInput}>
         
           <label htmlFor="reviews" placeholder='rate Me'></label>
              <select {...register("stars")} id="starComponent" required className={styles.items}>
                  <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
           
             <input placeholder='Text' type='text' {...register('title')} required className={styles.items}/>
            

             <textarea placeholder='Text' {...register('content')} required className={styles.items} />
            

                      <button className={styles.items}>Submit</button>
           </form>
           
        </div>
   </Container>
  )
}

export default AddReviews

// This return the primary key field in the table
export const getServerSideProps = async ({query: {slug}}) =>{
  const {data} = await axios.get(`http://localhost:8000/businesses?slug=${slug}`)
  
  

  

  return {
    props: {
       business: data.results[0] || null,
    }
  }


}
