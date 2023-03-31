import {useState,useReducer} from 'react';
import styles from '../../styles.module.css';
import ReviewsCardContainer from './ReviewsCardContainer';
import { data } from './data';

const initial = {index: 0};
const reducer = (state,action) => {
    switch(action.type) {
        case 'NEXT':
            if(state.index >= (data.length - 1)) {
                return {index: 0}
            } else {
                return  {index: state.index + 1}
            }
        case 'PREV':
            if(state.index <= 0) {
                return {index: (data.length - 1)}
            } else {
                return  {index: state.index - 1}
            }
        case 'RANDOM':
            // return state;
            if(state.index === Math.floor(Math.random() * (data.length - 1))) {
                return {index: ((Math.floor(Math.random() * (data.length - 1))) + 1)}
            } else {
                return {index: Math.floor(Math.random() * (data.length - 1))}
            }
        default:
            return state;
    }
}

function ReviewsParentComponent() {
    const [index,dispatch] = useReducer(reducer,initial);

    return (
        <main>
            <div>
                <header>
                    <h1>our reviews</h1>
                    <div className={styles.underline}></div>
                </header>
                <section>
                    <ReviewsCardContainer index={index} dispatch={dispatch}/>
                </section>
            </div>
        </main>
    )
}

export default ReviewsParentComponent