import {useState,useContext} from 'react';
import styles from '../../styles.module.css';
import { DeleteCard } from './ToursPageContainer';

function TourCardComponent({tour}) {
    const {id,image,cost,days,description,place} = tour;
    const [readMore,setReadMore] = useState(false);
    const deleteHandler = useContext(DeleteCard);

    return (
        <div className={styles.tourCard}>
                        <img className={styles.tourImage} src={image}/>
                        <div className={styles.descriptionBox}>
                            <div className={styles.flexBox}>
                                <p className={styles.tourTitle}>Best of {place} in {days} Tour</p>
                                <span className={styles.tourCost}>${cost}</span>
                            </div>
                            <p className={styles.tourDescription}>{readMore ? description : description.slice(0,170)}
                                <button style={{border: 'none'}} onClick={() => setReadMore(!readMore)} className={styles.tourCost}>{readMore ? 'show less' : 'read more'}</button>
                            </p>
                            <button className={styles.deleteButton} onClick={() => deleteHandler(id)}>Not interested</button>
                        </div>
        </div>
    )
}

export default TourCardComponent;