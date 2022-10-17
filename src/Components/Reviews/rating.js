import React, { useState } from "react";
import styles from './rating.module.scss';


const Star = ({ selected = false, onClick = f => f }) => (
    <div className={ selected ? styles.star_selected : styles.star} onClick={onClick} />
  );

  const StarRating = ({ totalStars }) => {
    const [starsSelected, selectStar] = useState(0);
    return (
      <div className={styles.starrating}>
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => selectStar(i + 1)}
          />
        ))}
        
          <small className={styles.startext}>of 5 stars </small>
        
      </div>
    );
  };
export default StarRating  