import React from 'react';
import styles from '../../styles.module.css';

function TourismSection({places,deleteHandler}) {
    return (
        <section>
            {places.map(tour => {
            return (
                    <div className={styles.tourCard} key={tour.id}>
                        <img className={styles.tourImage} src={tour.image}/>
                        <div className={styles.descriptionBox}>
                            <div className={styles.flexBox}>
                                <p className={styles.tourTitle}>Best of {tour.place} in {tour.days} Tour</p>
                                <span className={styles.tourCost}>${tour.cost}</span>
                            </div>
                            <p className={styles.tourDescription}>{tour.description.slice(0,170)}...<button className={styles.tourCost}>Read More</button></p>
                            <button className={styles.deleteButton} onClick={() => deleteHandler(tour.id)}>Not interested</button>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default TourismSection