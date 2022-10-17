import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import styles from './HomePage.module.scss';
import Link from 'next/link'
import Reviews from '../Reviews/rating'

const HomePage = ({categories}) => {
  return (
   <Container className={styles.maincons} >
        <Row className={styles.rowclass}>
            {categories.length ? categories.map((category, index) =>(
                <Link href={`/categories/${category.slug}`} key={index} >
                <div className={styles.Colclass} >
                    <div className={styles.Col_Logo} >
                        <span className={styles.itemLogo}>
                        <small className={styles.indText}>C</small>
                            <div>
                            <h6>{category.name}</h6> 
                                <p>See all {category.name}</p>
                            </div>
                        </span>
                    </div>
                </div>
            </Link>
            )) : null}
            
           
           
        </Row>
   </Container>
  )
}

export default HomePage