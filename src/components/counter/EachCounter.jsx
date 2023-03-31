import React,{useState,useEffect} from 'react';
import {AiFillDelete} from "react-icons/ai";
import styles from "../../styles.module.css";


function EachCounter({id,count,incrementHandler,decrementHandler,deleteHandler}) {
    const [isZero,setIsZero] = useState(true);

    useEffect(() => {
      if(count === 0) {
        setIsZero(true);
      } else {
        setIsZero(false)
      }
    },[count])

    return (
        <>
            <div className={styles.eachCounterCounter}>
                <span className={`${styles.counterShower} ${isZero && styles.goldBackground}`}>{isZero ? "zero" : count}</span>
                <button className={styles.incrementButton} onClick={() => incrementHandler(id)}>+</button>
                <button className={`${styles.decrementButton} ${isZero && styles.disableDecrement}`} disabled={isZero} onClick={() => decrementHandler(id)}>-</button>
                <button className={styles.deleteButton} onClick={() => deleteHandler(id)}><AiFillDelete/></button>
            </div>
        </>
    )
}

export default EachCounter