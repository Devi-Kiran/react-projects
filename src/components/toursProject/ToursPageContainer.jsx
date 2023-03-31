import React,{useState} from 'react';
import TourismSection from './TourismSection';
import styles from '../../styles.module.css';
import Data from './Data';

export const DeleteCard = React.createContext();

function ToursPageContainer() {
    const [places,setPlaces] = useState(Data);

    const deleteHandler = (id) => {
        setPlaces(places.filter(place => place.id !== id))
    }

    return (
        <main>
            <header>
                <h1>{places.length !== 0 ? 'Our Tours' : 'No Tours Left'}</h1>
            </header>
            <DeleteCard.Provider value={deleteHandler}>
                <TourismSection places={places} deleteHandler={deleteHandler}/>
            </DeleteCard.Provider>
            {places.length === 0 && <button className={styles.refreshButton} onClick={() => setPlaces(Data)}>Refresh</button>}
        </main>
    )
}

export default ToursPageContainer;