import React,{useState,useEffect,useReducer} from 'react';
import styles from '../../styles.module.css';
import { data } from './data';

function TabsContainer() {
    const [tabs,setTabs] = useState(data);
    const [hover,setHover] = useState('tour');

    const filterHandler = (e) => {
        setHover(e.target.innerText.toLocaleLowerCase());
        const tabName = e.target.innerText.toLowerCase();
        const filtered = data.filter(tab => {
            return tab.tabName.toLocaleLowerCase() === tabName;
        });
        setTabs(filtered);
    }

    useEffect(() => {
        const filtered = data.filter(tab => {
            return tab.tabName === 'tour';
        });
        setTabs(filtered);
    },[])

    return (
        <div className={styles.container}>
            <nav>
                <span className={hover === 'tour' ? styles.hovered : null} onMouseOver={filterHandler}>Tour</span>
                <span className={hover === 'features' ? styles.hovered : null} onMouseOver={filterHandler}>Features</span>
                <span className={hover === 'pricing' ? styles.hovered : null} onMouseOver={filterHandler}>Pricing</span>
            </nav>

            <div className={styles.tabsContainer}>
                {
                    tabs.map(tab => {
                        return (
                            <div className={styles.tabCard} key={tab.id}>
                                <img src={tab.img}/>
                                <span>{tab.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TabsContainer;