import React from 'react'
import styles from '../../../styles/business.module.scss'
import { useRouter } from 'next/router'
import USWswr from 'swr'
import Rating from '../../../Components/Reviews/rating';

const SludField = () => {

    const router = useRouter()

    const {slug} = router.query

    const baseUrl = `http://localhost:8000/businesses?slug=${slug}`

    const {data, errors} = USWswr(baseUrl)

    if(!data) return <p>Loading Please Wait</p>
    if(errors) return Error(errors.message)

    // Since we are not not mapping through the data from the api i access the particular data by index

    const business = data.results[0] || null

    const navigateReview = ()=>{
     router.push(`/business/${slug}/reviews/add-reviews`)
    }

    

  return (
    <section className={styles.bus_con}>
        <div className={styles.bus_header}>
            <div  className={styles.headright}>
            <h6>{business.name}</h6>
               <h6>{business.price_range}</h6>
               <p><Rating totalStars={3}/></p>
               <button onClick={navigateReview}><strong>Write a Review</strong></button>
               <p>Descriptions</p>
            </div>

            <div className={styles.headleft}>
            <div className={styles.left_text} >
                    <h6>Descriptions</h6>
                    <p><small>{business.description}</small></p>
               </div>
               <div className={styles.left_text}>
                    <h6>Address</h6>
                    <p><small>{business.city}</small></p>
               </div>
               <div className={styles.left_text}>
                    <h6>Phone</h6>
                    <p><small>{business.phone}</small></p>
               </div>

               <div className={styles.left_text}>
                    <h6>Hour</h6>
                    <p> <small>{business.hour}</small></p>
               </div>
            </div>

        </div>

    </section>
  )
}

export default SludField