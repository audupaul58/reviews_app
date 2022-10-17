import React, {useState} from 'react'
import {Form } from 'react-bootstrap'
import styles from '../../styles/categories.module.scss';
import { useRouter } from 'next/router'
import USWswr from 'swr'
import Link from 'next/link'
import Rating from '../../Components/Reviews/rating'




const CategoryPage = () => {

    const router = useRouter()

    const [price, setPrice] = useState('')

    const {slug} = router.query

    const baseUrl = `http://localhost:8000/categories?slug=${slug}`

    const {data, errors} = USWswr(baseUrl)

    if(!data) return <p>Loading Please Wait</p>
    if(errors) return Error(errors.message)

    const category = data.results[0] || null

   const handlePriceChange=(e)=>{
        setPrice(e.target.value)
   }

  const ClearInput = () => {
    setPrice("")
  }

  return (
    <>
        <div className={styles.cat_wrapper}> 
            <div  className={styles.cat_filter}>
                <h6>Filter Result</h6>
               <div className={styles.select}>
              <small><strong>price</strong></small>
              <select
               
                label='price'
                id='priceinput'

                onChange={handlePriceChange}
              >      <option value=''></option>
                    <option value={'Dog'}>Dog</option>
                    <option value={'Cat'}>Cat</option>
                    <option value="Hamster">Hamster</option>
                    <option value="Parrot">Parrot</option>
                    <option value="Spider">Spider</option>
                    <option value="Goldfish">Goldfish</option>
            </select>
                <button onClick={ClearInput}>Clear Input</button>
               </div>
           
            </div>
           {category.business.length ? category.business.map((firms, index)=>(
            <Link href={`/business/${firms.slug}`} key={index}>
             <div  className={styles.cat_item} >
                
             <div className={styles.sub_item}>
               <h6>{firms.name}</h6>
               <p>{firms.price_range}</p>
                <Link href={firms.website}>{firms.website}</Link>
               <p>{firms.phone}</p>
               <p>{firms.descriptions}</p>
             </div>

             <div className={styles.sub_item2}>
                <div><Rating totalStars={3}/></div>
                <small>{firms.hour}</small>
                <p>{firms.city}</p>
             </div>
      </div>
      </Link>
       )):null}
        </div>
       
    </>
    
  )
}

export default CategoryPage

