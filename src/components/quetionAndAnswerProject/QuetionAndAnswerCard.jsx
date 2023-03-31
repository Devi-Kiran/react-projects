import {useState} from 'react';
import styles from '../../styles.module.css';

function QuetionAndAnswerCard({data}) {
    const [logic,setLogic] = useState(false);

    return (
        <div className={styles.qCard}>
            <div className={styles.qAndAContainer}>
                <p className={styles.quetion}><b>{data.quetion}</b></p>
                {logic && <p className={styles.answer}>{data.answer}</p>}
            </div>
            <div>
                <button onClick={() => setLogic(!logic)}>{logic ? '-' : '+'}</button>
            </div>
        </div>
    )
}

export default QuetionAndAnswerCard;