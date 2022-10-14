import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
   <Container className={styles.maincons} >
        <Row className={styles.rowclass}>
            <Col className={styles.Colclass} xs={12} sm={6} md={4}>
                <div className={styles.Col_Logo} >
                    <span className={styles.itemLogo}>
                       <small className={styles.indText}>C</small>
                        <div>
                           <h6>Category</h6> 
                            <p>See all</p>
                        </div>
                    </span>
                </div>
            </Col>
            <Col className={styles.Colclass} >
                <div className={styles.Col_Logo} >
                    <span className={styles.itemLogo}>
                       <small className={styles.indText}>C</small>
                        <div>
                           <h6>Category</h6> 
                            <p>See all</p>
                        </div>
                    </span>
                </div>
            </Col>
            <Col className={styles.Colclass} sm={12} md={4}>
                <div className={styles.Col_Logo} >
                    <span className={styles.itemLogo}>
                       <small className={styles.indText}>C</small>
                        <div>
                           <h6>Category</h6> 
                            <p>See all</p>
                        </div>
                    </span>
                </div>
            </Col>
           
        </Row>
   </Container>
  )
}

export default HomePage