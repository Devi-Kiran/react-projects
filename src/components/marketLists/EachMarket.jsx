import React,{useState} from 'react';
import styles from '../../styles.module.css';

function EachMarket({shopName,content}) {
    const [showContent,setShowContent] = useState(false);

    return (
        <>
            <div className={styles.contentContainer} onClick={() => setShowContent(!showContent)}>
                <div className={styles.title}><p>{shopName}</p> <span className={showContent ? styles.tomato : null}>{showContent ? '-' : '+'}</span></div>
                {showContent && <p>{content}</p>}
            </div> 
        </>
    )
}

export default EachMarket