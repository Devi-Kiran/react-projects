import React from 'react';
import { data } from './data';
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import styles from '../../styles.module.css';

function ReviewsCardContainer({index,dispatch}) {
    const {id,name,about,image,role} = data[index.index];
    console.log(index)

    return (
      <div className={styles.cardContainer}>
          <div className={styles.dynamicContainer}>
            <img src={image} alt={name}/>
            <p className={styles.name}><b>{name}</b></p>
            <p className={styles.role}>{role}</p>
            <p className={styles.about}>{about}</p>
          </div>
          <div>
            <button className={styles.miniBtn} onClick={() => dispatch({type: 'PREV'})}><AiOutlineArrowLeft/></button>
            <button className={styles.miniBtn} onClick={() => dispatch({type: 'NEXT'})}><AiOutlineArrowRight/></button>
            <div className={styles.randomContainer}>
              <button className={styles.randomBtn} onClick={() => dispatch({type: 'RANDOM'})}>random</button>
            </div>
          </div>
      </div>
    )
}

export default ReviewsCardContainer;