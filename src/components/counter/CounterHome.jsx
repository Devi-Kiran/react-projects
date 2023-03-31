import React,{useState,useEffect} from 'react';
import EachCounter from './EachCounter';
import {BiRefresh} from "react-icons/bi";
import {FaRecycle} from "react-icons/fa";
import {AiOutlineShoppingCart} from "react-icons/ai";
import styles from '../../styles.module.css';

function CounterHome() {
    const initialState = [
        {id: 1,count: 0},
        {id: 2,count: 0},
        {id: 3,count: 0},
        {id: 4,count: 0}
    ];
    const [counters,setCounters] = useState(initialState);
    const [disableReload,setDisableReload] = useState(false);
    const [items,setItems] = useState(0);

    useEffect(() => {
        if(counters.length === 0) {
            setDisableReload(true);
            console.log(disableReload);
        }
    },[counters.length]);

    useEffect(() => {
        const total = counters.reduce((total, counter) => {
            if(counter.count >= 1){
                return total + 1;
            }
            return total;
        }, 0)
        setItems(total);
    },[counters]);

    function incrementHandler(id) {
        const updatedCounters = counters.map(counter => {
            if(counter.id === id) {
                return {...counter,count: counter.count + 1}
            } else {
                return counter;
            }
        });
        setCounters(updatedCounters);
    }

    function decrementHandler(id) {
        const updatedCounters = counters.map(counter => {
            if(counter.id === id) {
                return {...counter,count: counter.count - 1}
            } else {
                return counter;
            }
        });
        setCounters(updatedCounters);
    }

    function deleteHandler(id) {
        const updatedCounters = counters.filter(counter => {
            return counter.id !== id;
        });
        setCounters(updatedCounters);
    }

    function restartHandler() {
        const updatedCounters = counters.map(counter => {
            return {...counter,count: counter.count * 0}
        })
        setCounters(updatedCounters);
    }

    function reloadHandler() {
        if(counters.length === 0) {
            window.location.reload();
        }
    }

    return (
        <div className={styles.mainCounterContainer}>
            <nav>
                <p className={styles.cart}><AiOutlineShoppingCart/><span>{items}</span> items</p>
                <p>
                    <button disabled={disableReload} className={`${styles.restartButton} ${disableReload && styles.disableReload}`} onClick={restartHandler}><BiRefresh/></button>
                    <button className={`${styles.reloadButton} ${!disableReload && styles.disableReload}`} onClick={reloadHandler}><FaRecycle/></button>
                </p>
            </nav>
            {counters.map(counter => {
                return (
                    <EachCounter
                        key={counter.id}
                        counter={counter.id}
                        id={counter.id}
                        count={counter.count}
                        incrementHandler={incrementHandler}
                        decrementHandler={decrementHandler}
                        deleteHandler={deleteHandler}
                    />
                )
            })}
        </div>
    )
}

export default CounterHome